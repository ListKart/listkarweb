import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  const { action } = req.query;
  try {
    switch (action) {
      case 'share_list':
        return await shareList(req, res);
      case 'inspect_list':
        return await inspectList(req, res);
      case 'join_list':
        return await joinList(req, res);
      case 'get_updates':
        return await getUpdates(req, res);
      case 'sync_items':
        return await syncItems(req, res);
      case 'get_streak':
        return await getStreak(req, res);
      case 'update_streak':
        return await updateStreak(req, res);
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function shareList(req, res) {
  const { list_name, device_id } = req.body;
  const sharing_code = Math.floor(100000 + Math.random() * 900000).toString();
  const { rows } = await sql\
    INSERT INTO shared_lists (sharing_code, list_name) 
    VALUES (\, \) 
    RETURNING id;
  \;
  const list_id = rows[0].id;
  if (device_id) {
    await sql\
      INSERT INTO shared_list_participants (shared_list_id, device_id) 
      VALUES (\, \) 
      ON CONFLICT DO NOTHING;
    \;
  }
  return res.json({ success: true, sharing_code, id: list_id });
}

async function inspectList(req, res) {
  const { sharing_code } = req.query;
  const { rows } = await sql\
    SELECT id, list_name FROM shared_lists WHERE sharing_code = \;
  \;
  if (rows.length === 0) return res.status(404).json({ error: 'List not found' });
  const list = rows[0];
  const { count } = (await sql\
    SELECT COUNT(*) FROM shared_list_items WHERE shared_list_id = \;
  \).rows[0];
  return res.json({
    success: true,
    id: list.id,
    list_name: list.list_name,
    item_count: parseInt(count)
  });
}

async function joinList(req, res) {
  const { sharing_code, device_id } = req.body;
  const { rows: listRows } = await sql\
    SELECT id, list_name FROM shared_lists WHERE sharing_code = \;
  \;
  if (listRows.length === 0) return res.status(404).json({ error: 'List not found' });
  const list = listRows[0];
  await sql\
    INSERT INTO shared_list_participants (shared_list_id, device_id) 
    VALUES (\, \) 
    ON CONFLICT (shared_list_id, device_id) DO NOTHING;
  \;
  const { rows: items } = await sql\
    SELECT * FROM shared_list_items WHERE shared_list_id = \ ORDER BY order_index;
  \;
  return res.json({ success: true, id: list.id, list_name: list.list_name, items });
}

async function getUpdates(req, res) {
  const { list_id } = req.query;
  const { rows: items } = await sql\
    SELECT * FROM shared_list_items WHERE shared_list_id = \ ORDER BY order_index;
  \;
  return res.json({ success: true, items });
}

async function syncItems(req, res) {
  const { list_id, items } = req.body;
  for (const item of items) {
    if (item.op === 'delete') {
      await sql\
        DELETE FROM shared_list_items 
        WHERE shared_list_id = \ AND item_id = \;
      \;
    } else {
      await sql\
        INSERT INTO shared_list_items 
        (shared_list_id, item_id, product_id, product_name, quantity, unit, is_completed, price_when_added, order_index)
        VALUES (\, \, \, \, \, \, \, \, \)
        ON CONFLICT (shared_list_id, item_id) DO UPDATE SET
          quantity = EXCLUDED.quantity,
          unit = EXCLUDED.unit,
          is_completed = EXCLUDED.is_completed,
          price_when_added = EXCLUDED.price_when_added,
          order_index = EXCLUDED.order_index,
          updated_at = CURRENT_TIMESTAMP;
      \;
    }
  }
  return res.json({ success: true });
}

async function getStreak(req, res) {
  const { user_id } = req.query;
  const { rows } = await sql\SELECT * FROM user_streaks WHERE user_id = \;\;
  return res.json({ success: true, data: rows[0] || null });
}

async function updateStreak(req, res) {
  const data = req.body;
  await sql\
    INSERT INTO user_streaks 
    (user_id, current_streak, longest_streak, last_collected_date, total_collected, collected_ingredients, badges_earned)
    VALUES (\, \, \, \, \, \, \)
    ON CONFLICT (user_id) DO UPDATE SET
      current_streak = EXCLUDED.current_streak,
      longest_streak = EXCLUDED.longest_streak,
      last_collected_date = EXCLUDED.last_collected_date,
      total_collected = EXCLUDED.total_collected,
      collected_ingredients = EXCLUDED.collected_ingredients,
      badges_earned = EXCLUDED.badges_earned,
      updated_at = CURRENT_TIMESTAMP;
  \;
  return res.json({ success: true });
}

