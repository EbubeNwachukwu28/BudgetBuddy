import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { monthlyData } from "../data/sampleData";

const ReportsChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={monthlyData}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="amount" stroke="#3B82F6" fill="#DBEAFE" />
    </AreaChart>
  </ResponsiveContainer>
);

export default ReportsChart;
