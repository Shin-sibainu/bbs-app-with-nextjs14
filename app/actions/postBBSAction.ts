"use server";

import { BBSCardData } from "../components/types/types";
import prisma from "../../lib/prisma";
import { z } from "zod";
import { formSchema } from "../bbs-posts/create/page";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const post = await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });

  revalidatePath("/");

  redirect("/");
};
