"use client";

import { Monitor, FlaskConical, Book, Bus, Dumbbell, LayoutGrid } from "lucide-react";
import { getImagePath } from "@/lib/paths";

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
            image: getImagePath("/images/facilities/academic-infra.jpg")
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
            image: getImagePath("/images/facilities/science-lab.jpg")
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
            image: getImagePath("/images/facilities/library.jpg")
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
            image: getImagePath("/images/facilities/basketball-court.jpg")
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
            image: getImagePath("/images/facilities/transport.jpg")
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-primary text-primary-foreground">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${getImagePath('/images/facilities/banner.jpg')})` }}
                />
                <div className="absolute inset-0 bg-black/50 z-0" /> {/* Dark overlay layer */}

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
                                    {/* Handle multiple images vs single image */}
                                    {item.images ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {item.images.map((imgSrc, imgIdx) => (
                                                <div key={imgIdx} className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] group">
                                                    <div
                                                        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                                        style={{ backgroundImage: `url(${imgSrc})` }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                                            <div
                                                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                        </div>
                                    )}
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
                                    {item.title.includes("Infrastructure") && (
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
