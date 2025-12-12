"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/lib/paths";

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", label: "All Photos" },
        { id: "campus", label: "Campus" },
        { id: "events", label: "Events & Culture" },
        { id: "sports", label: "Sports" },
        { id: "academic", label: "Academic" }
    ];

    const photos = [
        { id: 1, category: "campus", src: getImagePath("/images/hero/slide-1.jpg"), title: "Main Campus" },
        { id: 2, category: "academic", src: getImagePath("/images/facilities/science-lab.jpg"), title: "Science Laboratory" },
        { id: 3, category: "sports", src: getImagePath("/images/events/sports-day.jpg"), title: "Annual Sports Day" },
        { id: 4, category: "events", src: getImagePath("/images/facilities/auditorium.jpg"), title: "School Auditorium" },
        { id: 5, category: "campus", src: getImagePath("/images/facilities/library.jpg"), title: "Library" },
        { id: 6, category: "sports", src: getImagePath("/images/facilities/basketball-court.jpg"), title: "Basketball Court" },
        { id: 7, category: "campus", src: getImagePath("/images/facilities/school-bus.jpg"), title: "Transportation" },
        { id: 8, category: "events", src: getImagePath("/images/events/christmas.jpg"), title: "Christmas Celebration" },
    ];

    const filteredPhotos = activeCategory === "all"
        ? photos
        : photos.filter(photo => photo.category === activeCategory);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-muted py-12 md:py-20 text-center">
                <div className="container px-4 mx-auto">
                    <h1 className="font-serif text-4xl font-bold mb-4 text-primary">Photo Gallery</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Glimpses of life at Little Lilli English Medium School. From classroom activities to vibrant cultural festivities.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-8 sticky top-16 bg-background/95 backdrop-blur z-40 border-b border-border">
                <div className="container px-4 mx-auto overflow-x-auto">
                    <div className="flex justify-center min-w-max gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.id
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-12 flex-grow">
                <div className="container px-4 mx-auto">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredPhotos.map((photo) => (
                                <motion.div
                                    layout
                                    key={photo.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-xl overflow-hidden aspect-[4/3] group relative cursor-pointer"
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${photo.src})` }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white font-medium">{photo.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
