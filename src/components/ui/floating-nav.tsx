import React from 'react'
import { CircleNavButton } from './circle-nav-button'
import { useScrollNavigation } from '@/hooks/useScrollNavigation'
import { cn } from '@/lib/utils'

export const FloatingNav: React.FC = () => {
  const { scrollToNext, scrollToSection, currentSection } = useScrollNavigation()

  const handleClick = () => {
    if (currentSection === 4) { // Last section (PatientRecords)
      scrollToSection('hero') // Go back to top
    } else {
      scrollToNext() // Go to next section
    }
  }

  const getButtonDirection = () => {
    if (currentSection === 4) {
      return 'right' // Up arrow for back to top
    }
    return 'down' // Down arrow for next section
  }

  const getButtonRotation = () => {
    if (currentSection === 4) {
      return 'rotate-[-90deg]' // Point upward
    }
    return '' // Point downward
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <CircleNavButton
        onClick={handleClick}
        disabled={false}
        direction={getButtonDirection()}
        size="md"
        className={cn(
          'transition-all duration-300 ease-in-out',
          getButtonRotation()
        )}
      />

      {/* Section indicator dots */}
      <div className="flex flex-col items-center gap-1 mt-3">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-200',
              index === currentSection
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30'
            )}
          />
        ))}
      </div>
    </div>
  )
}