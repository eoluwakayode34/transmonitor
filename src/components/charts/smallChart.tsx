"use client";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

const data: any[] | undefined = [];
for (let num = 14; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}

export default function Home() {
  return (
    <ResponsiveContainer width={67} height={50}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#42B6F6" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#42B6F6" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#42B6F6" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
          hide
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          hide
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <CartesianGrid opacity={0.1} vertical={false} horizontal={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
