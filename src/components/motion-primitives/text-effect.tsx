import React from 'react'
import { cn } from '@/lib/utils'

interface TextEffectProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  preset?: string
  speedSegment?: number
  delay?: number
  per?: string
}

export function TextEffect({ 
  children, 
  className, 
  as: Component = 'div',
  delay
}: TextEffectProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, (delay || 0) * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Component 
      className={cn(
        'transition-all duration-1000',
        isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-3',
        className
      )}
    >
      {children}
    </Component>
  )
}