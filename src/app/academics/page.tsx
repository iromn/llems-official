"use client";

import { BookOpen, GraduationCap, Users, Award, Brain, Microscope, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { getImagePath } from "@/lib/paths";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function AcademicsPage() {
    const levels = [
        {
            title: "Kindergarten",
            desc: "Nurturing young minds with play-based learning and foundational skills in a safe, caring environment.",
            icon: <Brain className="h-8 w-8" />,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Primary School",
            desc: "Building core concepts in science, math, and languages with interactive and experiential methods.",
            icon: <BookOpen className="h-8 w-8" />,
            color: "bg-green-50 text-green-600"
        },
        {
            title: "High School",
            desc: "Advanced curriculum focusing on critical thinking, problem-solving, and comprehensive board exam preparation.",
            icon: <Microscope className="h-8 w-8" />,
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Higher Secondary",
            desc: "Specialized streams in Science and Commerce designed for competitive success and career-focused education.",
            icon: <GraduationCap className="h-8 w-8" />,
            color: "bg-orange-50 text-orange-600"
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
                        src={getImagePath('/images/academics/banner.jpg')}
                        alt="Academics Hero"
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
                            World-Class Learning
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                            Academic Excellence
                        </h1>
                        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8" />
                        <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            Empowering students with knowledge, skills, and values for a changing world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-primary">A Curriculum for Future Leaders</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Affiliated with the Central Board of Secondary Education (CBSE), we offer a rigorous yet balanced academic program from Nursery to Grade 12. Our focus is on holistic development, combining academic rigor with creative expression.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {levels.map((level, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white border border-border/60 p-8 rounded-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                                variants={fadeInUp}
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-${level.color.split(" ")[0].replace("bg-", "")}/20 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:scale-150 duration-500`} />

                                <div className={`${level.color.replace("text-", "bg-").replace("50", "100")} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={level.color.split(" ")[1]}>
                                        {level.icon}
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-3 text-primary">{level.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{level.desc}</p>

                                <div className="h-1 w-12 bg-border group-hover:w-full group-hover:bg-secondary transition-all duration-500 rounded-full" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Methodology & Results */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <motion.div
                            className="lg:w-1/2 space-y-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm">Our Approach</h4>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary leading-tight">Educational <br />Philosophy</h2>

                            <div className="space-y-6">
                                <div className="group flex gap-5 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                                    <div className="shrink-0 bg-white p-3 rounded-xl shadow-sm border border-border group-hover:border-secondary transition-colors">
                                        <Users className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-primary mb-2">Student-Centered Learning</h3>
                                        <p className="text-muted-foreground leading-relaxed">We tailor our approach to address unique student needs, fostering an environment where every child feels supported and valued.</p>
                                    </div>
                                </div>
                                <div className="group flex gap-5 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                                    <div className="shrink-0 bg-white p-3 rounded-xl shadow-sm border border-border group-hover:border-secondary transition-colors">
                                        <Award className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-primary mb-2">Proven Track Record</h3>
                                        <p className="text-muted-foreground leading-relaxed">We take pride in our consistent 100% results in SSLC and Plus Two board examinations, a testament to our dedicated faculty.</p>
                                    </div>
                                </div>
                                <div className="group flex gap-5 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                                    <div className="shrink-0 bg-white p-3 rounded-xl shadow-sm border border-border group-hover:border-secondary transition-colors">
                                        <Brain className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-primary mb-2">Lifelong Learners</h3>
                                        <p className="text-muted-foreground leading-relaxed">Our goal is to instill values and knowledge that go beyond textbooks, preparing students to be lifelong learners and innovative thinkers.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2 w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/3] relative z-10">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={getImagePath('/images/academics/smart-rooms.jpg')}
                                            alt="Smart Classroom"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-20">
                                        <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 text-white">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-wider mb-1 text-secondary">Student-Teacher Ratio</p>
                                                    <p className="text-5xl font-bold">1:15</p>
                                                    <p className="text-sm text-white/80 mt-1">Ensuring individual attention</p>
                                                </div>
                                                <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                                                    <Users className="h-8 w-8 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative blob */}
                                <div className="absolute -z-10 top-10 right-10 w-full h-full bg-secondary rounded-2xl opacity-20 transform translate-x-4 translate-y-4" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary z-0">
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/hero/pattern-bg.png')]" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
                        <p className="mb-10 max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
                            Admissions are open for the upcoming academic year. Give your child the advantage of a world-class education with values.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-bold hover:bg-white hover:text-primary transition-all shadow-lg text-lg uppercase tracking-wide group"
                            >
                                Apply for Admission
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white hover:text-primary transition-all text-lg uppercase tracking-wide"
                            >
                                Talk to Counselors
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
