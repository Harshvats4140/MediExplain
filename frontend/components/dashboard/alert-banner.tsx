"use client"

import { AlertTriangle, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface AlertBannerProps {
  message: string
  type: "critical" | "warning" | "info"
}

export function AlertBanner({ message, type }: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const getStyles = () => {
    switch (type) {
      case "critical":
        return "bg-[oklch(0.65_0.22_25)]/10 border-[oklch(0.65_0.22_25)]/30 text-[oklch(0.65_0.22_25)]"
      case "warning":
        return "bg-[oklch(0.8_0.16_85)]/10 border-[oklch(0.8_0.16_85)]/30 text-[oklch(0.8_0.16_85)]"
      case "info":
        return "bg-primary/10 border-primary/30 text-primary"
    }
  }

  return (
    <div
      className={cn(
        "animate-fade-in flex items-center justify-between gap-4 px-4 py-3 rounded-xl border",
        getStyles()
      )}
    >
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-lg bg-current/10">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1 rounded-lg hover:bg-current/10 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
