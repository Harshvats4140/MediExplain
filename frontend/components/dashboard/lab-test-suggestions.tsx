"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TestTube, ChevronRight, Pill, Sun, Droplets } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface LabTest {
  name: string
  reason: string
  icon: LucideIcon
  priority: "high" | "medium" | "low"
}

const suggestedTests: LabTest[] = [
  {
    name: "Vitamin D Test",
    reason: "Low energy levels detected",
    icon: Sun,
    priority: "high",
  },
  {
    name: "HbA1c Test",
    reason: "Monitor blood sugar trends",
    icon: Droplets,
    priority: "high",
  },
  {
    name: "Lipid Profile",
    reason: "Routine cholesterol check",
    icon: Pill,
    priority: "medium",
  },
]

export function LabTestSuggestions() {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-[oklch(0.65_0.22_25)]/10 text-[oklch(0.65_0.22_25)] border-[oklch(0.65_0.22_25)]/20"
      case "medium":
        return "bg-[oklch(0.8_0.16_85)]/10 text-[oklch(0.8_0.16_85)] border-[oklch(0.8_0.16_85)]/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  return (
    <Card className="card-hover bg-card/50 border-border/50 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <div className="p-2 rounded-lg bg-accent/10">
            <TestTube className="h-5 w-5 text-accent" />
          </div>
          Recommended Tests
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-6">
        {suggestedTests.map((test, index) => (
          <div
            key={test.name}
            className="group flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border/20 hover:bg-muted/30 hover:border-border/30 transition-all cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-2.5 rounded-xl bg-muted/30">
              <test.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium truncate">{test.name}</p>
                <span
                  className={`px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full border ${getPriorityStyles(
                    test.priority
                  )}`}
                >
                  {test.priority}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{test.reason}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
          </div>
        ))}
        <Button
          variant="outline"
          className="w-full mt-4 border-border/30 hover:bg-muted/30 hover:border-primary/30"
        >
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  )
}
