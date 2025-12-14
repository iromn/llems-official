"use client";

import { useEffect, useRef } from "react";
import { Trophy, Users, GraduationCap, Monitor } from "lucide-react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const inView = useInView(ref, { once: true, margin: "-10px" });
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString();
            }
        });
    }, [springValue]);

    return <span ref={ref} />;
};

export default function StatsSection() {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {/* SSLC Pass Rate */}
                    <div className="flex flex-col items-center p-4">
                        <Trophy className="h-10 w-10 text-secondary mb-4" />
                        <h3 className="text-4xl font-serif font-bold text-white mb-1 flex items-center justify-center">
                            <AnimatedCounter to={100} />%
                        </h3>
                        <p className="text-sm text-white/70 uppercase tracking-widest font-medium">SSLC Pass Rate</p>
                    </div>

                    {/* Teacher Ratio */}
                    <div className="flex flex-col items-center p-4">
                        <Users className="h-10 w-10 text-secondary mb-4" />
                        <h3 className="text-4xl font-serif font-bold text-white mb-1 flex items-center justify-center">
                            1:<AnimatedCounter to={15} />
                        </h3>
                        <p className="text-sm text-white/70 uppercase tracking-widest font-medium">Teacher Ratio</p>
                    </div>

                    {/* Years Active */}
                    <div className="flex flex-col items-center p-4">
                        <GraduationCap className="h-10 w-10 text-secondary mb-4" />
                        <h3 className="text-4xl font-serif font-bold text-white mb-1 flex items-center justify-center">
                            <AnimatedCounter to={35} />+
                        </h3>
                        <p className="text-sm text-white/70 uppercase tracking-widest font-medium">Years Active</p>
                    </div>

                    {/* Smart Curriculum */}
                    <div className="flex flex-col items-center p-4">
                        <Monitor className="h-10 w-10 text-secondary mb-4" />
                        <motion.h3
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl font-serif font-bold text-white mb-1"
                        >
                            LEAD
                        </motion.h3>
                        <p className="text-sm text-white/70 uppercase tracking-widest font-medium">Smart Curriculum</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
