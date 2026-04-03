"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface TopNavbarProps {
  onMenuClick?: () => void
}

export function TopNavbar({ onMenuClick }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden sm:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search reports..."
              className="w-64 pl-10 bg-muted/30 border-border/30 focus:border-primary/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-muted/50"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
          </Button>
          <div className="flex items-center gap-3 pl-3 border-l border-border/30">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Premium Plan</p>
            </div>
            <Avatar className="h-9 w-9 ring-2 ring-primary/20">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
