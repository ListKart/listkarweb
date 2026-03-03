import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

// Handle custom prefix 'STORAGE' provided by user in Vercel
const connectionString = 
  process.env.STORAGE_POSTGRES_URL || 
  process.env.STORAGE_URL || 
  process.env.POSTGRES_URL || 
  process.env.DATABASE_URL;

// Initialize the neon client with the connection string
const sql = neon(connectionString);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    if (!connectionString) {
      throw new Error("No database connection string found. Please check Vercel environment variables.");
    }

    switch (action) {
      case 'inspect_list':
        return await inspectList(searchParams);
      case 'get_updates':
        return await getUpdates(searchParams);
      case 'get_streak':
        return await getStreak(searchParams);
      case 'debug_env':
        const keys = Object.keys(process.env).filter(k => k.includes('URL') || k.includes('POSTGRES') || k.includes('STORAGE'));
        return NextResponse.json({ 
          has_connection_string: !!connectionString,
          detected_keys: keys,
          env_check: "Diagnostic complete"
        });
      default:
        return NextResponse.json({ error: 'Invalid GET action' }, { status: 400 });
    }
  } catch (error) {
    console.error('API Error:', error.message);
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
    console.error('API Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function shareList(body) {
  const { list_name, device_id } = body;
  const sharing_code = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Create shared_list
  const list_rows = await sql(
    'INSERT INTO shared_lists (sharing_code, list_name) VALUES (, ) RETURNING id',
    [sharing_code, list_name]
  );
  
  const list_id = list_rows[0].id;

  if (device_id) {
    await sql(
      'INSERT INTO shared_list_participants (shared_list_id, device_id) VALUES (, ) ON CONFLICT DO NOTHING',
      [list_id, device_id]
    );
  }
  
  return NextResponse.json({ success: true, sharing_code, id: list_id });
}

async function inspectList(searchParams) {
  const sharing_code = searchParams.get('sharing_code');
  const rows = await sql(
    'SELECT id, list_name FROM shared_lists WHERE sharing_code = ',
    [sharing_code]
  );
  
  if (rows.length === 0) return NextResponse.json({ error: 'List not found' }, { status: 404 });
  
  const list = rows[0];
  const count_rows = await sql(
    'SELECT COUNT(*) FROM shared_list_items WHERE shared_list_id = ',
    [list.id]
  );
  
  return NextResponse.json({
    success: true,
    id: list.id,
    list_name: list.list_name,
    item_count: parseInt(count_rows[0].count)
  });
}

async function joinList(body) {
  const { sharing_code, device_id } = body;
  const rows = await sql(
    'SELECT id, list_name FROM shared_lists WHERE sharing_code = ',
    [sharing_code]
  );
  
  if (rows.length === 0) return NextResponse.json({ error: 'List not found' }, { status: 404 });
  
  const list = rows[0];
  await sql(
    'INSERT INTO shared_list_participants (shared_list_id, device_id) VALUES (, ) ON CONFLICT (shared_list_id, device_id) DO NOTHING',
    [list.id, device_id]
  );
  
  const items = await sql(
    'SELECT * FROM shared_list_items WHERE shared_list_id =  ORDER BY order_index',
    [list.id]
  );
  
  return NextResponse.json({ success: true, id: list.id, list_name: list.list_name, items });
}

async function getUpdates(searchParams) {
  const list_id = searchParams.get('list_id');
  const items = await sql(
    'SELECT * FROM shared_list_items WHERE shared_list_id =  ORDER BY order_index',
    [list_id]
  );
  return NextResponse.json({ success: true, items });
}

async function syncItems(body) {
  const { list_id, items } = body;
  for (const item of items) {
    if (item.op === 'delete') {
      await sql(
        'DELETE FROM shared_list_items WHERE shared_list_id =  AND item_id = ',
        [list_id, item.item_id]
      );
    } else {
      await sql(
        'INSERT INTO shared_list_items (shared_list_id, item_id, product_id, product_name, quantity, unit, is_completed, price_when_added, order_index) VALUES (, , , , , , , , ) ON CONFLICT (shared_list_id, item_id) DO UPDATE SET quantity = EXCLUDED.quantity, unit = EXCLUDED.unit, is_completed = EXCLUDED.is_completed, price_when_added = EXCLUDED.price_when_added, order_index = EXCLUDED.order_index, updated_at = CURRENT_TIMESTAMP',
        [list_id, item.item_id, item.product_id, item.product_name, item.quantity, item.unit, item.is_completed, item.price_when_added, item.order_index]
      );
    }
  }
  return NextResponse.json({ success: true });
}

async function getStreak(searchParams) {
  const user_id = searchParams.get('user_id');
  const rows = await sql('SELECT * FROM user_streaks WHERE user_id = ', [user_id]);
  return NextResponse.json({ success: true, data: rows[0] || null });
}

async function updateStreak(body) {
  const data = body;
  await sql(
    'INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_collected_date, total_collected, collected_ingredients, badges_earned) VALUES (, , , , , , ) ON CONFLICT (user_id) DO UPDATE SET current_streak = EXCLUDED.current_streak, longest_streak = EXCLUDED.longest_streak, last_collected_date = EXCLUDED.last_collected_date, total_collected = EXCLUDED.total_collected, collected_ingredients = EXCLUDED.collected_ingredients, badges_earned = EXCLUDED.badges_earned, updated_at = CURRENT_TIMESTAMP',
    [data.user_id, data.current_streak, data.longest_streak, data.last_collected_date, data.total_collected, JSON.stringify(data.collected_ingredients), JSON.stringify(data.badges_earned)]
  );
  return NextResponse.json({ success: true });
}