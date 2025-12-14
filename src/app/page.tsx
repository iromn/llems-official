"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Users, Trophy, BookOpen, Monitor, Leaf, ChevronLeft, ChevronRight, Calculator, Calendar, FileText, Bus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { getImagePath } from "@/lib/paths";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StatsSection from "@/components/StatsSection";

const slides = [
  {
    id: 1,
    image: getImagePath("/images/hero/slide-1.jpg"),
    title: "Empowering Future Leaders",
    subtitle: "Nurturing holistic development since 1988"
  },
  {
    id: 2,
    image: getImagePath("/images/facilities/science-lab.jpg"),
    title: "Academic Excellence",
    subtitle: "100% Results & Modern Curriculum powered by LEAD"
  },
  {
    id: 3,
    image: getImagePath("/images/gallery/teachers-day/td-3.jpg"),
    title: "Beyond Classrooms",
    subtitle: "State-of-the-art Sports & Arts Facilities"
  }
];

const quickLinks = [
  { name: "Admissions", icon: FileText, href: "/admissions" },
  { name: "Fee Structure", icon: Calculator, href: "/admissions#fees" },
  { name: "Transport", icon: Bus, href: "/facilities#transport" },
  { name: "Events", icon: Calendar, href: "/gallery" },
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
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Carousel Section */}
      <section className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" /> {/* Enhanced Overlay */}
            <div
              className="w-full h-full bg-cover transform hover:scale-105 transition-transform duration-[10s]"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundPosition: (slides[currentSlide] as any).position || "center"
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between h-full">
            <div className="max-w-3xl mb-12 md:mb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block bg-secondary text-white px-3 py-1 text-sm font-bold uppercase tracking-wider mb-4 rounded-sm">
                    Welcome to Little Lilli
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 font-light mb-8 drop-shadow-md border-l-4 border-secondary pl-4 max-w-xl">
                    {slides[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link
                  href="/admissions"
                  className="bg-secondary text-secondary-foreground px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-secondary transition-all w-full sm:w-auto shadow-lg text-lg uppercase tracking-wide"
                >
                  Admissions Open
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-medium hover:bg-white hover:text-primary transition-colors w-full sm:w-auto text-lg uppercase tracking-wide"
                >
                  Discover More
                </Link>
              </motion.div>
            </div>

            {/* Slide Progress/Indicators - moved to side or bottom right */}
            <div className="hidden md:flex flex-col gap-3 absolute right-6 bottom-12 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all ${index === currentSlide ? "bg-secondary scale-125 border-secondary" : "bg-transparent"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-all hidden md:block">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-all hidden md:block">
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Quick Links Strip */}
      <div className="bg-primary py-8 md:py-0 relative z-20 -mt-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10 md:border-none">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href} className="flex flex-col md:flex-row items-center justify-center gap-3 py-6 md:py-8 text-white hover:bg-white/5 transition-colors group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <link.icon className="h-6 w-6" />
                </div>
                <span className="font-serif text-lg font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome / Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              {/* DESKTOP VERSION - Hidden on Mobile */}
              <div className="hidden md:block relative w-full h-[500px]">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 -z-10 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 -z-10 rounded-full"></div>
                <div className="relative h-full w-full">
                  <Image
                    src={getImagePath("/images/home/inspiring-minds.webp")}
                    alt="Students"
                    fill
                    className="rounded-lg shadow-2xl object-cover"
                    sizes="50vw"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl rounded-lg max-w-xs border-l-4 border-secondary">
                  <p className="font-serif text-4xl font-bold text-primary mb-1">35+</p>
                  <p className="text-muted-foreground uppercase text-sm tracking-wider">Years of Educational Excellence</p>
                </div>
              </div>

              {/* MOBILE VERSION - Hidden on Desktop */}
              <div className="block md:hidden relative w-full mb-12 h-[300px]">
                {/* Using standard img tag with inline styles for maximum reliability */}
                <img
                  src={getImagePath("/images/home/inspiring-minds.webp")}
                  alt="Students"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  className="rounded-lg shadow-lg relative z-0"
                />
                {/* 35+ Years Box for Mobile */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-4 shadow-xl rounded-lg w-[90%] border-l-4 border-secondary z-10">
                  <p className="font-serif text-3xl font-bold text-primary mb-1">35+</p>
                  <p className="text-muted-foreground uppercase text-xs tracking-wider">Years of Educational Excellence</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm">Welcome to Our School</h4>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">Inspiring Minds, <br />Building Character</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Little Lilli, we believe that education is not just about academic results, but about forming keen, compassionate, and resilient individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our blended curriculum powered by LEAD ensures that your child gets the best of traditional value-based education and modern technological advancements.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="h-8 w-8 text-secondary mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-foreground">Expert Faculty</h5>
                    <p className="text-sm text-muted-foreground">Dedicated mentors for every child</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor className="h-8 w-8 text-secondary mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-foreground">Smart Classrooms</h5>
                    <p className="text-sm text-muted-foreground">Tech-enabled learning tailored for you</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/about" className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Cards */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Why Choose Little Lilli?</h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              A perfect ecosystem for your child&apos;s holistic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary">
              <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Academic Excellence</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Consistently achieving 100% results in board exams with a curriculum designed for competitive success.
              </p>
              <Link href="/academics" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:gap-3 transition-all uppercase tracking-wide">
                View Curriculum <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary">
              <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Monitor className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Smart Learning</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Powered by LEAD, our smart classrooms and labs provide immersive digital learning experiences.
              </p>
              <Link href="/facilities" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:gap-3 transition-all uppercase tracking-wide">
                Explore Facilities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-secondary">
              <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Leaf className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Green Campus</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A sprawling 4-acre eco-friendly campus providing a serene and healthy environment for learning.
              </p>
              <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:gap-3 transition-all uppercase tracking-wide">
                See Campus <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section with Parallax feel */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/images/hero/pattern-bg.png')" }}></div> {/* Optional pattern */}

        <div className="container px-4 md:px-6 mx-auto relative z-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Campus Life</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">Experience Life at <br />Little Lilli</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Take a virtual tour of our campus and see how we nurture young minds. From state-of-the-art labs to spacious playgrounds, every corner is designed for growth.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-secondary hover:text-white transition-colors shadow-lg"
                >
                  Watch Full Tour
                </Link>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
              <video
                controls
                className="w-full h-full object-cover"
                poster={getImagePath("/images/facilities/auditorium.jpg")}
              >
                <source src={getImagePath("/videos/school-tour.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Voices of Our Community</h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Hear from our students, parents, and faculty.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Quick Stats Strip (Moved down) */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl bg-muted/20 p-12 rounded-3xl border border-border">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-primary">Ready to Join Our Family?</h2>
          <p className="text-lg mb-10 text-muted-foreground max-w-2xl mx-auto">
            Admissions are open for the upcoming academic year. Secure your child&#39;s future with Little Lilli English Medium School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-bold hover:bg-secondary/90 transition-all shadow-lg text-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-md font-bold hover:bg-primary hover:text-white transition-all text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
