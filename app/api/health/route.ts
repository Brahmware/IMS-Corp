import { NextRequest, NextResponse } from "next/server";

// This code uses the GET method to return a 200 OK response.

export async function GET(req: NextRequest) {
  return new NextResponse('OK', { status: 200 });
};