"use client";

import { MapPin, Phone, Mail, Clock, Send, Globe, MessageSquare } from "lucide-react";
import { getImagePath } from "@/lib/paths";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                {/* Background Image Layer */}
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src={getImagePath('/images/hero/slide-1.jpg')}
                        alt="Contact Hero"
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
                        Get In Touch
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                        Contact Us
                    </h1>
                    <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8" />
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        We are here to answer your questions and help you with any information you need.
                    </p>
                </motion.div>
            </section>

            <div className="flex-grow container px-4 mx-auto py-24">

                {/* Contact Info Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {[
                        { icon: <MapPin className="h-6 w-6" />, title: "Our Address", desc: ["Little Lilli English Medium School,", "Kumbla, Kasaragod,", "Kerala, India - 671321"], color: "text-red-500", bg: "bg-red-500/10" },
                        { icon: <Phone className="h-6 w-6" />, title: "Phone Support", desc: ["04998 215306", "+91 94474 38221"], color: "text-blue-500", bg: "bg-blue-500/10" },
                        { icon: <Mail className="h-6 w-6" />, title: "Email Us", desc: ["littlelillikbl@gmail.com", "admissions@littlelilli.com"], color: "text-amber-500", bg: "bg-amber-500/10" },
                        { icon: <Clock className="h-6 w-6" />, title: "Office Hours", desc: ["Mon - Fri: 9:00 AM - 4:00 PM", "Sat: 9:00 AM - 1:00 PM"], color: "text-green-500", bg: "bg-green-500/10" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
                        >
                            <div className={`h-12 w-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-4 text-primary">{item.title}</h3>
                            <div className="text-muted-foreground text-sm space-y-1 leading-relaxed">
                                {item.desc.map((line, i) => <p key={i}>{line}</p>)}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Quick Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-0" />
                        <div className="relative z-10">
                            <h2 className="font-serif text-3xl font-bold mb-2 text-primary">Send us a Message</h2>
                            <p className="text-muted-foreground mb-8">Fill in the form below and we will get back to you shortly.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground/80">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground/80">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground/80">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground/80">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="General Enquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground/80">Message</label>
                                    <textarea rows={5} className="w-full px-4 py-3 bg-muted/20 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none" placeholder="How can we help you?" />
                                </div>
                                <button className="w-full bg-secondary text-secondary-foreground font-bold py-4 rounded-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Send Message <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="font-serif text-3xl font-bold mb-4 text-primary">Find Us</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                We are located in the heart of Kumbla. Feel free to visit our campus during office hours for a tour or to meet our administration.
                            </p>
                        </div>

                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[450px] w-full bg-muted relative group">
                            <iframe
                                src="https://maps.google.com/maps?cid=5022091885320661106&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-all duration-700"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-border/50 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Globe className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">Accessible Location</p>
                                        <p className="text-sm text-muted-foreground">Easily reachable via public and private transport</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
