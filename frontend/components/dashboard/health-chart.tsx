"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

const data = [
  { month: "Jan", hemoglobin: 12.5, sugar: 95, cholesterol: 180 },
  { month: "Feb", hemoglobin: 13.2, sugar: 102, cholesterol: 175 },
  { month: "Mar", hemoglobin: 12.8, sugar: 98, cholesterol: 185 },
  { month: "Apr", hemoglobin: 13.5, sugar: 110, cholesterol: 170 },
  { month: "May", hemoglobin: 14.0, sugar: 105, cholesterol: 165 },
  { month: "Jun", hemoglobin: 13.8, sugar: 100, cholesterol: 160 },
]

export function HealthChart() {
  return (
    <Card className="card-hover bg-card/50 border-border/50 col-span-full lg:col-span-2 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          Health Trends
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[280px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="hemoglobinGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sugarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="cholesterolGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="rgba(255,255,255,0.4)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="rgba(255,255,255,0.4)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(23, 23, 30, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
                labelStyle={{ color: "#fff", fontWeight: 600, marginBottom: 4 }}
                itemStyle={{ color: "#a1a1aa" }}
              />
              <Area
                type="monotone"
                dataKey="hemoglobin"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#hemoglobinGradient)"
                name="Hemoglobin"
              />
              <Area
                type="monotone"
                dataKey="sugar"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="url(#sugarGradient)"
                name="Blood Sugar"
              />
              <Area
                type="monotone"
                dataKey="cholesterol"
                stroke="#22c55e"
                strokeWidth={2}
                fill="url(#cholesterolGradient)"
                name="Cholesterol"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6366f1]" />
            <span className="text-xs text-muted-foreground">Hemoglobin</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
            <span className="text-xs text-muted-foreground">Blood Sugar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="text-xs text-muted-foreground">Cholesterol</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
