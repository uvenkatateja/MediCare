import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextType {
  openItems: Set<string>
  toggleItem: (value: string) => void
  type: "single" | "multiple"
  collapsible?: boolean
}

const AccordionContext = React.createContext<AccordionContextType | null>(null)

interface AccordionProps {
  type: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, children, type, collapsible = false, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

    const toggleItem = React.useCallback((value: string) => {
      setOpenItems(prev => {
        const newSet = new Set(prev)
        
        if (type === "single") {
          // For single type, close all others and toggle current
          if (newSet.has(value)) {
            if (collapsible) {
              newSet.clear()
            }
          } else {
            newSet.clear()
            newSet.add(value)
          }
        } else {
          // For multiple type, just toggle current
          if (newSet.has(value)) {
            newSet.delete(value)
          } else {
            newSet.add(value)
          }
        }
        
        return newSet
      })
    }, [type, collapsible])

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem, type, collapsible }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, children, value, ...props }, ref) => {
    return (
      <div ref={ref} className={className} data-value={value} {...props}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { 
              ...(child.props as any), 
              'data-item-value': value 
            } as any)
          }
          return child
        })}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
  'data-item-value'?: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, 'data-item-value': itemValue, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    
    if (!context) {
      throw new Error('AccordionTrigger must be used within an Accordion')
    }

    const isOpen = itemValue ? context.openItems.has(itemValue) : false

    const handleClick = () => {
      if (itemValue) {
        context.toggleItem(itemValue)
      }
    }

    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
        <ChevronDown 
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
  'data-item-value'?: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, 'data-item-value': itemValue, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    
    if (!context) {
      throw new Error('AccordionContent must be used within an Accordion')
    }

    const isOpen = itemValue ? context.openItems.has(itemValue) : false

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden text-sm transition-all duration-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0">
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }