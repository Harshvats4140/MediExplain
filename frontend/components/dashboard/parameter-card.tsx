"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ParameterCardProps {
  name: string
  value: string
  unit: string
  status: "Normal" | "Low" | "High"
  icon: LucideIcon
  normalRange?: string
  onClick?: () => void
}

export function ParameterCard({
  name,
  value,
  unit,
  status,
  icon: Icon,
  normalRange,
  onClick,
}: ParameterCardProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "Normal":
        return {
          bg: "bg-[oklch(0.7_0.18_145)]/10",
          text: "text-[oklch(0.7_0.18_145)]",
          border: "border-[oklch(0.7_0.18_145)]/20",
          glow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]",
        }
      case "Low":
        return {
          bg: "bg-[oklch(0.65_0.22_25)]/10",
          text: "text-[oklch(0.65_0.22_25)]",
          border: "border-[oklch(0.65_0.22_25)]/20",
          glow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
        }
      case "High":
        return {
          bg: "bg-[oklch(0.8_0.16_85)]/10",
          text: "text-[oklch(0.8_0.16_85)]",
          border: "border-[oklch(0.8_0.16_85)]/20",
          glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
        }
    }
  }

  const styles = getStatusStyles()

  return (
    <Card
      onClick={onClick}
      className={cn(
        "card-hover bg-card/50 border-border/50 cursor-pointer group relative overflow-hidden",
        styles.glow
      )}
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300", styles.bg)} />
      <CardContent className="relative p-5">
        <div className="flex items-start justify-between mb-4">
          <div className={cn("p-2.5 rounded-xl", styles.bg)}>
            <Icon className={cn("h-5 w-5", styles.text)} />
          </div>
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-medium",
              styles.bg,
              styles.text
            )}
          >
            {status}
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{name}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight">{value}</span>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
          {normalRange && (
            <p className="text-xs text-muted-foreground/70">
              Normal: {normalRange}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
