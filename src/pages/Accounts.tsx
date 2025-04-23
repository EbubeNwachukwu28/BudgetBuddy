import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const accounts = [
  { name: "Checking", balance: 3200 },
  { name: "Savings", balance: 10500 },
  { name: "Credit Card", balance: -500 },
];

const Accounts: React.FC = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Accounts</h1>
      <Button>+ Add Account</Button>
    </div>
    <div className="space-y-4">
      {accounts.map((acc) => (
        <Card key={acc.name} className="flex justify-between items-center">
          <span className="font-medium">{acc.name}</span>
          <span className="text-xl font-semibold">
            {acc.balance < 0 ? "–" : "$"}
            {Math.abs(acc.balance).toLocaleString()}
          </span>
        </Card>
      ))}
    </div>
  </div>
);

export default Accounts;
