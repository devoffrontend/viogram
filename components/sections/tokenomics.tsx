"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";
import { Card, CardContent } from "../ui/card";

const allocations = [
  { name: "Community & Ecosystem", value: 35, color: "#D4AF37" }, // brown/gold
  { name: "Team & Advisors", value: 10, color: "#87CEEB" }, // light blue
  { name: "Treasury & Liquidity", value: 10, color: "#FFFFFF" }, // white
  { name: "Public Sale", value: 35, color: "#22C55E" }, // green
  { name: "Private Investors", value: 10, color: "#1E3A8A" }, // dark blue/navy
];

const chartConfig = {
  "Community & Ecosystem": {
    label: "Community & Ecosystem",
    color: "#D4AF37",
  },
  "Team & Advisors": {
    label: "Team & Advisors",
    color: "#87CEEB",
  },
  "Treasury & Liquidity": {
    label: "Treasury & Liquidity",
    color: "#FFFFFF",
  },
  "Public Sale": {
    label: "Public Sale",
    color: "#22C55E",
  },
  "Private Investors": {
    label: "Private Investors",
    color: "#1E3A8A",
  },
} satisfies ChartConfig;

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
}

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
}: LabelProps) => {
  const RADIAN = Math.PI / 180;
  // Position label outside the pie chart - adjust based on outerRadius to be responsive
  const radius = outerRadius + Math.min(outerRadius * 0.3, 30);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs sm:text-sm font-bold fill-white"
      style={{ fill: "white", fontSize: "clamp(10px, 2vw, 14px)", fontWeight: "bold" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function Tokenomics() {
  return (
    <section
      className="pt-20 lg:pt-32 bg-gradient-to-b from-black to-gray-950 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/tokenomics-bg.png')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-[#58544C]"
        >
          Tokenomics (VGT)
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-black border border-amber-500/40 p-10 rounded-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#58544C]">
                Supply allocation
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {allocations.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-4 rounded-lg shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white text-sm">{item.value}%</span>
                    </div>
                    <span className="text-white text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center w-full overflow-hidden">
              <div className="w-full max-w-full [&_.recharts-pie-label-line]:stroke-white [&_.recharts-pie-label-line]:stroke-[1px]">
                <ChartContainer config={chartConfig} className="h-[400px] sm:h-[450px] lg:h-[500px] w-full">
                  <PieChart>
                    <Pie
                      data={allocations}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius="70%"
                      innerRadius={0}
                      stroke="none"
                      label={renderCustomLabel}
                      labelLine={{
                        stroke: "white",
                        strokeWidth: 1,
                      }}
                    >
                      {allocations.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip
                      content={<ChartTooltipContent hideLabel />}
                    />
                  </PieChart>
                </ChartContainer>
              </div>
            </div>
          </div>

          <div className="w-full pt-10 border-t border-amber-500/40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#58544C]">
              Treasury Buffer Protocol
            </h3>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <p className="text-gray-300 text-lg leading-relaxed">
                  A portion of revenue is allocated to a treasury to ensure stability and
                  support the ecosystem. This buffer helps maintain token value and provides
                  resources for future development and community initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </section>
  );
}

