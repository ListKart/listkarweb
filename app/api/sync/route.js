import { createPool } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Handle custom prefix 'STORAGE' provided by user in Vercel
const pool = createPool({
  connectionString: process.env.STORAGE_URL || process.env.POSTGRES_URL
});

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    switch (action) {
      case 'inspect_list':
        return await inspectList(searchParams);
      case 'get_updates':
        return await getUpdates(searchParams);
      case 'get_streak':
        return await getStreak(searchParams);
      default:
        return NextResponse.json({ error: 'Invalid GET action' }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    const body = await req.json();
    switch (action) {
      case 'share_list':
        return await shareList(body);
      case 'join_list':
        return await joinList(body);
      case 'sync_items':
        return await syncItems(body);
      case 'update_streak':
        return await updateStreak(body);
      default:
        return NextResponse.json({ error: 'Invalid POST action' }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function shareList(body) {
  const { list_name, device_id } = body;
  const sharing_code = Math.floor(100000 + Math.random() * 900000).toString();
  const { rows } = await pool.sql\
    INSERT INTO shared_lists (sharing_code, list_name) 
    VALUES (\, \) 
    RETURNING id;
  \;
  const list_id = rows[0].id;
  if (device_id) {
    await pool.sql\
      INSERT INTO shared_list_participants (shared_list_id, device_id) 
      VALUES (\, \) 
      ON CONFLICT DO NOTHING;
    \;
  }
  return NextResponse.json({ success: true, sharing_code, id: list_id });
}

async function inspectList(searchParams) {
  const sharing_code = searchParams.get('sharing_code');
  const { rows } = await pool.sql\
    SELECT id, list_name FROM shared_lists WHERE sharing_code = \;
  \;
  if (rows.length === 0) return NextResponse.json({ error: 'List not found' }, { status: 404 });
  const list = rows[0];
  const { count } = (await pool.sql\
    SELECT COUNT(*) FROM shared_list_items WHERE shared_list_id = \;
  \).rows[0];
  return NextResponse.json({
    success: true,
    id: list.id,
    list_name: list.list_name,
    item_count: parseInt(count)
  });
}

async function joinList(body) {
  const { sharing_code, device_id } = body;
  const { rows: listRows } = await pool.sql\
    SELECT id, list_name FROM shared_lists WHERE sharing_code = \;
  \;
  if (listRows.length === 0) return NextResponse.json({ error: 'List not found' }, { status: 404 });
  const list = listRows[0];
  await pool.sql\
    INSERT INTO shared_list_participants (shared_list_id, device_id) 
    VALUES (\, \) 
    ON CONFLICT (shared_list_id, device_id) DO NOTHING;
  \;
  const { rows: items } = await pool.sql\
    SELECT * FROM shared_list_items WHERE shared_list_id = \ ORDER BY order_index;
  \;
  return NextResponse.json({ success: true, id: list.id, list_name: list.list_name, items });
}

async function getUpdates(searchParams) {
  const list_id = searchParams.get('list_id');
  const { rows: items } = await pool.sql\
    SELECT * FROM shared_list_items WHERE shared_list_id = \ ORDER BY order_index;
  \;
  return NextResponse.json({ success: true, items });
}

async function syncItems(body) {
  const { list_id, items } = body;
  for (const item of items) {
    if (item.op === 'delete') {
      await pool.sql\
        DELETE FROM shared_list_items 
        WHERE shared_list_id = \ AND item_id = \;
      \;
    } else {
      await pool.sql\
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
  return NextResponse.json({ success: true });
}

async function getStreak(searchParams) {
  const user_id = searchParams.get('user_id');
  const { rows } = await pool.sql\SELECT * FROM user_streaks WHERE user_id = \;\;
  return NextResponse.json({ success: true, data: rows[0] || null });
}

async function updateStreak(body) {
  const data = body;
  await pool.sql\
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
  return NextResponse.json({ success: true });
}