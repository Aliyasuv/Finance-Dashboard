import { useFinance } from "../context/FinanceContext";

export default function Transactions({ role }) {
  const { transactions, addTransaction } = useFinance();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Transactions</h2>

      {/* Role Info */}
      <p className="text-gray-400">
        Current Role: <span className="capitalize">{role}</span>
      </p>

      {/* Admin Action */}
      {role === "admin" && (
        <button
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() =>
            addTransaction({
              date: "2026-04-01",
              amount: 1000,
              category: "Test",
              type: "expense",
            })
          }
        >
          + Add Transaction
        </button>
      )}

      {/* Viewer Notice */}
      {role === "viewer" && (
        <p className="text-yellow-400 text-sm">
          Viewer mode: You can only view transactions
        </p>
      )}

      {/* Table */}
      <div className="bg-[#020617] rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#111827] text-gray-400 text-sm">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-400">
                  No transactions available
                </td>
              </tr>
            ) : (
              transactions.map((t) => (
                <tr
                  key={t.id}
                  className="border-t border-gray-800 hover:bg-[#111827]"
                >
                  <td className="p-3">{t.date}</td>
                  <td className="p-3">₹{t.amount}</td>
                  <td className="p-3">{t.category}</td>
                  <td
                    className={`p-3 ${
                      t.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {t.type}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}