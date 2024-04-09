"use client";
import { FC } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { ISelectedCalenderRange } from "../button/button";

interface DataItem {
  date: string;
  value: number;
}

const generateData = (range: string): DataItem[] => {
  const data: DataItem[] = [];
  const currentDate = new Date();

  if (range === "1 Jan - 1 Jun") {
    for (let month = 0; month < 6; month++) {
      const startDate = new Date(currentDate.getFullYear(), month, 1);
      const endDate = new Date(currentDate.getFullYear(), month + 1, 0);

      for (let day = startDate.getDate(); day <= endDate.getDate(); day++) {
        const date = new Date(currentDate.getFullYear(), month, day);
        data.push({
          date: date.toISOString().substr(0, 10),
          value: 1 + Math.random(),
        });
      }
    }
  } else if (range === "1 July - 1 Dec") {
    for (let month = 6; month < 12; month++) {
      const startDate = new Date(currentDate.getFullYear(), month, 1);
      const endDate = new Date(currentDate.getFullYear(), month + 1, 0);

      for (let day = startDate.getDate(); day <= endDate.getDate(); day++) {
        const date = new Date(currentDate.getFullYear(), month, day);
        data.push({
          date: date.toISOString().substr(0, 10),
          value: 1 + Math.random(),
        });
      }
    }
  } else {
    throw new Error("Invalid range specified");
  }

  return data;
};

const CustomTooltip: FC<{
  active?: boolean;
  payload?: any[];
  label?: string;
}> = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label || ""), "eeee, d MMM, yyyy")}</h4>
        <p>${payload[0]?.value.toFixed(2)} CAD</p>
      </div>
    );
  }
  return null;
};

interface TransactionVolumeChartProps {
  selectedCalenderRange: ISelectedCalenderRange;
}

const TransactionVolumeChart: FC<TransactionVolumeChartProps> = ({
  selectedCalenderRange,
}) => {
  const data = generateData(selectedCalenderRange?.name);

  const monthStartIndices: number[] = [];
  data.forEach((entry, index) => {
    const date = parseISO(entry.date);
    if (date.getDate() === 1 && index !== 0) {
      monthStartIndices.push(index);
    }
  });

  return (
    <div className="p-3">
      <ResponsiveContainer width="100%" className={"bg-white"} height={236.96}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#42B6F6" stopOpacity={1} />
              <stop offset="75%" stopColor="#42B6F6" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="transparent" fill="url(#color)" />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            orientation="top"
            tickFormatter={(str, index) => {
              const date = parseISO(str);
              if (index % 30 === 0) {
                return format(date, "MMM");
              }
              return "";
            }}
            className=" font-bold  text-black"
          />

          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            hide
            tickFormatter={(number) => `${number.toFixed(2)}`}
          />

          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionVolumeChart;
