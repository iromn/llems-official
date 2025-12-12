"use client";

import { useState } from "react";
import { CheckCircle, ClipboardList, Send, FileText, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

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
            desc: "Fill out the online enquiry form or visit our campus office."
        },
        {
            icon: <FileText className="h-6 w-6" />,
            title: "Document Review",
            desc: "Submit necessary documents (Birth Certificate, Transfer Certificate, etc.)."
        },
        {
            icon: <UserCheck className="h-6 w-6" />,
            title: "Interaction",
            desc: "A brief interaction with the student and parents by the Principal."
        },
        {
            icon: <CheckCircle className="h-6 w-6" />,
            title: "Admission Granted",
            desc: "Pay the admission fee to secure your seat."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-black/40 z-0">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1577896335477-02d7bbb7b40a?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">Start your journey with Little Lilli English Medium School</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left Column: Process & Info */}
                        <div className="lg:w-1/2 space-y-12">
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Admission Process</h2>
                                <p className="text-muted-foreground mb-8">
                                    We strive to make the admission process as simple and transparent as possible. We welcome students from all backgrounds who are eager to learn and grow.
                                </p>
                                <div className="space-y-8">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                {step.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                                <p className="text-muted-foreground text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-muted/50 p-6 rounded-xl border border-border">
                                <h3 className="font-bold text-lg mb-3">Documents Required</h3>
                                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                                    <li>Birth Certificate (Original + Copy)</li>
                                    <li>Transfer Certificate (from previous school)</li>
                                    <li>Passport size photographs (4 copies)</li>
                                    <li>Aadhar Card copy</li>
                                    <li>Report card of the previous class</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Enquiry Form */}
                        <div className="lg:w-1/2">
                            <div className="bg-card shadow-xl rounded-2xl p-8 border border-border">
                                <h2 className="font-serif text-2xl font-bold mb-2">Admission Enquiry</h2>
                                <p className="text-muted-foreground mb-6 text-sm">Fill out the form below and our admissions team will contact you shortly.</p>

                                {formStatus === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center p-8 text-center space-y-4"
                                    >
                                        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-700">Enquiry Submitted!</h3>
                                        <p className="text-muted-foreground">Thank you for your interest. We will get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setFormStatus("idle")}
                                            className="text-primary font-medium hover:underline mt-4"
                                        >
                                            Submit another enquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="studentName" className="text-sm font-medium">Student Name</label>
                                                <input
                                                    id="studentName"
                                                    type="text"
                                                    required
                                                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="grade" className="text-sm font-medium">Applying For Grade</label>
                                                <select
                                                    id="grade"
                                                    required
                                                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background"
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
                                            <label htmlFor="parentName" className="text-sm font-medium">Parent/Guardian Name</label>
                                            <input
                                                id="parentName"
                                                type="text"
                                                required
                                                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                                placeholder="Jane Doe"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    required
                                                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">Message / Queries</label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                                                placeholder="Any specific questions regarding transportation, fees, etc."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === "submitting"}
                                            className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-md hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {formStatus === "submitting" ? (
                                                "Sending..."
                                            ) : (
                                                <>Send Enquiry <Send className="h-4 w-4" /></>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
