import { NextResponse } from 'next/server';

export async function GET(req) {
    return NextResponse.json({
        message: "App Router API is active",
        note: "No-Postgres test version",
        status: "Healthy"
    });
}

export async function POST(req) {
    return NextResponse.json({
        message: "POST method received",
        status: "Healthy"
    });
}
