"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Upload,
  Camera,
  History,
  MapPin,
  Settings,
  ChevronLeft,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: Upload, label: "Upload Report", href: "#" },
  { icon: Camera, label: "Scan Report", href: "#" },
  { icon: History, label: "History", href: "#" },
  { icon: MapPin, label: "Nearby Doctors", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-6 flex items-center gap-3 border-b border-sidebar-border">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
          <Activity className="h-5 w-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="animate-fade-in">
            <h1 className="text-lg font-bold tracking-tight">MediExplain</h1>
            <p className="text-xs text-muted-foreground">AI Health Assistant</p>
          </div>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
              item.active
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            )}
          >
            <item.icon className={cn("h-5 w-5 flex-shrink-0", item.active && "text-primary")} />
            {!collapsed && (
              <span className="text-sm font-medium animate-fade-in">{item.label}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors"
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          />
        </button>
      </div>
    </aside>
  )
}
