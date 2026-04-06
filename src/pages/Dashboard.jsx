// src/pages/Dashboard.jsx
import { useFinance } from "../context/FinanceContext";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Cards from "../Components/Cards";
import Charts from "../Components/Charts";

export default function Dashboard() {
  const { transactions } = useFinance();

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const categoryData = Object.values(
    transactions.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category] || {
        name: curr.category,
        value: 0
      };
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Dashboard</h2>

      {/* Cards */}
      <Cards />

      {/* Summary */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#111827] p-5 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm">Balance</p>
          <h2 className="text-2xl font-bold text-white">₹{balance}</h2>
        </div>

        <div className="bg-[#111827] p-5 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm">Income</p>
          <h2 className="text-2xl font-bold text-green-400">₹{income}</h2>
        </div>

        <div className="bg-[#111827] p-5 rounded-xl shadow-lg">
          <p className="text-gray-400 text-sm">Expense</p>
          <h2 className="text-2xl font-bold text-red-400">₹{expense}</h2>
        </div>
      </div>

      {/* Charts component */}
      <Charts />

      {/* Graphs */}
      <div className="grid grid-cols-3 gap-6">
        {/* PIE */}
        <div className="bg-[#020617] p-6 rounded-xl">
          <h3 className="text-gray-400 mb-4">Spending Breakdown</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" fill="#8b5cf6" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LINE */}
        <div className="col-span-2 bg-[#020617] p-6 rounded-xl">
          <h3 className="text-gray-400 mb-4">Revenue Trend</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transactions}>
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8b5cf6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}