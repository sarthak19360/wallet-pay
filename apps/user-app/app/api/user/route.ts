import { NextResponse } from "next/server";
import client from "@repo/db/client";

export const GET = async () => {
  const user = await client.user.create({
    data: {
      email: "asd",
      name: "adsads",
      number: "1234567",
      password: "defrgty",
    },
  });
  return NextResponse.json({
    message: "hi there",
  });
};
