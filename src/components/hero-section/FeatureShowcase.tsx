import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Activity, Shield, Video, BarChart3, Clock, Heart, FileText, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useFeatureShowcase } from '@/hooks/useFeatureShowcase'

interface Feature {
    id: number
    title: string
    description: string
    bulletPoints: string[]
    image: string
}

const features: Feature[] = [
    {
        id: 1,
        title: "Smart Appointment Scheduling",
        description: "AI-powered scheduling system that optimizes your calendar and reduces wait times.",
        bulletPoints: [
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod",
            "Ut enim minim veniam quis nostrud exercitation ullamco",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
        ],
        image: "/images/feature-1.jpg"
    },
    {
        id: 2,
        title: "Real-time Health Monitoring",
        description: "Continuous monitoring with instant alerts and personalized health insights.",
        bulletPoints: [
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
            "Excepteur sint occaecat cupidatat non proident sunt in culpa",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do"
        ],
        image: "/images/feature-2.jpg"
    },
    {
        id: 3,
        title: "Secure Patient Records",
        description: "HIPAA-compliant digital records with advanced encryption and easy access.",
        bulletPoints: [
            "At vero eos et accusamus et iusto odio dignissimos ducimus",
            "Qui blanditiis praesentium voluptatum deleniti atque corrupti",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            "Excepteur sint occaecat cupidatat non proident sunt in culpa"
        ],
        image: "/images/feature-3.jpg"
    },
    {
        id: 4,
        title: "Telemedicine Platform",
        description: "High-quality video consultations with integrated diagnostic tools.",
        bulletPoints: [
            "Temporibus autem quibusdam et aut officiis debitis aut rerum",
            "Necessitatibus saepe eveniet ut et voluptates repudiandae",
            "Sint et molestiae non recusandae itaque earum rerum hic",
            "Tenetur a sapiente delectus ut aut reiciendis voluptatibus"
        ],
        image: "/images/feature-4.jpg"
    },
    {
        id: 5,
        title: "Analytics Dashboard",
        description: "Comprehensive insights and reporting for better healthcare decisions.",
        bulletPoints: [
            "Maiores alias consequatur aut perferendis doloribus asperiores",
            "Repellat molestiae non recusandae temporibus autem quibusdam",
            "Et harum quidem rerum facilis est et expedita distinctio",
            "Nam libero tempore cum soluta nobis est eligendi optio"
        ],
        image: "/images/feature-5.jpg"
    }
]

export default function FeatureShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null)

    const {
        currentFeature,
        isSticky,
        containerRef,
        handleNext,
        handlePrevious,
        handleFeatureSelect
    } = useFeatureShowcase({
        totalFeatures: features.length,
        sectionRef
    })

    const currentFeatureData = features[currentFeature]

    // Phone Screen Designs for each feature
    const renderPhoneScreen = () => {
        switch (currentFeature) {
            case 0: // Smart Appointment Scheduling
                return (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center items-center text-white">
                            <div className="bg-white/20 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                                <Calendar className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-lg font-bold mb-2">Today's Schedule</h3>
                                <p className="text-sm opacity-90">5 appointments</p>
                            </div>
                            <div className="space-y-3 w-full max-w-48">
                                {[
                                    { time: "9:00 AM", patient: "John Doe", type: "Checkup" },
                                    { time: "11:30 AM", patient: "Jane Smith", type: "Consultation" },
                                    { time: "2:00 PM", patient: "Mike Johnson", type: "Follow-up" }
                                ].map((apt, i) => (
                                    <div key={i} className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs font-medium">{apt.time}</p>
                                                <p className="text-xs opacity-80">{apt.patient}</p>
                                            </div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )

            case 1: // Real-time Health Monitoring
                return (
                    <div className="w-full h-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center items-center text-white">
                            <div className="bg-white/20 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                                <Activity className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-lg font-bold mb-2">Health Vitals</h3>
                                <p className="text-sm opacity-90">Real-time monitoring</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3 w-full max-w-48">
                                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm text-center">
                                    <Heart className="w-6 h-6 mx-auto mb-1 text-red-300" />
                                    <p className="text-xs font-medium">Heart Rate</p>
                                    <p className="text-lg font-bold">72 BPM</p>
                                </div>
                                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm text-center">
                                    <TrendingUp className="w-6 h-6 mx-auto mb-1 text-blue-300" />
                                    <p className="text-xs font-medium">Blood Pressure</p>
                                    <p className="text-lg font-bold">120/80</p>
                                </div>
                                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm text-center col-span-2">
                                    <div className="flex items-center justify-center mb-2">
                                        <div className="w-16 h-2 bg-white/30 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-green-400 rounded-full"></div>
                                        </div>
                                    </div>
                                    <p className="text-xs font-medium">Overall Health Score: 85%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 2: // Secure Patient Records
                return (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center items-center text-white">
                            <div className="bg-white/20 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                                <Shield className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-lg font-bold mb-2">Patient Records</h3>
                                <p className="text-sm opacity-90">Secure & Encrypted</p>
                            </div>
                            <div className="space-y-3 w-full max-w-48">
                                {[
                                    { icon: FileText, label: "Medical History", count: "24 records" },
                                    { icon: Activity, label: "Lab Results", count: "8 reports" },
                                    { icon: Calendar, label: "Appointments", count: "12 visits" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                                        <div className="flex items-center gap-3">
                                            <item.icon className="w-5 h-5 text-white" />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">{item.label}</p>
                                                <p className="text-xs opacity-80">{item.count}</p>
                                            </div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )

            case 3: // Telemedicine Platform
                return (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center items-center text-white">
                            <div className="bg-white/20 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                                <Video className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-lg font-bold mb-2">Video Consultation</h3>
                                <p className="text-sm opacity-90">Dr. Sarah Wilson</p>
                            </div>
                            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm mb-4 w-full max-w-48">
                                <div className="aspect-video bg-white/30 rounded-lg mb-3 flex items-center justify-center">
                                    <Users className="w-8 h-8 text-white/70" />
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        Connected
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        15:42
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Video className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <div className="w-5 h-5 bg-white rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 4: // Analytics Dashboard
                return (
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-6 flex flex-col">
                        <div className="flex-1 flex flex-col justify-center items-center text-white">
                            <div className="bg-white/20 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                                <BarChart3 className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-lg font-bold mb-2">Analytics Dashboard</h3>
                                <p className="text-sm opacity-90">This Month's Overview</p>
                            </div>
                            <div className="space-y-3 w-full max-w-48">
                                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium">Patient Visits</span>
                                        <span className="text-lg font-bold">1,247</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                                        <div className="w-4/5 h-full bg-green-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium">Revenue</span>
                                        <span className="text-lg font-bold">$45.2K</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                                        <div className="w-3/5 h-full bg-blue-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
                                        <p className="text-xs opacity-80">Satisfaction</p>
                                        <p className="text-sm font-bold">4.8★</p>
                                    </div>
                                    <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
                                        <p className="text-xs opacity-80">Growth</p>
                                        <p className="text-sm font-bold">+12%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            default:
                return (
                    <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 flex items-center justify-center text-white">
                        <div className="text-center">
                            <div className="text-lg font-semibold mb-2">
                                {currentFeatureData.title}
                            </div>
                            <div className="text-sm opacity-80">
                                Feature {currentFeature + 1}
                            </div>
                        </div>
                    </div>
                )
        }
    }

    return (
        <div ref={sectionRef} className="relative min-h-[500vh]">
            <div
                ref={containerRef}
                className={cn(
                    "transition-all duration-300",
                    isSticky ? "fixed top-0 left-0 w-full z-50" : "relative"
                )}
            >
                <section className="bg-white py-12 md:py-20 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Mobile Layout */}
                        <div className="block lg:hidden space-y-8">
                            {/* iPhone Mockup - Mobile */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="relative w-48 h-96 bg-black rounded-[2.5rem] p-1.5 shadow-2xl">
                                        <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-10"></div>
                                            {renderPhoneScreen()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content - Mobile */}
                            <div className="text-center space-y-4">
                                <div className="text-blue-500 text-sm font-medium">
                                    Feature No.{currentFeature + 1} -
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                                    {currentFeatureData.title}
                                </h2>

                                <ul className="space-y-2 text-left max-w-md mx-auto">
                                    {currentFeatureData.bulletPoints.slice(0, 3).map((point, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-600">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="text-sm leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Navigation Arrows - Mobile */}
                                <div className="flex items-center justify-center gap-4 pt-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handlePrevious}
                                        className="w-10 h-10 p-0 rounded-full border-gray-300"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleNext}
                                        className="w-10 h-10 p-0 rounded-full border-gray-300"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Feature List - Mobile */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                                    Feature Showcase
                                </h3>

                                <div className="grid grid-cols-1 gap-2">
                                    {features.map((feature, index) => (
                                        <button
                                            key={feature.id}
                                            onClick={() => handleFeatureSelect(index)}
                                            className={cn(
                                                "w-full text-left p-3 rounded-lg transition-all duration-200 relative",
                                                "hover:bg-gray-50",
                                                currentFeature === index
                                                    ? "bg-blue-50 border-l-4 border-blue-500"
                                                    : "border-l-4 border-transparent"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                {currentFeature === index && (
                                                    <div className="w-1 h-6 bg-blue-500 rounded-full absolute left-0"></div>
                                                )}
                                                <div className="ml-2">
                                                    <div className={cn(
                                                        "font-medium transition-colors text-sm",
                                                        currentFeature === index ? "text-blue-600" : "text-gray-700"
                                                    )}>
                                                        Feature {feature.id} : {feature.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
                            {/* Left Content */}
                            <div className="lg:col-span-4 space-y-6">
                                <div className="text-blue-500 text-sm font-medium">
                                    Feature No.{currentFeature + 1} -
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                                    {currentFeatureData.title}
                                </h2>

                                <ul className="space-y-3">
                                    {currentFeatureData.bulletPoints.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-600">
                                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="text-sm leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Navigation Arrows */}
                                <div className="flex items-center gap-4 pt-4">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handlePrevious}
                                        className="w-10 h-10 p-0 rounded-full border-gray-300"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={handleNext}
                                        className="w-10 h-10 p-0 rounded-full border-gray-300"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Center iPhone Mockup */}
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="relative">
                                    {/* iPhone Frame */}
                                    <div className="relative w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
                                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                                            {/* Notch */}
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                                            {/* Screen Content */}
                                            {renderPhoneScreen()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Feature List */}
                            <div className="lg:col-span-4">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                                        Feature Showcase
                                    </h3>

                                    {features.map((feature, index) => (
                                        <button
                                            key={feature.id}
                                            onClick={() => handleFeatureSelect(index)}
                                            className={cn(
                                                "w-full text-left p-4 rounded-lg transition-all duration-200 relative",
                                                "hover:bg-gray-50",
                                                currentFeature === index
                                                    ? "bg-blue-50 border-l-4 border-blue-500"
                                                    : "border-l-4 border-transparent"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                {currentFeature === index && (
                                                    <div className="w-1 h-8 bg-blue-500 rounded-full absolute left-0"></div>
                                                )}
                                                <div className="ml-2">
                                                    <div className={cn(
                                                        "font-medium transition-colors",
                                                        currentFeature === index ? "text-blue-600" : "text-gray-700"
                                                    )}>
                                                        Feature {feature.id}
                                                    </div>
                                                    <div className="text-sm text-gray-500 mt-1">
                                                        {feature.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}