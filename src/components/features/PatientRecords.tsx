'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowDown, ArrowUp, Activity, Heart, Thermometer, User } from 'lucide-react'
import { cn } from '@/lib/utils'

// Patient health metrics data over time
const patientData = [
    { date: '2024-04-01', bloodPressure: 120, heartRate: 72, temperature: 98.6, visits: 1 },
    { date: '2024-04-02', bloodPressure: 118, heartRate: 75, temperature: 98.4, visits: 0 },
    { date: '2024-04-03', bloodPressure: 122, heartRate: 70, temperature: 98.8, visits: 1 },
    { date: '2024-04-04', bloodPressure: 115, heartRate: 68, temperature: 98.2, visits: 0 },
    { date: '2024-04-05', bloodPressure: 125, heartRate: 78, temperature: 99.1, visits: 1 },
    { date: '2024-04-06', bloodPressure: 119, heartRate: 73, temperature: 98.5, visits: 0 },
    { date: '2024-04-07', bloodPressure: 121, heartRate: 71, temperature: 98.7, visits: 1 },
    { date: '2024-04-08', bloodPressure: 117, heartRate: 69, temperature: 98.3, visits: 0 },
    { date: '2024-04-09', bloodPressure: 123, heartRate: 76, temperature: 98.9, visits: 1 },
    { date: '2024-04-10', bloodPressure: 116, heartRate: 74, temperature: 98.1, visits: 0 },
    { date: '2024-04-11', bloodPressure: 120, heartRate: 72, temperature: 98.6, visits: 1 },
    { date: '2024-04-12', bloodPressure: 124, heartRate: 77, temperature: 99.0, visits: 0 },
    { date: '2024-04-13', bloodPressure: 118, heartRate: 70, temperature: 98.4, visits: 1 },
    { date: '2024-04-14', bloodPressure: 122, heartRate: 75, temperature: 98.8, visits: 0 },
    { date: '2024-04-15', bloodPressure: 119, heartRate: 73, temperature: 98.5, visits: 1 },
]

// Health metrics configurations
const healthMetrics = [
    {
        key: 'bloodPressure',
        label: 'Blood Pressure',
        value: 119,
        previousValue: 125,
        format: (val: number) => `${val}/80 mmHg`,
        icon: Activity,
        color: '#3b82f6',
        isNegative: true, // Lower BP is better
    },
    {
        key: 'heartRate',
        label: 'Heart Rate',
        value: 73,
        previousValue: 78,
        format: (val: number) => `${val} bpm`,
        icon: Heart,
        color: '#ef4444',
        isNegative: true, // Lower resting HR is better
    },
    {
        key: 'temperature',
        label: 'Temperature',
        value: 98.5,
        previousValue: 99.1,
        format: (val: number) => `${val}°F`,
        icon: Thermometer,
        color: '#f59e0b',
        isNegative: false, // Normal temp range
    },
    {
        key: 'visits',
        label: 'Monthly Visits',
        value: 8,
        previousValue: 6,
        format: (val: number) => `${val} visits`,
        icon: User,
        color: '#10b981',
        isNegative: false,
    },
]





// Simple Chart Component
const SimpleHealthChart = ({ selectedMetric }: { selectedMetric: string }) => {
    const metric = healthMetrics.find(m => m.key === selectedMetric)
    if (!metric) return null

    const values = patientData.map(d => d[selectedMetric as keyof typeof d] as number)
    const maxValue = Math.max(...values)
    const minValue = Math.min(...values)

    const viewBoxWidth = 800
    const viewBoxHeight = 300
    const padding = 60

    const xStep = (viewBoxWidth - padding * 2) / (patientData.length - 1)
    const yScale = (viewBoxHeight - padding * 2) / (maxValue - minValue + (maxValue - minValue) * 0.2)

    const path = patientData.map((d, i) => {
        const x = padding + i * xStep
        const value = d[selectedMetric as keyof typeof d] as number
        const y = viewBoxHeight - padding - (value - minValue + (maxValue - minValue) * 0.1) * yScale
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ')

    return (
        <div className="w-full h-96 flex items-center justify-center">
            <svg
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                className="w-full h-full"
            >
                {/* Background pattern */}
                <defs>
                    <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="var(--muted-foreground)" fillOpacity="0.3" />
                    </pattern>
                </defs>

                <rect x={padding} y="0" width={viewBoxWidth - padding * 2} height={viewBoxHeight - padding} fill="url(#dotGrid)" />

                {/* Grid lines */}
                {[0, 1, 2, 3, 4, 5].map(i => {
                    const y = padding + (i * (viewBoxHeight - padding * 2)) / 5
                    const value = maxValue - (i * (maxValue - minValue)) / 5
                    return (
                        <g key={i}>
                            <line
                                x1={padding}
                                y1={y}
                                x2={viewBoxWidth - padding}
                                y2={y}
                                stroke="var(--muted-foreground)"
                                strokeOpacity={0.2}
                                strokeDasharray="4,4"
                            />
                            <text
                                x={padding - 10}
                                y={y + 4}
                                textAnchor="end"
                                className="text-xs fill-muted-foreground"
                            >
                                {metric.format(Math.round(value * 10) / 10)}
                            </text>
                        </g>
                    )
                })}

                {/* Main line */}
                <path
                    d={path}
                    fill="none"
                    stroke={metric.color}
                    strokeWidth="2"
                />

                {/* Data points */}
                {patientData.map((d, i) => {
                    const x = padding + i * xStep
                    const value = d[selectedMetric as keyof typeof d] as number
                    const y = viewBoxHeight - padding - (value - minValue + (maxValue - minValue) * 0.1) * yScale

                    return (
                        <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="white"
                            stroke={metric.color}
                            strokeWidth="2"
                        />
                    )
                })}

                {/* Date labels */}
                {patientData.map((d, i) => {
                    if (i % 3 === 0) {
                        const x = padding + i * xStep
                        const date = new Date(d.date)
                        return (
                            <text
                                key={i}
                                x={x}
                                y={viewBoxHeight - 15}
                                textAnchor="middle"
                                className="text-xs fill-muted-foreground"
                            >
                                {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </text>
                        )
                    }
                    return null
                })}
            </svg>
        </div>
    )
}

export default function PatientRecords() {
    const [selectedMetric, setSelectedMetric] = useState<string>('bloodPressure')

    return (
        <section className="px-4 py-16 md:py-32">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Patient Records & History
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive patient health tracking with real-time vital signs monitoring and historical data analysis
                    </p>
                </div>

                <Card className="w-full">
                    <CardHeader className="p-0 mb-5">


                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {healthMetrics.map((metric) => {
                                const change = ((metric.value - metric.previousValue) / metric.previousValue) * 100
                                const isPositive = metric.isNegative ? change < 0 : change > 0
                                const IconComponent = metric.icon

                                return (
                                    <button
                                        key={metric.key}
                                        onClick={() => setSelectedMetric(metric.key)}
                                        className={cn(
                                            'cursor-pointer flex-1 text-start p-4 border-b lg:border-b-0 lg:border-r lg:last:border-r-0 transition-all hover:bg-muted/50',
                                            selectedMetric === metric.key && 'bg-muted/50'
                                        )}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <IconComponent className="w-4 h-4" style={{ color: metric.color }} />
                                                <span className="text-sm text-muted-foreground">{metric.label}</span>
                                            </div>
                                            <Badge variant={isPositive ? 'default' : 'secondary'} className="text-xs">
                                                {isPositive ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />}
                                                {Math.abs(change).toFixed(1)}%
                                            </Badge>
                                        </div>
                                        <div className="text-2xl font-bold">{metric.format(metric.value)}</div>
                                        <div className="text-xs text-muted-foreground mt-1">
                                            from {metric.format(metric.previousValue)}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </CardHeader>

                    <CardContent className="px-2.5 py-6">
                        <SimpleHealthChart selectedMetric={selectedMetric} />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}