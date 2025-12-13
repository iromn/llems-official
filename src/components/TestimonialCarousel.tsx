"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/lib/paths";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    video: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Kavya Shetty",
        role: "Parent",
        video: "/videos/testimonials/kavya-shetty.mp4"
    },
    {
        id: 2,
        name: "Student Experience",
        role: "Alumni",
        video: "/videos/testimonials/testimonial-1.mp4"
    },
    {
        id: 3,
        name: "Student Experience",
        role: "Alumni",
        video: "/videos/testimonials/testimonial-2.mp4"
    },
    {
        id: 4,
        name: "Student Experience",
        role: "Alumni",
        video: "/videos/testimonials/testimonial-3.mp4"
    }
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4">
            <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Video Container - Fixed height, object-contain for mixed aspect ratios */}
                    <div className="relative h-[500px] md:h-[600px] bg-black flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <video
                                    controls
                                    className="w-full h-full object-contain"
                                    src={getImagePath(testimonials[currentIndex].video)}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Content / Info Side */}
                    <div className="p-8 flex flex-col justify-center items-center text-center bg-muted/30">
                        <Quote className="h-12 w-12 text-primary/20 mb-6" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-6">
                                    {testimonials[currentIndex].role}
                                </p>
                                <div className="h-1 w-16 bg-primary/20 mx-auto rounded-full" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-background border border-border hover:bg-muted transition-colors shadow-sm group"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                            </button>
                            <span className="text-sm font-medium text-muted-foreground tabular-nums">
                                {currentIndex + 1} / {testimonials.length}
                            </span>
                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-background border border-border hover:bg-muted transition-colors shadow-sm group"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
