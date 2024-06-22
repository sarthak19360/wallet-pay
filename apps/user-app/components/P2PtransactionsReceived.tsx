import { Card } from "@repo/ui/card";

export default function ({
  transactions,
}: {
  transactions: {
    amount: number;
    time: Date;
  }[];
}) {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions(Credited)">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions(Credited)">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm font-semibold">Received INR</div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center font-semibold">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
