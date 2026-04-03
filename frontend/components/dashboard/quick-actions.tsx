"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Download, Share2, FileText, Languages } from "lucide-react"
import { cn } from "@/lib/utils"

const actions = [
  {
    icon: Download,
    label: "Download Summary",
    description: "Get PDF report",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Share2,
    label: "Share Report",
    description: "Send to doctor",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: FileText,
    label: "View Full Report",
    description: "Detailed analysis",
    color: "from-[oklch(0.7_0.18_145)]/20 to-[oklch(0.7_0.18_145)]/5",
    iconColor: "text-[oklch(0.7_0.18_145)]",
  },
  {
    icon: Languages,
    label: "Change Language",
    description: "EN / हिं / ਪੰ",
    color: "from-[oklch(0.8_0.16_85)]/20 to-[oklch(0.8_0.16_85)]/5",
    iconColor: "text-[oklch(0.8_0.16_85)]",
  },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <Card
          key={action.label}
          className={cn(
            "card-hover bg-card/50 border-border/50 cursor-pointer group overflow-hidden animate-fade-in",
          )}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-4 relative">
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                action.color
              )}
            />
            <div className="relative flex flex-col items-center text-center gap-3">
              <div className={cn("p-3 rounded-xl bg-muted/30 group-hover:scale-110 transition-transform duration-300", action.iconColor)}>
                <action.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{action.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
