import { NextResponse } from "next/server";
import  prisma  from "@/lib/prisma";

export async function POST(request: Request) {
  const res = await request.json();
  const { title, author, content } = res;
  console.log({ res });
  const result = await prisma.post.create({
    data: {
      title,
      author: {create: {name: 'Lucious'}},
      content,
      published: true,

   
    },
  });

  return NextResponse.json({result});
}
