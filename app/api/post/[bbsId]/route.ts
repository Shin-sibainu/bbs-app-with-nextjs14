import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) {
  const bbsId = params.bbsId;
  const bbsDetailPost = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });
  console.log(bbsDetailPost);
  return NextResponse.json(bbsDetailPost);
}
