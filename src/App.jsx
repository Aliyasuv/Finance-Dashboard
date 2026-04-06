import { useState } from "react";
import { FinanceProvider } from "./context/FinanceContext";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("viewer");

  return (
    <FinanceProvider>
      <div className="flex bg-[#0f172a] text-white min-h-screen">
        
        {/* Sidebar */}
        <Sidebar setPage={setPage} />

        {/* Main Content */}
        <div className="flex-1 p-6">
          
          {/* Topbar */}
          <Topbar role={role} setRole={setRole} />

          {/* Pages */}
          {page === "dashboard" && <Dashboard />}
          {page === "transactions" && <Transactions role={role} />}
          {page === "insights" && <Insights />}
        </div>
      </div>
    </FinanceProvider>
  );
}

function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-[#020617] p-6 space-y-8">
      <h1 className="text-xl font-bold text-white">FinanceDash</h1>

      <div>
        <p className="text-gray-500 text-xs mb-3">MAIN</p>
        <ul className="space-y-3">
          <li onClick={() => setPage("dashboard")} className="cursor-pointer hover:text-blue-400">
            Dashboard
          </li>
          <li onClick={() => setPage("transactions")} className="cursor-pointer hover:text-blue-400">
            Transactions
          </li>
          <li onClick={() => setPage("insights")} className="cursor-pointer hover:text-blue-400">
            Insights
          </li>
        </ul>
      </div>
    </div>
  );
}

function Topbar({ role, setRole }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <input
        className="bg-[#1e293b] px-4 py-2 rounded-md outline-none text-white"
        placeholder="Search..."
      />

      <div className="flex items-center gap-4">
        
        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-[#1e293b] px-2 py-1 rounded"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
}