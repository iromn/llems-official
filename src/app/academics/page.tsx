"use client";

import { BookOpen, GraduationCap, Users, Award, Brain, Microscope } from "lucide-react";
import Link from "next/link";

import { getImagePath } from "@/lib/paths";

export default function AcademicsPage() {
    const levels = [
        {
            title: "Kindergarten",
            desc: "Nurturing young minds with play-based learning and foundational skills.",
            icon: <Brain className="h-8 w-8 text-secondary" />
        },
        {
            title: "Primary School",
            desc: "Building core concepts in science, math, and languages with interactive methods.",
            icon: <BookOpen className="h-8 w-8 text-secondary" />
        },
        {
            title: "High School",
            desc: "Advanced curriculum focusing on critical thinking and board exam preparation.",
            icon: <Microscope className="h-8 w-8 text-secondary" />
        },
        {
            title: "Higher Secondary",
            desc: "Specialized streams in Science and Commerce for career-focused education.",
            icon: <GraduationCap className="h-8 w-8 text-secondary" />
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-primary text-primary-foreground">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${getImagePath('/images/academics/banner.jpg')})` }}
                />
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black/50 z-0" />

                {/* Content Layer */}
                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h1>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>
            </section>

            {/* Overview */}
            <section className="py-16">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">A Curriculum for Future Leaders</h2>
                        <p className="text-muted-foreground text-lg">
                            Affiliated with the Central Board of Secondary Education (CBSE), we offer a rigorous yet balanced academic program from Nursery to Grade 12. Our focus is on holistic development, combining academic rigor with creative expression.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {levels.map((level, index) => (
                            <div key={index} className="bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                                <div className="bg-primary/5 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {level.icon}
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-2">{level.title}</h3>
                                <p className="text-muted-foreground">{level.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology & Results */}
            <section className="py-16 bg-muted/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-primary">Our Educational Philosophy</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="shrink-0 bg-background p-2 rounded-lg border border-border h-fit">
                                        <Users className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Student-Centered Learning</h3>
                                        <p className="text-muted-foreground">We tailor our approach to address unique student needs, fostering an environment where every child feels supported and valued.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 bg-background p-2 rounded-lg border border-border h-fit">
                                        <Award className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Proven Track Record</h3>
                                        <p className="text-muted-foreground">We take pride in our consistent 100% results in SSLC and Plus Two board examinations, a testament to our dedicated faculty and hardworking students.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 bg-background p-2 rounded-lg border border-border h-fit">
                                        <Brain className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Lifelong Learners</h3>
                                        <p className="text-muted-foreground">Our goal is to instill values and knowledge that go beyond textbooks, preparing students to be lifelong learners and innovative thinkers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3]">
                                <div className="absolute inset-0 bg-primary/20" />
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${getImagePath('/images/academics/smart-rooms.jpg')})` }}
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-bold text-primary uppercase tracking-wider">Teacher-Student Ratio</p>
                                            <p className="text-4xl font-bold text-foreground">1:15</p>
                                        </div>
                                        <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                                            <Users className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground text-center">
                <div className="container px-4 mx-auto">
                    <h2 className="font-serif text-3xl font-bold mb-6">Join Our Academic Community</h2>
                    <p className="mb-8 max-w-2xl mx-auto opacity-90">
                        Admissions are open for the upcoming academic year. Give your child the advantage of a world-class education.
                    </p>
                    <Link
                        href="/admissions"
                        className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-bold hover:bg-secondary/90 transition-colors"
                    >
                        Apply for Admission
                    </Link>
                </div>
            </section>
        </div>
    );
}
