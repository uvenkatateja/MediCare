import { useEffect, useRef } from 'react'

interface UseTouchGesturesProps {
  onSwipeUp: () => void
  onSwipeDown: () => void
  onSwipeLeft: () => void
  onSwipeRight: () => void
  threshold?: number
}

export const useTouchGestures = ({
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
  threshold = 50
}: UseTouchGesturesProps) => {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStartRef.current.x
      const deltaY = touch.clientY - touchStartRef.current.y

      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      if (Math.max(absDeltaX, absDeltaY) < threshold) return

      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          onSwipeRight()
        } else {
          onSwipeLeft()
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          onSwipeDown()
        } else {
          onSwipeUp()
        }
      }

      touchStartRef.current = null
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight, threshold])
}