import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export interface ReportsChartProps {
  data: { month: string; amount: number }[];
}

const ReportsChart: React.FC<ReportsChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <XAxis dataKey="month" />
      <YAxis domain={[0, "dataMax"]} />
      <Tooltip />
      <Bar dataKey="amount" fill="#3B82F6" />
    </BarChart>
  </ResponsiveContainer>
);

export default ReportsChart;
