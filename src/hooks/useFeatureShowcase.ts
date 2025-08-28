import { useState, useEffect, useRef, useCallback } from 'react'

interface UseFeatureShowcaseProps {
  totalFeatures: number
  sectionRef: React.RefObject<HTMLElement | null>
}

export function useFeatureShowcase({ totalFeatures, sectionRef }: UseFeatureShowcaseProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    if (!sectionRef.current || !containerRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    
    // Check if section is in view and should be sticky
    const shouldBeSticky = rect.top <= 0 && rect.bottom > window.innerHeight
    setIsSticky(shouldBeSticky)

    // Auto-advance features based on scroll position when sticky
    if (shouldBeSticky) {
      const scrollProgress = Math.abs(rect.top) / (rect.height - window.innerHeight)
      const featureIndex = Math.min(
        Math.floor(scrollProgress * totalFeatures),
        totalFeatures - 1
      )
      setCurrentFeature(featureIndex)
    }
  }, [totalFeatures, sectionRef])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleNext = useCallback(() => {
    setCurrentFeature((prev) => (prev + 1) % totalFeatures)
  }, [totalFeatures])

  const handlePrevious = useCallback(() => {
    setCurrentFeature((prev) => (prev - 1 + totalFeatures) % totalFeatures)
  }, [totalFeatures])

  const handleFeatureSelect = useCallback((index: number) => {
    setCurrentFeature(index)
  }, [])

  return {
    currentFeature,
    isSticky,
    containerRef,
    handleNext,
    handlePrevious,
    handleFeatureSelect
  }
}