"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "lucide-react"

interface HealthScoreCardProps {
  score: number
  status: "Normal" | "Moderate" | "Critical"
}

export function HealthScoreCard({ score, status }: HealthScoreCardProps) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const circumference = 2 * Math.PI * 45

  useEffect(() => {
    const duration = 1500
    const steps = 60
    const increment = score / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= score) {
        setAnimatedScore(score)
        clearInterval(timer)
      } else {
        setAnimatedScore(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [score])

  const getStatusColor = () => {
    switch (status) {
      case "Normal":
        return "text-[oklch(0.7_0.18_145)]"
      case "Moderate":
        return "text-[oklch(0.8_0.16_85)]"
      case "Critical":
        return "text-[oklch(0.65_0.22_25)]"
    }
  }

  const getGradient = () => {
    switch (status) {
      case "Normal":
        return "url(#scoreGradientGreen)"
      case "Moderate":
        return "url(#scoreGradientYellow)"
      case "Critical":
        return "url(#scoreGradientRed)"
    }
  }

  const strokeDashoffset = circumference - (animatedScore / 100) * circumference

  return (
    <Card className="card-hover bg-card/50 border-border/50 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <CardHeader className="relative pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <div className="p-2 rounded-lg bg-primary/10">
            <Activity className="h-5 w-5 text-primary" />
          </div>
          Health Score
        </CardTitle>
      </CardHeader>
      <CardContent className="relative flex flex-col items-center pb-6">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="scoreGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="scoreGradientYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
              <linearGradient id="scoreGradientRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted/30"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={getGradient()}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold tracking-tight">{animatedScore}</span>
            <span className="text-sm text-muted-foreground">/100</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === "Normal" ? "bg-[oklch(0.7_0.18_145)]" : status === "Moderate" ? "bg-[oklch(0.8_0.16_85)]" : "bg-[oklch(0.65_0.22_25)]"}`} />
          <span className={`text-sm font-medium ${getStatusColor()}`}>{status}</span>
        </div>
      </CardContent>
    </Card>
  )
}
