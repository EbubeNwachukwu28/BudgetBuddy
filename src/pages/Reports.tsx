import React from "react";
import Card from "../components/Card";
import ReportsChart from "../components/ReportsChart";

const Reports: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Reports</h1>
    <Card>
      <div className="text-xl font-medium mb-4">Monthly Spending</div>
      <ReportsChart />
    </Card>
  </div>
);

export default Reports;
