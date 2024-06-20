"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);
  const userId = session.user?.id;
  if (!userId) {
    return {
      msg: "User not logged in",
    };
  }
  const token = (Math.random() * 100).toString();
  await prisma.onRampTransaction.create({
    data: {
      amount: amount * 100,
      provider,
      status: "Processing",
      token: token,
      userId: Number(session?.user?.id),
      startTime: new Date(),
    },
  });

  return {
    msg: "Done",
  };
}
