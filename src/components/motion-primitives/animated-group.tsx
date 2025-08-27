import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  variants?: any
}

export function AnimatedGroup({ children, className }: AnimatedGroupProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 750)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        'transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        className
      )}
    >
      {children}
    </div>
  )
}