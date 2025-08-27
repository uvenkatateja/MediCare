import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ActivityRing {
  label: string
  value: number
  max: number
  color: string
  unit?: string
}

interface ActivityCardProps {
  title: string
  rings: ActivityRing[]
}

export function ActivityCard({ title, rings }: ActivityCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {rings.map((ring, index) => {
          const percentage = (ring.value / ring.max) * 100
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {ring.label}
                </span>
                <span className="text-sm font-bold">
                  {ring.value}{ring.unit} / {ring.max}{ring.unit}
                </span>
              </div>
              <Progress 
                value={percentage} 
                className="h-2"
                style={{
                  '--progress-background': ring.color,
                } as React.CSSProperties}
              />
              <div className="text-xs text-muted-foreground text-right">
                {percentage.toFixed(0)}% complete
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}