"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface SmoothTabProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export function SmoothTab({ tabs, defaultTab, className }: SmoothTabProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id)
  const [indicatorStyle, setIndicatorStyle] = React.useState({})
  const tabRefs = React.useRef<{ [key: string]: HTMLButtonElement | null }>({})

  React.useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab]
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      })
    }
  }, [activeTab])

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Headers */}
      <div className="relative">
        <div className="flex space-x-1 rounded-lg bg-muted p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el
              }}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative z-10 px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
          {/* Animated indicator */}
          <div
            className="absolute top-1 bottom-1 bg-background rounded-md shadow-sm transition-all duration-300 ease-out"
            style={indicatorStyle}
          />
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        <div className="animate-in fade-in-0 duration-200">
          {activeTabContent}
        </div>
      </div>
    </div>
  )
}