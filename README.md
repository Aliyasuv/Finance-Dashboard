# Finance Dashboard

A modern and responsive finance dashboard built using React and Tailwind CSS.
This project allows users to track income, expenses, and gain insights into their financial activity through interactive visualizations.

---

## Features

### Dashboard Overview

* Summary cards for **Balance, Income, and Expenses**
* **Line chart** for revenue trends
* **Pie chart** for spending breakdown

### Transactions

* View all transactions in a structured table
* Displays:

  * Date
  * Amount
  * Category
  * Type (Income/Expense)
* Clean and readable UI

### Role-Based UI (Frontend Simulation)

* **Viewer**

  * Can only view data
* **Admin**

  * Can add new transactions
* Role switching implemented via UI toggle

### Insights Section

* Highlights **highest spending category**
* Shows useful financial observations
* Helps users understand spending patterns

---

## Tech Stack

* **React.js** – UI development
* **Tailwind CSS** – Styling
* **Recharts** – Data visualization
* **Context API** – State management
* **Vite** – Build tool

---

## Approach

The application is built using a **component-based architecture** for scalability and maintainability.

* Global state (transactions, role) is managed using **Context API**
* Data is processed using JavaScript array methods (filter, reduce)
* Charts are used to provide **visual insights**
* UI is designed to be **clean, minimal, and responsive**

---

## Setup Instructions

```bash
git clone https://github.com/Aliyasuv/Finance-Dashboard
cd Finance-Dashboard
npm install
npm run dev
```

---

## Live Demo
[https://finance-dashboard-tau-ten-28.vercel.app/](https://finance-dashboard-tau-ten-28.vercel.app/)
---

## Future Improvements

* Backend integration (API + database)
* Authentication system
* Advanced filtering & sorting
* Export data (CSV/PDF)
* Improved analytics & insights

---

## Author

**Aliya Ansari**
