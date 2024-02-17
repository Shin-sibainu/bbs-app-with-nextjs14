import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany();
  // console.log(allBBSPosts);
  return NextResponse.json(allBBSPosts);
}

export async function POST(req: Request) {
  const { username, title, content } = await req.json();

  // Prismaを使ってデータをデータベースに保存
  //post to supabase
  const post = await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
  // 保存したデータをレスポンスとして返す
  return NextResponse.json(post);
}
