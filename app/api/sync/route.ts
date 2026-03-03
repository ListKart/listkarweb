import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    if (action === 'debug_env') {
      const keys = Object.keys(process.env).filter(k =>
        k.includes('URL') || k.includes('POSTGRES') || k.includes('STORAGE') || k.includes('DATABASE')
      );
      return NextResponse.json({ detected_keys: keys, node_env: process.env.NODE_ENV });
    }

    switch (action) {
      case 'inspect_list': return await inspectList(searchParams);
      case 'get_updates': return await getUpdates(searchParams);
      case 'get_streak': return await getStreak(searchParams);
      default: return NextResponse.json({ error: 'Invalid GET action' }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    const body = await req.json();
    switch (action) {
      case 'share_list': return await shareList(body);
      case 'join_list': return await joinList(body);
      case 'sync_items': return await syncItems(body);
      case 'update_streak': return await updateStreak(body);
      default: return NextResponse.json({ error: 'Invalid POST action' }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function shareList(body: any) {
  const { list_name, device_id } = body;
  const sharing_code = Math.floor(100000 + Math.random() * 900000).toString();
  const result = await sql`INSERT INTO shared_lists (sharing_code, list_name) VALUES (${sharing_code}, ${list_name}) RETURNING id`;
  const list_id = result.rows[0].id;
  if (device_id) {
    await sql`INSERT INTO shared_list_participants (shared_list_id, device_id) VALUES (${list_id}, ${device_id}) ON CONFLICT DO NOTHING`;
  }
  return NextResponse.json({ success: true, sharing_code, id: list_id });
}

async function inspectList(searchParams: URLSearchParams) {
  const sharing_code = searchParams.get('sharing_code');
  const result = await sql`SELECT id, list_name FROM shared_lists WHERE sharing_code = ${sharing_code}`;
  if (result.rows.length === 0) return NextResponse.json({ error: 'List not found' }, { status: 404 });
  const list = result.rows[0];
  const count = await sql`SELECT COUNT(*) FROM shared_list_items WHERE shared_list_id = ${list.id}`;
  return NextResponse.json({ success: true, id: list.id, list_name: list.list_name, item_count: parseInt(count.rows[0].count) });
}

async function joinList(body: any) {
  const { sharing_code, device_id } = body;
  const result = await sql`SELECT id, list_name FROM shared_lists WHERE sharing_code = ${sharing_code}`;
  if (result.rows.length === 0) return NextResponse.json({ error: 'List not found' }, { status: 404 });
  const list = result.rows[0];
  await sql`INSERT INTO shared_list_participants (shared_list_id, device_id) VALUES (${list.id}, ${device_id}) ON CONFLICT (shared_list_id, device_id) DO NOTHING`;
  const items = await sql`SELECT * FROM shared_list_items WHERE shared_list_id = ${list.id} ORDER BY order_index`;
  return NextResponse.json({ success: true, id: list.id, list_name: list.list_name, items: items.rows });
}

async function getUpdates(searchParams: URLSearchParams) {
  const list_id = searchParams.get('list_id');
  const items = await sql`SELECT * FROM shared_list_items WHERE shared_list_id = ${list_id} ORDER BY order_index`;
  return NextResponse.json({ success: true, items: items.rows });
}

async function syncItems(body: any) {
  const { list_id, items } = body;
  for (const item of items) {
    if (item.op === 'delete') {
      await sql`DELETE FROM shared_list_items WHERE shared_list_id = ${list_id} AND item_id = ${item.item_id}`;
    } else {
      await sql`INSERT INTO shared_list_items (shared_list_id, item_id, product_id, product_name, quantity, unit, is_completed, price_when_added, order_index)
        VALUES (${list_id}, ${item.item_id}, ${item.product_id}, ${item.product_name}, ${item.quantity}, ${item.unit}, ${item.is_completed}, ${item.price_when_added}, ${item.order_index})
        ON CONFLICT (shared_list_id, item_id) DO UPDATE SET
          quantity = EXCLUDED.quantity, unit = EXCLUDED.unit, is_completed = EXCLUDED.is_completed,
          price_when_added = EXCLUDED.price_when_added, order_index = EXCLUDED.order_index,
          updated_at = CURRENT_TIMESTAMP`;
    }
  }
  return NextResponse.json({ success: true });
}

async function getStreak(searchParams: URLSearchParams) {
  const user_id = searchParams.get('user_id');
  const result = await sql`SELECT * FROM user_streaks WHERE user_id = ${user_id}`;
  return NextResponse.json({ success: true, data: result.rows[0] || null });
}

async function updateStreak(body: any) {
  const collected = JSON.stringify(body.collected_ingredients);
  const badges = JSON.stringify(body.badges_earned);
  await sql`INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_collected_date, total_collected, collected_ingredients, badges_earned)
    VALUES (${body.user_id}, ${body.current_streak}, ${body.longest_streak}, ${body.last_collected_date}, ${body.total_collected}, ${collected}, ${badges})
    ON CONFLICT (user_id) DO UPDATE SET
      current_streak = EXCLUDED.current_streak, longest_streak = EXCLUDED.longest_streak,
      last_collected_date = EXCLUDED.last_collected_date, total_collected = EXCLUDED.total_collected,
      collected_ingredients = EXCLUDED.collected_ingredients, badges_earned = EXCLUDED.badges_earned,
      updated_at = CURRENT_TIMESTAMP`;
  return NextResponse.json({ success: true });
}