"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/lib/paths";
import { ChevronDown, Play } from "lucide-react";

type GalleryItem = {
    id: number;
    category: string;
    src: string;
    title: string;
    type: 'image' | 'video';
    poster?: string;
};

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(12);

    const categories = [
        { id: "all", label: "All" },
        { id: "campus", label: "Campus" },
        { id: "events", label: "Events" },
        { id: "sports", label: "Sports" },
        { id: "academic", label: "Academic" },
        { id: "video", label: "Videos" }
    ];

    const items: GalleryItem[] = [
        // Photos (Displayed first)
        { id: 1, category: "campus", type: "image", src: getImagePath("/images/hero/slide-1.jpg"), title: "Main Campus" },
        { id: 2, category: "events", type: "image", src: getImagePath("/images/gallery/onam/onam-1.jpg"), title: "Onam Celebration" },
        { id: 3, category: "events", type: "image", src: getImagePath("/images/gallery/teachers-day/td-1.jpg"), title: "Teachers Day" },
        { id: 4, category: "sports", type: "image", src: getImagePath("/images/events/sports-day.jpg"), title: "Annual Sports Day" },
        { id: 5, category: "events", type: "image", src: getImagePath("/images/gallery/onam/onam-2.jpg"), title: "Onam Sadya" },
        { id: 6, category: "campus", type: "image", src: getImagePath("/images/gallery/cleaning-day/clean-1.jpg"), title: "Clean Campus Drive" },
        { id: 7, category: "academic", type: "image", src: getImagePath("/images/gallery/awards/award-1.jpg"), title: "Awards Ceremony" },
        { id: 8, category: "events", type: "image", src: getImagePath("/images/facilities/auditorium.jpg"), title: "School Auditorium" },
        { id: 9, category: "campus", type: "image", src: getImagePath("/images/facilities/library.jpg"), title: "Library" },
        { id: 10, category: "sports", type: "image", src: getImagePath("/images/facilities/basketball-court.jpg"), title: "Basketball Court" },
        { id: 11, category: "events", type: "image", src: getImagePath("/images/gallery/teachers-day/td-2.jpg"), title: "Staff Gathering" },
        { id: 12, category: "academic", type: "image", src: getImagePath("/images/facilities/science-lab.jpg"), title: "Science Laboratory" },
        { id: 13, category: "campus", type: "image", src: getImagePath("/images/facilities/school-bus.jpg"), title: "Transportation" },
        { id: 15, category: "events", type: "image", src: getImagePath("/images/gallery/onam/onam-3.jpg"), title: "Cultural Fest" },
        { id: 16, category: "campus", type: "image", src: getImagePath("/images/gallery/cleaning-day/clean-2.jpg"), title: "Student Activities" },
        { id: 17, category: "events", type: "image", src: getImagePath("/images/gallery/teachers-day/td-3.jpg"), title: "Teachers Day Event" },
        { id: 18, category: "academic", type: "image", src: getImagePath("/images/gallery/awards/award-2.jpg"), title: "Prize Distribution" },
        { id: 19, category: "events", type: "image", src: getImagePath("/images/gallery/music-chair/music-1.jpg"), title: "Musical Chairs" },
        { id: 20, category: "events", type: "image", src: getImagePath("/images/gallery/teachers-day/td-4.jpg"), title: "Faculty Celebration" },

        // Videos (Displayed last)
        { id: 101, category: "video", type: "video", src: getImagePath("/videos/gallery/fruit-day.mp4"), title: "Fruit Day Celebration" },
        { id: 102, category: "video", type: "video", src: getImagePath("/videos/gallery/onam-dance.mp4"), title: "Onam Dance Performance" },
        { id: 103, category: "video", type: "video", src: getImagePath("/videos/gallery/teachers-day.mp4"), title: "Teachers Day Highlights" },
        { id: 104, category: "video", type: "video", src: getImagePath("/videos/gallery/onam-1.mp4"), title: "Onam Festivities" },
        { id: 105, category: "video", type: "video", src: getImagePath("/videos/gallery/musical-chairs.mp4"), title: "Musical Chairs Game" },
        { id: 106, category: "video", type: "video", src: getImagePath("/videos/gallery/kids-play.mp4"), title: "Kids Play Time" },
        { id: 107, category: "video", type: "video", src: getImagePath("/videos/gallery/teachers-fun.mp4"), title: "Teachers Fun Moments" },
        { id: 108, category: "video", type: "video", src: getImagePath("/videos/gallery/teachers-dance.mp4"), title: "Teachers Dance" },
    ];

    const filteredItems = activeCategory === "all"
        ? items
        : items.filter(item => item.category === activeCategory);

    const visibleItems = filteredItems.slice(0, visibleCount);

    const handleCategoryChange = (catId: string) => {
        setActiveCategory(catId);
        setVisibleCount(12);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-muted py-12 md:py-20 text-center">
                <div className="container px-4 mx-auto">
                    <h1 className="font-serif text-4xl font-bold mb-4 text-primary">Photo & Video Gallery</h1>
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
                                onClick={() => handleCategoryChange(cat.id)}
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
                            {visibleItems.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-xl overflow-hidden aspect-[4/3] group relative shadow-md hover:shadow-xl transition-shadow bg-black"
                                >
                                    {item.type === 'video' ? (
                                        <div className="w-full h-full flex items-center justify-center bg-black">
                                            <video
                                                src={item.src}
                                                controls
                                                className="w-full h-full object-contain"
                                                preload="metadata"
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            <div
                                                className="w-full h-full bg-cover bg-top group-hover:scale-110 transition-transform duration-500"
                                                style={{ backgroundImage: `url(${item.src})` }}
                                            />
                                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                                <p className="text-white font-medium">{item.title}</p>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Load More Button */}
                    {filteredItems.length > visibleCount && (
                        <div className="mt-12 text-center">
                            <button
                                onClick={handleLoadMore}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-full hover:bg-muted transition-colors font-medium text-primary shadow-sm"
                            >
                                View More
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
