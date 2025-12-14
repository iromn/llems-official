"use client";

import { useState } from "react";
import { CheckCircle, ClipboardList, Send, FileText, UserCheck, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/lib/paths";
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
            staggerChildren: 0.15
        }
    }
};

export default function AdmissionsPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    const steps = [
        {
            icon: <ClipboardList className="h-6 w-6" />,
            title: "Submit Enquiry",
            desc: "Fill out the online enquiry form or visit our campus office to start the process."
        },
        {
            icon: <FileText className="h-6 w-6" />,
            title: "Document Review",
            desc: "Submit necessary documents (Birth Certificate, TC, etc.) for verification."
        },
        {
            icon: <UserCheck className="h-6 w-6" />,
            title: "Interaction",
            desc: "A brief, friendly interaction with the student and parents by the Principal."
        },
        {
            icon: <CheckCircle className="h-6 w-6" />,
            title: "Admission Granted",
            desc: "Complete the formalities and pay the admission fee to secure your seat."
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
                        src={getImagePath('/images/hero/slide-1.jpg')}
                        alt="Admissions Hero"
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
                            Join Our Family
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                            Admissions Open
                        </h1>
                        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8" />
                        <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            Begin your child&#39;s journey towards holistic excellence with Little Lilli English Medium School.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -z-0 hidden lg:block" />
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

                        {/* Left Column: Process & Info */}
                        <div className="lg:w-1/2 space-y-16 py-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">How to Apply</h4>
                                <h2 className="font-serif text-4xl font-bold text-primary mb-6">Simple 4-Step Process</h2>
                                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                    We strive to make the admission process as simple and transparent as possible. We welcome students from all backgrounds who are eager to learn and grow.
                                </p>

                                <div className="space-y-0 relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border -z-10" />

                                    {steps.map((step, index) => (
                                        <div key={index} className="flex gap-8 items-start pb-10 last:pb-0 relative group">
                                            <div className="shrink-0 h-12 w-12 bg-white border-2 border-secondary rounded-full flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform duration-300 z-10">
                                                {step.icon}
                                            </div>
                                            <div className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-shadow duration-300 w-full group-hover:border-secondary/50">
                                                <h3 className="font-bold text-xl mb-2 text-primary">{step.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-primary/5 p-8 rounded-2xl border border-primary/10"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                                    <FileText className="h-5 w-5 text-secondary" />
                                    Documents Required
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Birth Certificate (Original + Copy)",
                                        "Transfer Certificate (from previous school)",
                                        "Passport size photographs (4 copies)",
                                        "Aadhar Card copy",
                                        "Report card of the previous class"
                                    ].map((doc, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                                            <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center shrink-0 border border-secondary/30 mt-0.5">
                                                <div className="h-2 w-2 bg-secondary rounded-full" />
                                            </div>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Right Column: Enquiry Form */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl p-8 md:p-12 border border-border/50 sticky top-24">
                                <h2 className="font-serif text-3xl font-bold mb-4 text-primary">Admission Enquiry</h2>
                                <p className="text-muted-foreground mb-8">Fill out the form below and our admissions team will contact you shortly to guide you further.</p>

                                <AnimatePresence mode="wait">
                                    {formStatus === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                                        >
                                            <div className="h-24 w-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-2">
                                                <CheckCircle className="h-12 w-12" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold text-green-700">Enquiry Submitted!</h3>
                                                <p className="text-muted-foreground max-w-xs mx-auto">Thank you for your interest. We will get back to you within 24 hours.</p>
                                            </div>
                                            <button
                                                onClick={() => setFormStatus("idle")}
                                                className="text-primary font-bold hover:text-secondary transition-colors underline underline-offset-4"
                                            >
                                                Submit another enquiry
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="studentName" className="text-sm font-bold text-foreground/80">Student Name</label>
                                                    <input
                                                        id="studentName"
                                                        type="text"
                                                        required
                                                        className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="grade" className="text-sm font-bold text-foreground/80">Applying For Grade</label>
                                                    <select
                                                        id="grade"
                                                        required
                                                        className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                    >
                                                        <option value="">Select Grade</option>
                                                        <option value="nursery">Nursery / KG</option>
                                                        <option value="primary">Primary (1-5)</option>
                                                        <option value="high">High School (6-10)</option>
                                                        <option value="higher">Higher Secondary (11-12)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="parentName" className="text-sm font-bold text-foreground/80">Parent/Guardian Name</label>
                                                <input
                                                    id="parentName"
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                    placeholder="Jane Doe"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-bold text-foreground/80">Email Address</label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                        placeholder="email@example.com"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-sm font-bold text-foreground/80">Phone Number</label>
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        required
                                                        className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                        placeholder="+91 98765 43210"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-bold text-foreground/80">Message / Queries</label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
                                                    placeholder="Any specific questions regarding transportation, fees, etc."
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={formStatus === "submitting"}
                                                className="w-full bg-secondary text-secondary-foreground font-bold py-4 rounded-lg hover:bg-secondary/90 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                                            >
                                                {formStatus === "submitting" ? (
                                                    "Processing..."
                                                ) : (
                                                    <>Send Enquiry <Send className="h-5 w-5" /></>
                                                )}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Strip */}
            <section className="bg-primary text-primary-foreground py-12">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-xl font-serif font-bold mb-2">Have specific questions?</h3>
                            <p className="text-white/80">Reach out to our admissions office directly.</p>
                        </div>
                        <div className="flex gap-6">
                            <a href="tel:+919876543210" className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full hover:bg-white hover:text-primary transition-colors">
                                <Phone className="h-5 w-5" />
                                <span className="font-bold">+91 94474 38221</span>
                            </a>
                            <a href="mailto:littlelillikbl@gmail.com" className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full hover:bg-white hover:text-primary transition-colors">
                                <Mail className="h-5 w-5" />
                                <span className="font-bold">littlelillikbl@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
