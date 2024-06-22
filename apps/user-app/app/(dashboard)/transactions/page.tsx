import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import P2PtransactionsReceived from "../../../components/P2PtransactionsReceived";
import P2PtransactionsGiven from "../../../components/P2PtransactionsGiven";

const getP2PtransactionsReceived = async () => {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
  }));
};

const getP2PtransactionsGiven = async () => {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
  }));
};

export default async function () {
  const creditedTransactions = await getP2PtransactionsReceived();
  const debitedTransactions = await getP2PtransactionsGiven();
  return (
    <div className="w-6/12 mx-auto mt-12">
      <P2PtransactionsReceived transactions={creditedTransactions} />
      <P2PtransactionsGiven transactions={debitedTransactions} />
    </div>
  );
}
