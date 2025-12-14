"use client";

import { Quote, Target, Lightbulb, Award, Calendar, BookOpen } from "lucide-react";
import { getImagePath } from "@/lib/paths";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function AboutPage() {
    const leadership = [
        {
            name: "Dr. Vishnudas Ramaswamy",
            role: "Leadership Team",
            qualifications: "B.Tech, M.Tech & Ph.D (IIT Madras)",
            bio: "Senior Research Scientist at Bosch Rexroth with 10+ years in R&D. Gold Medalist from NIT Allahabad. Also a passionate filmmaker with 5 short films to his credit.",
            image: getImagePath("/images/staff/dr-vishnudas.jpg")
        },
        {
            name: "Dr. Vaibhavi K R",
            role: "Leadership Team",
            qualifications: "MBBS & M.S (Otorhinolaryngology)",
            bio: "Senior Resident at Vivekananda Medical College. An enthusiastic doctor, counselor, and entrepreneur aiming to bring health and wellness to the community.",
            image: getImagePath("/images/staff/dr-vaibhavi.jpg")
        },
        {
            name: "Mr. Prahalad K R",
            role: "Leadership Team",
            qualifications: "B.Tech, M.Tech & M.E (Manipal)",
            bio: "Specialist in VLSI Design and Control Systems. Published multiple technical papers and has a strong background in academic excellence and athletics.",
            image: getImagePath("/images/staff/mr-prahlad.jpg")
        }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                {/* Background Image Layer */}
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src={getImagePath('/images/about/new-banner.jpg')}
                        alt="About Hero"
                        fill
                        priority
                        className="object-cover object-center scale-105"
                    />
                </div>
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-primary/90 z-0" />

                {/* Content Layer */}
                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                            Discover Our Essence
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                            About Our School
                        </h1>
                        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6" />
                        <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            A legacy of excellence, a future of limitless possibilities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* School Profile - History */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            className="lg:w-1/2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Our History</h4>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary leading-tight">
                                35 Years of <br className="hidden md:block" />Educational Excellence
                            </h2>
                            <div className="prose prose-lg text-muted-foreground">
                                <p className="mb-6 leading-relaxed">
                                    Founded in the year <span className="font-bold text-primary">1988</span>, Little Lilli English Medium School stands as a beacon of knowledge in Kumbla, Kasaragod. What started as a humble initiative has grown into one of the premier institutions in the region.
                                </p>
                                <p className="leading-relaxed">
                                    Under the management of a private unaided unit, we conduct classes from Nursery to Plus Two, governed by the CBSE board. Our infrastructure includes brilliant classrooms, modern activity rooms, expansive playgrounds, hi-tech labs, and a resource-rich library, all designed to foster holistic growth.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-secondary/10 p-3 rounded-full">
                                        <Calendar className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary text-lg">1988</p>
                                        <p className="text-sm text-muted-foreground">Established</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-secondary/10 p-3 rounded-full">
                                        <Award className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary text-lg">CBSE</p>
                                        <p className="text-sm text-muted-foreground">Affiliated</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                <div className="relative w-full aspect-[4/3] bg-muted">
                                    <Image
                                        src={getImagePath('/images/about/school-building.jpg')}
                                        alt="School Building"
                                        fill
                                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-secondary hidden md:block max-w-xs">
                                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-1">Total Students</p>
                                <p className="font-serif text-3xl font-bold text-primary">1,200+</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-muted/30 relative">
                <div className="absolute inset-0 bg-[url('/images/hero/pattern-bg.png')] opacity-5 pointer-events-none"></div>
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Our Guiding Principles</h2>
                        <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Mission */}
                        <motion.div
                            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="h-16 w-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Target className="h-8 w-8 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="font-serif text-3xl font-bold mb-6 text-primary">Our Mission</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To provide a stimulating and lively learning environment.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To mold compassionate and competent citizens of the world.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To enable learner-centered education in a supportive atmosphere.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To develop values and knowledge for lifelong learning.</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="h-16 w-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Lightbulb className="h-8 w-8 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="font-serif text-3xl font-bold mb-6 text-primary">Our Vision</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To attain Excellence in Education at all levels.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To promote creativity, innovation, and a scientific mindset.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To provide world-class education that empowers students.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="h-2 w-2 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>To nurture socially responsible future leaders.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        className="text-center mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">The Minds Behind</h4>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-primary">Our Leadership Team</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Guided by a team of visionary leaders, researchers, and medical professionals dedicated to empowering the next generation.
                        </p>
                    </motion.div>

                    {/* Chairperson Message */}
                    <motion.div
                        className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-14 mb-20 relative overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Quote className="h-48 w-48 text-white transform rotate-12" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-secondary">Chairperson&#39;s Message</h3>

                            <BookOpen className="h-10 w-10 text-white/80 mx-auto mb-6" />

                            <p className="text-xl md:text-2xl italic mb-10 leading-relaxed font-light text-white/90">
                                &quot;As a result of the &#39;knowledge economy&#39;, a new era is beginning to dawn. Even as we are ready to surf the waves of change, we must stay grounded in our core values. Our school takes pride in being a place that teaches not just the most up-to-date information, but also the fundamental principles of humanity.&quot;
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="h-1 w-12 bg-secondary mb-4 rounded-full" />
                                <p className="font-bold text-white text-xl">Dr. Vishnudas Ramaswamy</p>
                                <p className="text-white/60 text-sm uppercase tracking-widest mt-1">Chairperson</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {leadership.map((person, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white rounded-xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 border border-border/50"
                                variants={fadeInUp}
                            >
                                <div className="h-[400px] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                        />
                                    </div>

                                    {/* Social Overlay or decorative - Optional */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        <p className="text-white text-xs font-bold uppercase tracking-widest text-center">Leadership Team</p>
                                    </div>
                                </div>
                                <div className="p-8 relative">
                                    <div className="absolute -top-6 right-6 h-12 w-12 bg-secondary text-secondary-foreground flex items-center justify-center rounded-full shadow-lg z-20">
                                        <UserIcon index={index} />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">{person.name}</h3>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4 border-b border-border pb-4">{person.qualifications}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
                                        {person.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

// Helper component for dynamic icons based on index/role
function UserIcon({ index }: { index: number }) {
    if (index === 0) return <Target className="h-6 w-6" />;
    if (index === 1) return <Lightbulb className="h-6 w-6" />;
    return <BookOpen className="h-6 w-6" />;
}

