import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
  try {
    return Response.json({ status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}