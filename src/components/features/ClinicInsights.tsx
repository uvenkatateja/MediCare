import { Activity, BarChart3, TrendingUp } from 'lucide-react'
import { ActivityCard } from '@/components/ui/activity-card'
import { SmoothTab } from '@/components/ui/smooth-tab'

export default function ClinicInsights() {
    return (
        <section className="px-4 py-16 md:py-32">
            <div className="mx-auto max-w-5xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Clinic Insights & Reports
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive analytics and reporting tools to optimize your clinic operations and patient care
                    </p>
                </div>

                <div className="grid border md:grid-cols-2">
                    <div>
                        <div className="p-6 sm:p-12">
                            <span className="text-muted-foreground flex items-center gap-2">
                                <BarChart3 className="size-4" />
                                Real-time Analytics Dashboard
                            </span>
                            <p className="mt-8 text-2xl font-semibold">
                                Advanced analytics system to track patient flow, revenue, and clinic performance metrics.
                            </p>
                        </div>
                        <div className="p-4">
                            <SmoothTab
                                tabs={[
                                    {
                                        id: "revenue",
                                        label: "Revenue",
                                        content: (
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                    <span className="text-sm font-medium">Daily Revenue</span>
                                                    <span className="text-lg font-bold text-green-600">$12,450</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                    <span className="text-sm font-medium">Monthly Target</span>
                                                    <span className="text-lg font-bold">$350,000</span>
                                                </div>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "patients",
                                        label: "Patients",
                                        content: (
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                    <span className="text-sm font-medium">Today's Appointments</span>
                                                    <span className="text-lg font-bold text-blue-600">28</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                    <span className="text-sm font-medium">New Patients</span>
                                                    <span className="text-lg font-bold">8</span>
                                                </div>
                                                <div className="text-center text-sm text-blue-600 font-medium">
                                                    ↗ +23% patient retention
                                                </div>
                                            </div>
                                        )
                                    },
                                    {
                                        id: "performance",
                                        label: "Performance",
                                        content: (
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                    <span className="text-sm font-medium">Satisfaction Score</span>
                                                    <span className="text-lg font-bold text-green-600">4.8/5</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                                    <span className="text-sm font-medium">Wait Time</span>
                                                    <span className="text-lg font-bold">12 min</span>
                                                </div>
                                                <div className="text-center text-sm text-green-600 font-medium">
                                                    ⭐ 98.5% satisfaction rate
                                                </div>
                                            </div>
                                        )
                                    }
                                ]}
                                defaultTab="revenue"
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                        <div className="relative z-10">
                            <span className="text-muted-foreground flex items-center gap-2">
                                <TrendingUp className="size-4" />
                                Patient Insights & Trends
                            </span>
                            <p className="my-8 text-2xl font-semibold">
                                Track patient satisfaction, appointment trends, and health outcomes for better care delivery.
                            </p>
                        </div>
                        <div
                            aria-hidden
                            className="flex flex-col gap-8"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="flex size-5 rounded-full border bg-blue-600 items-center justify-center">
                                        <span className="text-white font-bold text-xs">+</span>
                                    </span>
                                    <span className="text-muted-foreground text-xs">Today 2:30 PM</span>
                                </div>
                                <div className="rounded-lg bg-background mt-1.5 w-3/5 border p-3 text-xs">
                                    Patient satisfaction score: 4.8/5 ⭐
                                </div>
                            </div>
                            <div>
                                <div className="rounded-lg mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">
                                    Weekly appointments increased by 23%. Great progress on patient retention!
                                </div>
                                <span className="text-muted-foreground block text-right text-xs">Just now</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full border-y p-12">
                        <p className="text-center text-4xl font-semibold lg:text-7xl">
                            <span className="text-green-600">98.5%</span> Patient Satisfaction
                        </p>
                    </div>

                    <div className="col-span-full p-6 md:p-12">
                        <div className="mb-8">
                            <span className="text-muted-foreground flex items-center gap-2">
                                <Activity className="size-4" />
                                Live Clinic Activity
                            </span>
                            <p className="mt-4 text-2xl font-semibold">
                                Monitor your clinic's activity in real-time.{' '}
                                <span className="text-muted-foreground">
                                    Track appointments, patient flow, and staff performance.
                                </span>
                            </p>
                        </div>
                        <ActivityCard
                            title="Daily Performance Metrics"
                            rings={[
                                {
                                    label: "Appointments Completed",
                                    value: 28,
                                    max: 35,
                                    color: "#3b82f6",
                                    unit: ""
                                },
                                {
                                    label: "Patient Satisfaction",
                                    value: 94,
                                    max: 100,
                                    color: "#10b981",
                                    unit: "%"
                                },
                                {
                                    label: "Revenue Target",
                                    value: 12450,
                                    max: 15000,
                                    color: "#f59e0b",
                                    unit: "$"
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>


        </section>
    )
}

