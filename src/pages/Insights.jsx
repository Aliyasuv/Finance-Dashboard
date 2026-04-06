import { useFinance } from "../context/FinanceContext";

export default function Insights() {
  const { transactions } = useFinance();

  const categoryTotals = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  )[0];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Insights</h2>

      <div className="bg-[#111827] p-6 rounded-xl">
        <p className="text-gray-400">Highest Spending Category</p>
        <h2 className="text-2xl text-red-400 font-bold">
          {highest?.[0]} (₹{highest?.[1]})
        </h2>
      </div>

      <div className="bg-[#111827] p-6 rounded-xl">
        <p className="text-gray-400">Total Transactions</p>
        <h2 className="text-2xl font-bold">
          {transactions.length}
        </h2>
      </div>
    </div>
  );
}