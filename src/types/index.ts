export interface Feature {
  id: number
  title: string
  description: string
  image: string
  icon: string
}

export interface NavigationProps {
  currentFeature: number
  totalFeatures: number
  onNext: () => void
  onPrevious: () => void
  onFeatureSelect: (index: number) => void
}