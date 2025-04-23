import React from "react";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { monthlyData } from "../data/sampleData";

const transactions = [
  { id: 1, title: "Groceries", amount: -45.2, date: "Apr 16" },
  { id: 2, title: "Gas", amount: -50, date: "Apr 12" },
  { id: 3, title: "Dining", amount: -30.5, date: "Apr 17" },
  { id: 4, title: "Rent", amount: -1200.6, date: "Apr 15" },
  { id: 5, title: "Shopping", amount: -90.75, date: "Apr 12" },
];

const Dashboard: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Good evening, Ebube!</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <div className="text-gray-500">Current Balance</div>
        <div className="text-4xl font-semibold">$8,750</div>
      </Card>
      <Card>
        <div className="text-gray-500">This Week’s Spending</div>
        <div className="text-4xl font-semibold">$350</div>
        <div className="text-green-600 mt-1">You’re $50 below your budget.</div>
      </Card>
      <Card>
        <div className="text-gray-500">Budget & Alerts</div>
        <div className="mt-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Food</span>
            <span>70%</span>
          </div>
          <ProgressBar percentage={70} />
          <div className="text-yellow-600 text-sm mt-1">
            “Rent” budget exceeded!
          </div>
        </div>
      </Card>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <div className="text-gray-500 mb-2">Recent Transactions</div>
        <ul className="space-y-2">
          {transactions.map((tx) => (
            <li key={tx.id} className="flex justify-between">
              <span>{tx.title}</span>
              <span
                className={tx.amount < 0 ? "text-red-600" : "text-green-600"}
              >
                {tx.amount < 0 ? "–" : ""}${Math.abs(tx.amount)}
              </span>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <div className="text-gray-500 mb-2">Monthly Spending</div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  </div>
);

export default Dashboard;
