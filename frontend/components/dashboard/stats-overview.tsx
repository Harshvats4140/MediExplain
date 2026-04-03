"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, Calendar, Clock, TrendingUp } from "lucide-react"

const stats = [
  {
    label: "Reports Analyzed",
    value: "12",
    change: "+3 this month",
    icon: FileCheck,
    trend: "up",
  },
  {
    label: "Last Checkup",
    value: "Mar 15",
    change: "28 days ago",
    icon: Calendar,
    trend: "neutral",
  },
  {
    label: "Avg. Analysis Time",
    value: "45s",
    change: "-12s faster",
    icon: Clock,
    trend: "up",
  },
  {
    label: "Health Trend",
    value: "+8%",
    change: "Improving",
    icon: TrendingUp,
    trend: "up",
  },
]

export function StatsOverview() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="card-hover bg-card/50 border-border/50 overflow-hidden animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
              {stat.trend === "up" && (
                <span className="text-xs text-[oklch(0.7_0.18_145)] font-medium">
                  {stat.change}
                </span>
              )}
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
