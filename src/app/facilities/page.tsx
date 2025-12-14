"use client";

import { FlaskConical, Book, Bus, Dumbbell, LayoutGrid, ArrowRight, ShieldCheck, Wifi } from "lucide-react";
import { getImagePath } from "@/lib/paths";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Facility {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    image: string;
    color: string;
}

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function FacilitiesPage() {
    const facilities: Facility[] = [
        {
            title: "Academic Infrastructure",
            subtitle: "Learning Spaces",
            icon: <LayoutGrid className="h-6 w-6" />,
            description: "Our 4-acre campus is designed to provide a conducive environment for learning. Spacious, well-ventilated classrooms equipped with modern teaching aids ensure that every student gets the best learning experience.",
            features: [
                "40+ Smart Classrooms",
                "Dedicated Activity Rooms",
                "Auditorium & Seminar Halls",
                "Green & Eco-friendly Campus"
            ],
            image: getImagePath("/images/facilities/academic-infra.jpg"),
            color: "text-blue-600"
        },
        {
            title: "Science & Computer Labs",
            subtitle: "Practical Innovation",
            icon: <FlaskConical className="h-6 w-6" />,
            description: "Theory meets practice in our state-of-the-art laboratories. We believe in experiential learning, where students can experiment, discover, and understand concepts deeply.",
            features: [
                "Advanced Physics & Chemistry Labs",
                "Biology Lab with Modern Specimens",
                "High-Tech Computer Lab",
                "High-Speed Internet Access"
            ],
            image: getImagePath("/images/facilities/science-lab.jpg"),
            color: "text-purple-600"
        },
        {
            title: "Library Resource Center",
            subtitle: "Gateway to Knowledge",
            icon: <Book className="h-6 w-6" />,
            description: "A treasure trove of knowledge for young minds. Our library is stocked with a vast collection of books, journals, and digital resources to cultivate a love for reading.",
            features: [
                "5000+ Books & Journals",
                "Digital Reference Section",
                "Quiet Reading Zones",
                "Regular Book Fairs"
            ],
            image: getImagePath("/images/facilities/library.jpg"),
            color: "text-amber-600"
        },
        {
            title: "Sports & Recreation",
            subtitle: "Physical Excellence",
            icon: <Dumbbell className="h-6 w-6" />,
            description: "We believe in the adage 'Sound mind in a sound body'. Our extensive sports facilities encourage students to pursue physical fitness and team sports with passion.",
            features: [
                "Pro-grade Basketball Court",
                "Football Turf & Athletics Track",
                "Indoor Games Arena",
                "Dedicated Kids Plan Area"
            ],
            image: getImagePath("/images/facilities/basketball-court.jpg"),
            color: "text-emerald-600"
        },
        {
            title: "Transport & Safety",
            subtitle: "Safe Commute",
            icon: <Bus className="h-6 w-6" />,
            description: "Ensuring the safety of our students is our top priority. Our fleet of school buses covers extensive routes, manned by trained drivers and support staff.",
            features: [
                "GPS-Tracked School Buses",
                "CCTV Surveillance",
                "Trained Attendants on Board",
                "Wide Coverage (Kasaragod to Kumbla)"
            ],
            image: getImagePath("/images/facilities/transport.jpg"),
            color: "text-red-600"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                {/* Background Image Layer */}
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src={getImagePath('/images/facilities/banner.jpg')}
                        alt="Facilities Hero"
                        fill
                        priority
                        className="object-cover object-center scale-105"
                    />
                </div>
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-primary/90 z-0" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container relative z-10 px-4 text-center"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                        Campus Life
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                        World-Class Infrastructure
                    </h1>
                    <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8" />
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        Where modern amenities meet academic excellence, creating the perfect environment for holistic growth.
                    </p>
                </motion.div>
            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="container px-4 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">Designed to Inspire</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            At Little Lilli English Medium School, we believe that the right environment matters. From spacious classrooms to advanced labs, our 4-acre campus is thoughtfully designed to stimulate curiosity, foster creativity, and support the physical and mental well-being of every student.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-12 pb-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="space-y-32">
                        {facilities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeIn}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
                            >
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`p-3 rounded-xl bg-primary/5 ${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <span className={`font-bold uppercase tracking-widest text-sm ${item.color}`}>{item.subtitle}</span>
                                    </div>
                                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary">{item.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>

                                    <div className="pt-4">
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {item.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                                        <div className="h-2 w-2 bg-secondary rounded-full" />
                                                    </div>
                                                    <span className="font-medium text-foreground/80">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {item.title.includes("Transport") && (
                                        <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800">
                                            <Bus className="h-5 w-5 shrink-0 mt-0.5" />
                                            <p className="text-sm font-medium">Covering major routes including Kasaragod, Perle, Kumbla, and surrounding areas.</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
                <div className="container px-4 mx-auto text-center relative z-10">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">See It to Believe It</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        We invite you to visit our campus and experience our world-class facilities firsthand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold py-4 px-8 rounded-full hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Schedule a Tour <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link
                            href="/admissions"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
