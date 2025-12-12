"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Teacher {
    id: number;
    name: string;
    qualification: string;
    role: string | null;
    experience: string;
    image?: string;
}

const teachers: Teacher[] = [
    { id: 1, name: "Anitha", qualification: "B.Com", role: "Administrator", experience: "30 Years" },
    { id: 2, name: "Pushparaj B", qualification: "MA, B.Ed", role: "Academic Director", experience: "25 Years" },
    { id: 3, name: "Gopinath", qualification: "MA, B.Ed", role: "English Faculty", experience: "20 Years" },
    { id: 4, name: "Jeeta D'Souza", qualification: "BA, B.Ed, K.TET", role: "EVS & Social Science", experience: "10 Years", image: "/images/faculty/jeeta-dsouza.jpg" },
    { id: 5, name: "Shakuntala", qualification: "TTC & BA", role: "Hindi Faculty", experience: "10 Years", image: "/images/faculty/shakuntala.jpg" },
    { id: 6, name: "Mohan", qualification: "Diploma", role: "Drawing Faculty", experience: "10 Years", image: "/images/faculty/mohan.jpg" },
    { id: 7, name: "Savitha M", qualification: "D.El.Ed, MA, K.TET", role: "Hindi Faculty", experience: "9 Years", image: "/images/faculty/savitha-m.jpg" },
    { id: 8, name: "Meena M", qualification: "BA, B.Ed", role: "Malayalam Faculty", experience: "7 Years", image: "/images/faculty/meena-m.jpg" },
    { id: 9, name: "Princy", qualification: "MA, B.Ed", role: "Social Science", experience: "5 Years", image: "/images/faculty/princy.jpg" },
    { id: 10, name: "Chaitra", qualification: "Diploma", role: "Physical Education", experience: "5 Years" },
    { id: 11, name: "Akshatha V", qualification: "M.Com, B.Ed", role: "English & Maths", experience: "4 Years", image: "/images/faculty/akshatha-v.jpg" },
    { id: 12, name: "Divyashree", qualification: "B.Com, M.Com", role: "English, Maths, EVS", experience: "2 Years", image: "/images/faculty/divyashree.jpg" },
    { id: 13, name: "Chaithra", qualification: "B.Com", role: "L/KG Faculty", experience: "2 Years" },
    { id: 14, name: "Jeetha Mariya", qualification: "B.Sc, B.Ed", role: "Biology Faculty", experience: "1 Year", image: "/images/faculty/jeetha-mariya.jpg" },
    { id: 15, name: "Anna Maria D'Souza", qualification: "B.Sc, M.Sc", role: "Maths Faculty", experience: "1 Year", image: "/images/faculty/anna-maria.jpg" },
    { id: 16, name: "Vinool Priya M", qualification: "B.Sc, B.Ed", role: "Science & Computer", experience: "1 Year", image: "/images/faculty/vinool-priya.jpg" },
    { id: 17, name: "Yashwitha", qualification: "BA, B.Ed", role: "Hindi & Computer", experience: "1 Year", image: "/images/faculty/yashwitha.jpg" },
    { id: 18, name: "Nischitha D", qualification: "BA, B.Ed", role: "Kannada Faculty", experience: "1 Year", image: "/images/faculty/nischitha-d.jpg" },
    { id: 19, name: "Kadeejath Afnaz", qualification: "NTTC", role: "KG Section", experience: "1 Year", image: "/images/faculty/kadeejath-afnaz.jpg" },
];

export default function FacultyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-primary-foreground py-16 text-center">
                <h1 className="font-serif text-4xl font-bold mb-4">Our Faculty</h1>
                <p className="opacity-90 max-w-2xl mx-auto">
                    Meet the dedicated educators who nurture different facets of your child&apos;s development.
                </p>
            </section>

            <section className="py-16 container px-4 mx-auto flex-grow">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {teachers.map((teacher, index) => (
                        <motion.div
                            key={teacher.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                        >
                            <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                                {teacher.image ? (
                                    <Image
                                        src={teacher.image}
                                        alt={teacher.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                        <span className="text-sm">No Image</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-3 text-center">
                                <h3 className="font-serif font-bold text-base text-primary mb-1">{teacher.name}</h3>
                                <p className="text-[10px] uppercase tracking-wider text-secondary font-bold mb-1">
                                    {teacher.role}
                                </p>
                                <div className="text-xs text-muted-foreground space-y-0.5">
                                    <p>{teacher.qualification}</p>
                                    <p className="font-medium text-primary/80">{teacher.experience} Exp</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
