import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Calendar, Users, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export default function AppointmentFeatures() {
    return (
        <section className="bg-zinc-50 py-8 sm:py-16 md:py-24 lg:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-sm sm:max-w-2xl px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Smart Appointments
                    </h2>

                </div>

                <div className="mx-auto grid gap-4 sm:gap-6 lg:grid-cols-2">
                    <FeatureCard className="mb-4 sm:mb-6 lg:mb-0">
                        <CardHeader className="pb-2 sm:pb-3">
                            <CardHeading
                                icon={Calendar}
                                title="Smart Scheduling"
                                description="AI-powered appointment booking with automated conflict resolution and optimal time slot suggestions."
                            />
                        </CardHeader>
                        <div className="relative mb-4 sm:mb-6 border-t border-dashed lg:mb-0">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"></div>
                            <div className="aspect-[4/3] sm:aspect-[76/59] p-1 px-3 sm:px-6">
                                <img
                                    src="/images/smart.png"
                                    alt="appointment scheduling interface"
                                    width={1207}
                                    height={929}
                                    className="w-full h-full object-cover rounded shadow"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard className="mb-4 sm:mb-6 lg:mb-0">
                        <CardHeader className="pb-2 sm:pb-3">
                            <CardHeading
                                icon={Users}
                                title="Patient Queue Management"
                                description="Real-time patient tracking with digital queue management and automated notifications."
                            />
                        </CardHeader>
                        <CardContent className="p-3 sm:p-6">
                            <div className="relative mb-4 sm:mb-6 lg:mb-0">
                                <div className="absolute -inset-3 sm:-inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
                                <div className="aspect-[4/3] sm:aspect-[76/59] border">
                                    <img
                                        src="/images/real.png"
                                        alt="patient queue dashboard"
                                        width={1207}
                                        height={929}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard className="p-4 sm:p-6 lg:col-span-2 mt-4 sm:mt-6 lg:mt-4">
                        <p className="mx-auto my-4 sm:my-6 max-w-sm sm:max-w-md lg:max-w-lg text-balance text-center text-lg sm:text-xl lg:text-2xl font-semibold">
                            Comprehensive OPD management with automated workflows and real-time insights.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 overflow-hidden">
                            <CircularUI
                                label="Appointments"
                                circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                                className="flex-shrink-0"
                            />
                            <CircularUI
                                label="Queue Status"
                                circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                                className="flex-shrink-0"
                            />
                            <CircularUI
                                label="Patient Flow"
                                circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                                className="flex-shrink-0"
                            />
                            <CircularUI
                                label="Analytics"
                                circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                                className="hidden sm:block flex-shrink-0"
                            />
                        </div>
                    </FeatureCard>
                </div>
            </div>


        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-none shadow-zinc-950/5', className)}>
        <CardDecorator />
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-3 sm:p-6">
        <span className="text-muted-foreground flex items-center gap-2">
            <Icon className="size-3 sm:size-4" />
            <span className="text-sm sm:text-base">{title}</span>
        </span>
        <p className="mt-4 sm:mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">{description}</p>
    </div>
)



interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'blue'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={cn('min-w-0', className)}>
        <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px mx-auto">
            <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-2 sm:-space-x-3 lg:-space-x-4 rounded-[15px] p-2 sm:p-3 lg:p-4">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-5 sm:size-6 lg:size-7 xl:size-8 rounded-full border', {
                            'border-primary': circle.pattern === 'none',
                            'border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]':
                                circle.pattern === 'border',
                            'border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]':
                                circle.pattern === 'primary',
                            'bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]':
                                circle.pattern === 'blue',
                        })}
                    ></div>
                ))}
            </div>
        </div>
        <span className="text-muted-foreground mt-1 sm:mt-1.5 block text-center text-xs sm:text-sm truncate">{label}</span>
    </div>
)