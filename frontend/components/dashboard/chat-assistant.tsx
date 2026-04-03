"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  isBot: boolean
}

const suggestedPrompts = [
  "Explain my report",
  "What should I eat?",
  "Exercise recommendations",
]

export function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI health assistant. How can I help you understand your medical report today?",
      isBot: true,
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      isBot: false,
    }

    const botResponse: Message = {
      id: messages.length + 2,
      text: "Based on your report, I recommend focusing on maintaining a balanced diet rich in iron and reducing sugar intake. Would you like more specific dietary recommendations?",
      isBot: true,
    }

    setMessages([...messages, userMessage, botResponse])
    setInput("")
  }

  return (
    <Card className="card-hover bg-card/50 border-border/50 overflow-hidden flex flex-col h-[420px]">
      <CardHeader className="pb-2 border-b border-border/30">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <div className="p-2 rounded-lg bg-accent/10">
            <MessageSquare className="h-5 w-5 text-accent" />
          </div>
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 animate-fade-in",
                message.isBot ? "justify-start" : "justify-end"
              )}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-xl text-sm",
                  message.isBot
                    ? "bg-muted/30 border border-border/30"
                    : "bg-primary text-primary-foreground"
                )}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border/30 space-y-3">
          <div className="flex gap-2 flex-wrap">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1.5 text-xs rounded-full bg-muted/30 border border-border/30 hover:bg-muted/50 hover:border-primary/30 transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask about your health..."
              className="bg-muted/30 border-border/30 focus:border-primary/50"
            />
            <Button
              onClick={() => handleSend(input)}
              size="icon"
              className="bg-primary hover:bg-primary/90 shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
