"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Trophy, BookOpen, Monitor, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/hero/slide-1.jpg",
    title: "Empowering Future Leaders",
    subtitle: "Nurturing holistic development since 1988"
  },
  {
    id: 2,
    image: "/images/facilities/science-lab.jpg",
    title: "Academic Excellence",
    subtitle: "100% Results & Modern Curriculum powered by LEAD"
  },
  {
    id: 3,
    image: "/images/events/sports-day.jpg",
    title: "Beyond Classrooms",
    subtitle: "State-of-the-art Sports & Arts Facilities"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">

        {/* Carousel Backgrounds */}
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-primary-foreground/90 font-medium drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/admissions"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-bold hover:bg-secondary/90 transition-colors w-full sm:w-auto shadow-lg"
            >
              Admissions Open 2024-25
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-4 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors hidden md:block">
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors hidden md:block">
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/50 hover:bg-white"}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-3">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">100%</h3>
              <p className="text-sm text-muted-foreground font-medium">SSLC & Plus Two Results</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">1:15</h3>
              <p className="text-sm text-muted-foreground font-medium">Teacher-Student Ratio</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">35+</h3>
              <p className="text-sm text-muted-foreground font-medium">Years of Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-3">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">LEAD</h3>
              <p className="text-sm text-muted-foreground font-medium">Powered by LEAD Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights / Why Choose Us */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Little Lilli?</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We offer a blend of traditional values and modern teaching methodologies to ensure your child&#39;s success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-muted-foreground mb-4">
                Consistently achieving 100% results in board exams with a curriculum designed for competitive success.
              </p>
              <Link href="/academics" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                View Curriculum <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="group border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Learning</h3>
              <p className="text-muted-foreground mb-4">
                Powered by LEAD, our smart classrooms and labs provide immersive digital learning experiences.
              </p>
              <Link href="/facilities" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Explore Facilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="group border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Green Campus</h3>
              <p className="text-muted-foreground mb-4">
                A sprawling 4-acre eco-friendly campus providing a serene and healthy environment for learning.
              </p>
              <Link href="/gallery" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                See Campus <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Experience Life at Little Lilli</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take a virtual tour of our campus and see how we nurture young minds. From state-of-the-art labs to spacious playgrounds, every corner is designed for growth.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Watch Full Tour
              </Link>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black md:order-last">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/images/facilities/auditorium.jpg"
              >
                <source src="/videos/school-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Family?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Admissions are open for the upcoming academic year. Secure your child&#39;s future with Little Lilli English Medium School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-bold hover:bg-secondary/90 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
