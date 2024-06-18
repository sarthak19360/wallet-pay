import express from "express";
import db from "@repo/db/client";

const app = express();
app.use(express.json());

interface PaymentInfoType {
  token: string;
  userId: string;
  amount: string;
}

app.post("/webhook", async (req, res) => {
  const paymentInformation: PaymentInfoType = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };
  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
    res.json({
      msg: "Captured",
    });
  } catch (error) {
    console.log(error);
    res.status(411).json({
      msg: "Error while processing webhook",
    });
  }
});

app.listen(3003);
