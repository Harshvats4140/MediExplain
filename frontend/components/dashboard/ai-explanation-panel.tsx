"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function AIExplanationPanel() {
  return (
    <Card className="card-hover bg-card/50 border-border/50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
      <CardHeader className="relative pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          AI Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4 pb-6">
        <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
          <p className="text-sm leading-relaxed text-foreground/90">
            Based on your latest report, your overall health indicators are within acceptable ranges.
            However, I noticed your <span className="text-[oklch(0.8_0.16_85)] font-medium">blood sugar levels are slightly elevated</span>.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Key Insights</h4>
          <div className="grid gap-2">
            {[
              { text: "Hemoglobin is below optimal range", type: "warning" },
              { text: "Cholesterol levels are well controlled", type: "success" },
              { text: "Consider lifestyle modifications", type: "info" },
            ].map((insight, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border/20"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    insight.type === "success"
                      ? "bg-[oklch(0.7_0.18_145)]"
                      : insight.type === "warning"
                      ? "bg-[oklch(0.8_0.16_85)]"
                      : "bg-primary"
                  }`}
                />
                <span className="text-sm text-foreground/80">{insight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
