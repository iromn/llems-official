"use client";

import { Monitor, FlaskConical, Book, Bus, Dumbbell, LayoutGrid } from "lucide-react";

export default function FacilitiesPage() {
    const facilities = [
        {
            title: "Academic Infrastructure",
            icon: <LayoutGrid className="h-6 w-6" />,
            description: "A conducive environment for learning and growth.",
            features: [
                "40 Well-spaced and equipped classrooms",
                "4-acre spacious green campus",
                "Modern teaching aids in every class",
                "Activity rooms for holistic development"
            ],
            image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Science & Computer Labs",
            icon: <FlaskConical className="h-6 w-6" />,
            description: "State-of-the-art laboratories for practical knowledge.",
            features: [
                "1200 Sqft Chemistry Laboratory",
                "1500 Sqft Biology Laboratory",
                "1500 Sqft Physics Laboratory",
                "Modern Computer Labs with latest software"
            ],
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Library Resource Center",
            icon: <Book className="h-6 w-6" />,
            description: "A treasure trove of knowledge for young minds.",
            features: [
                "1000 Sqft spacious library area",
                "Wide variety of book collections",
                "Digital reference materials",
                "Quiet reading zones"
            ],
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Sports & Recreation",
            icon: <Dumbbell className="h-6 w-6" />,
            description: "Fostering physical fitness and team spirit.",
            features: [
                "Basketball Court",
                "Football Turf",
                "Volleyball & Throwball Court",
                "Table Tennis & Badminton",
                "Spacious Kids Playground"
            ],
            image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop"
        },
        {
            title: "Transport & Safety",
            icon: <Bus className="h-6 w-6" />,
            description: "Safe and reliable transportation for students.",
            features: [
                "Fleet of 4 School Buses",
                "Routes covering Kasaragod, Perle, Kumbla",
                "GPS tracking enabled",
                "Trained drivers and attendants"
            ],
            image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-black/40 z-0">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">World-Class Facilities</h1>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>
            </section>

            {/* Intro */}
            <section className="py-12 bg-background">
                <div className="container px-4 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Infrastructure That Inspires Learning</h2>
                    <p className="text-muted-foreground">
                        At Little Lilli English Medium School, we believe that the right environment matters. From spacious classrooms to advanced labs, our 4-acre campus is designed to stimulate curiosity and foster holistic development.
                    </p>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-12 pb-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="space-y-20">
                        {facilities.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                            >
                                <div className="w-full md:w-1/2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                                        <div
                                            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="flex items-center gap-3 text-secondary mb-2">
                                        <div className="p-3 bg-primary/5 rounded-lg text-primary">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold uppercase tracking-wider text-sm text-muted-foreground">Facilities</span>
                                    </div>
                                    <h3 className="font-serif text-3xl font-bold text-foreground">{item.title}</h3>
                                    <p className="text-lg text-muted-foreground">{item.description}</p>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="h-2 w-2 bg-secondary rounded-full" />
                                                <span className="font-medium text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {item.title.includes("Transport") && (
                                        <div className="p-4 bg-muted/50 rounded-lg border border-border mt-4">
                                            <p className="text-sm font-bold text-primary">Note: School Bus facility available to Kasaragod, Perle, Kumbla etc.</p>
                                        </div>
                                    )}
                                    {item.title.includes("Tech") && (
                                        <div className="p-4 bg-muted/50 rounded-lg border border-border mt-4">
                                            <p className="text-sm font-bold text-primary">Powered by LEAD School System</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
