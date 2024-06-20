import P2Ptransactions from "../../../components/P2Ptransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

const getP2Ptransactions = async () => {
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
  const transactions = await getP2Ptransactions();
  return (
    <div className="w-6/12 mx-auto mt-12">
      <P2Ptransactions transactions={transactions} />
    </div>
  );
}
