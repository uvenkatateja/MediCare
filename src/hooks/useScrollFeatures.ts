import { useState, useEffect, useCallback } from 'react'

interface UseScrollFeaturesProps {
  totalFeatures: number
  sectionRef: React.RefObject<HTMLElement | null>
}

export const useScrollFeatures = ({ totalFeatures, sectionRef }: UseScrollFeaturesProps) => {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const [scrollLocked, setScrollLocked] = useState(false)

  const nextFeature = useCallback(() => {
    setCurrentFeature(prev => (prev + 1) % totalFeatures)
  }, [totalFeatures])

  const previousFeature = useCallback(() => {
    setCurrentFeature(prev => (prev - 1 + totalFeatures) % totalFeatures)
  }, [totalFeatures])

  const selectFeature = useCallback((index: number) => {
    setCurrentFeature(index)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if section is in viewport and should be sticky
      if (rect.top <= 0 && rect.bottom > windowHeight) {
        if (!isSticky) {
          setIsSticky(true)
          setScrollLocked(true)
        }
      } else if (rect.top > 0) {
        setIsSticky(false)
        setScrollLocked(false)
      }
    }

    const handleWheelScroll = (e: WheelEvent) => {
      if (!scrollLocked || !sectionRef.current) return

      e.preventDefault()
      
      if (e.deltaY > 0) {
        // Scrolling down
        if (currentFeature < totalFeatures - 1) {
          nextFeature()
        } else {
          // Last feature, unlock scroll
          setScrollLocked(false)
          setIsSticky(false)
        }
      } else {
        // Scrolling up
        if (currentFeature > 0) {
          previousFeature()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('wheel', handleWheelScroll, { passive: false })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheelScroll)
    }
  }, [currentFeature, totalFeatures, isSticky, scrollLocked, nextFeature, previousFeature, sectionRef])

  return {
    currentFeature,
    isSticky,
    scrollLocked,
    nextFeature,
    previousFeature,
    selectFeature
  }
}