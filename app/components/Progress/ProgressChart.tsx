"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ProgressChartProps {
  data: number[];
}

const ProgressChart = ({ data }: ProgressChartProps) => {
  // Transform the data array into the format Recharts expects
  const chartData = data.map((value, index) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
    progress: value,
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="progress" fill="#4db6ac" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
