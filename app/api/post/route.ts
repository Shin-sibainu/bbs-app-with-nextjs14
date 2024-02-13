import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, title, content } = await req.json();

  return NextResponse.json(username, title);
}
