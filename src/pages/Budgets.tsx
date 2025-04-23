import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const budgets = [
  { category: "Food", spent: 350, limit: 400 },
  { category: "Transportation", spent: 150, limit: 200 },
  { category: "Entertainment", spent: 100, limit: 150 },
];

const Budgets: React.FC = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Budgets</h1>
      <Button>+ Add Budget</Button>
    </div>
    <div className="space-y-4">
      {budgets.map((b) => {
        const pct = Math.min(100, (b.spent / b.limit) * 100);
        return (
          <Card key={b.category} className="flex items-center justify-between">
            <div className="w-1/3 font-medium">{b.category}</div>
            <div className="w-1/2">
              <ProgressBar percentage={pct} />
            </div>
            <div className="w-1/6 text-right">
              <span className="font-semibold">${b.spent}</span>
              <span className="text-gray-500 ml-1">${b.limit}</span>
            </div>
          </Card>
        );
      })}
    </div>
  </div>
);

export default Budgets;
