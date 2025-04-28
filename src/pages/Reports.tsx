import React from "react";
import Card from "../components/Card";
import ReportsChart from "../components/ReportsChart";
// import your sample (or fetched) monthlyData array
import { monthlyData } from "../data/sampleData";

const Reports: React.FC = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Reports</h1>
    <Card>
      <div className="text-xl font-medium mb-4">Monthly Spending</div>
      {/* pass the data prop down */}
      <ReportsChart data={monthlyData} />
    </Card>
  </div>
);

export default Reports;
