import { useCallback, useEffect, useState } from 'react'

export interface NavigationSection {
  id: string
  name: string
  element?: HTMLElement | null
}

const sections: NavigationSection[] = [
  { id: 'hero', name: 'Home' },
  { id: 'appointments', name: 'Appointments' },
  { id: 'insights', name: 'Reports' },
  { id: 'records', name: 'Records' },
  { id: 'billing', name: 'Billing' },
]

export const useScrollNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Smooth scroll to section by ID
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setIsScrolling(true)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      
      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 1000)
    }
  }, [])

  // Navigate to next section
  const scrollToNext = useCallback(() => {
    const nextIndex = Math.min(currentSection + 1, sections.length - 1)
    if (nextIndex !== currentSection) {
      scrollToSection(sections[nextIndex].id)
    }
  }, [currentSection, scrollToSection])

  // Navigate to previous section
  const scrollToPrevious = useCallback(() => {
    const prevIndex = Math.max(currentSection - 1, 0)
    if (prevIndex !== currentSection) {
      scrollToSection(sections[prevIndex].id)
    }
  }, [currentSection, scrollToSection])

  // Track current section based on scroll position
  useEffect(() => {
    if (isScrolling) return // Don't update during programmatic scrolling

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for header

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolling])

  return {
    sections,
    currentSection,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
    canGoNext: currentSection < sections.length - 1,
    canGoPrevious: currentSection > 0,
  }
}