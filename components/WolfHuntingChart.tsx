"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DataPoint {
  year: string;
  kills: number;
}

const data: DataPoint[] = [
  { year: "2015", kills: 120 },
  { year: "2016", kills: 100 },
  { year: "2017", kills: 80 },
  { year: "2018", kills: 95 },
  { year: "2019", kills: 110 },
  { year: "2020", kills: 90 },
  { year: "2021", kills: 105 }
];

export function WolfHuntingChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="kills" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
