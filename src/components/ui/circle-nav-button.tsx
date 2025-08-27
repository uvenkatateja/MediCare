import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface CircleNavButtonProps {
  onClick: () => void
  disabled?: boolean
  direction?: 'down' | 'right'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const CircleNavButton: React.FC<CircleNavButtonProps> = ({
  onClick,
  disabled = false,
  direction = 'down',
  className,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  const Icon = direction === 'down' ? ChevronDown : ChevronRight

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline"
      size="icon"
      className={cn(
        'rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:scale-110 transition-all duration-200 shadow-lg',
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
        className
      )}
    >
      <Icon className={cn(iconSizes[size], 'text-foreground')} />
    </Button>
  )
}