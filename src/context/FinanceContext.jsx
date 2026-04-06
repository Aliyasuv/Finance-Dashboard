// src/context/FinanceContext.jsx
import { createContext, useContext, useState } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-03-02", amount: 1200, category: "Food", type: "expense" },
  ]);

  const [role, setRole] = useState("viewer");

  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  return (
    <FinanceContext.Provider value={{ transactions, role, setRole, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);