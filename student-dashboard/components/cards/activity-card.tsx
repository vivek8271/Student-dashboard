"use client";

import GlowCard from "./glow-card";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

type Props = {
  data: {
    day: string;
    hours: number;
  }[];
};

export default function ActivityCard({
  data,
}: Props) {
  const chartData = data && data.length > 0
    ? data
    : [
      { day: "Mon", hours: 0 },
      { day: "Tue", hours: 0 },
      { day: "Wed", hours: 0 },
      { day: "Thu", hours: 0 },
      { day: "Fri", hours: 0 },
      { day: "Sat", hours: 0 },
      { day: "Sun", hours: 0 },
    ];
  return (
    <GlowCard className="row-span-2 h-full">
      <div className="flex h-full flex-col">
        <h2 className="text-lg font-semibold">
          Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Weekly learning hours
        </p>

        <div className="mt-6 h-[240px] w-full">
          <ResponsiveContainer
            width="100%"
            height={240}
          >
            <AreaChart data={chartData} >
              <defs>
                <linearGradient
                  id="colorHours"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#06b6d4"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="95%"
                    stopColor="#8b5cf6"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="day"
                padding={{
                  left: 10,
                  right: 10,
                }}
                tick={{
                  fill: "#71717a",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="hours"
                stroke="#06b6d4"
                fillOpacity={1}
                fill="url(#colorHours)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GlowCard>
  );
}