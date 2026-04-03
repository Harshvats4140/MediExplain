"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Upload,
  Camera,
  History,
  MapPin,
  Settings,
  X,
  Activity,
} from "lucide-react"
import Link from "next/link"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: Upload, label: "Upload Report", href: "#" },
  { icon: Camera, label: "Scan Report", href: "#" },
  { icon: History, label: "History", href: "#" },
  { icon: MapPin, label: "Nearby Doctors", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
]

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-50 lg:hidden transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">MediExplain</h1>
              <p className="text-xs text-muted-foreground">AI Health Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                item.active
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", item.active && "text-primary")} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
