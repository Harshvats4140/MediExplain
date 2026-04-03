"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { MobileNav } from "@/components/dashboard/mobile-nav"
import { HealthScoreCard } from "@/components/dashboard/health-score-card"
import { ParameterCard } from "@/components/dashboard/parameter-card"
import { AlertBanner } from "@/components/dashboard/alert-banner"
import { HealthChart } from "@/components/dashboard/health-chart"
import { AIExplanationPanel } from "@/components/dashboard/ai-explanation-panel"
import { ChatAssistant } from "@/components/dashboard/chat-assistant"
import { LabTestSuggestions } from "@/components/dashboard/lab-test-suggestions"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { StatsOverview } from "@/components/dashboard/stats-overview"
import { Droplet, Beaker, Heart } from "lucide-react"

const parameters = [
  {
    name: "Hemoglobin",
    value: "11.2",
    unit: "g/dL",
    status: "Low" as const,
    icon: Droplet,
    normalRange: "12.0-15.5 g/dL",
  },
  {
    name: "Blood Sugar",
    value: "142",
    unit: "mg/dL",
    status: "High" as const,
    icon: Beaker,
    normalRange: "70-100 mg/dL",
  },
  {
    name: "Cholesterol",
    value: "185",
    unit: "mg/dL",
    status: "Normal" as const,
    icon: Heart,
    normalRange: "< 200 mg/dL",
  },
]

export default function DashboardPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopNavbar onMenuClick={() => setMobileNavOpen(true)} />

        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
                Welcome back, <span className="gradient-text">John</span>
              </h1>
              <p className="text-muted-foreground">
                Here&apos;s your health overview from your latest report
              </p>
            </div>

            {/* Alert Banner */}
            <AlertBanner
              type="warning"
              message="Your blood sugar levels are elevated. Consider consulting a healthcare provider."
            />

            {/* Stats Overview */}
            <StatsOverview />

            {/* Quick Actions */}
            <QuickActions />

            {/* Main Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Health Score */}
              <div className="lg:col-span-1 animate-fade-in stagger-1">
                <HealthScoreCard score={72} status="Moderate" />
              </div>

              {/* Parameter Cards */}
              <div className="lg:col-span-2 grid gap-4 sm:grid-cols-3">
                {parameters.map((param, index) => (
                  <div
                    key={param.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                  >
                    <ParameterCard {...param} />
                  </div>
                ))}
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-3">
              <HealthChart />
              <div className="animate-fade-in stagger-3">
                <AIExplanationPanel />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="animate-fade-in stagger-4">
                <ChatAssistant />
              </div>
              <div className="animate-fade-in stagger-5">
                <LabTestSuggestions />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 MediExplain. AI-Powered Health Insights.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
