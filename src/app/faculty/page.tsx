"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/lib/paths";

interface Teacher {
    id: number;
    name: string;
    qualification: string;
    role: string | null;
    experience: string;
    image?: string;
}

const leadership: Teacher[] = [
    { id: 1, name: "Anitha", qualification: "B.Com", role: "Administrator", experience: "30 Years", image: "/images/faculty/anitha.jpg" },
    { id: 2, name: "Pushparaj B", qualification: "MA, B.Ed", role: "Academic Director", experience: "25 Years", image: "/images/faculty/pushparaj-b.jpg" },
];

const faculty: Teacher[] = [
    { id: 3, name: "Gopinath", qualification: "MA, B.Ed", role: "English Faculty", experience: "20 Years", image: "/images/faculty/gopinath.jpg" },
    { id: 4, name: "Jeeta D'Souza", qualification: "BA, B.Ed, K.TET", role: "EVS & Social Science", experience: "10 Years", image: "/images/faculty/jeeta-dsouza.jpg" },
    { id: 5, name: "Shakuntala", qualification: "TTC & BA", role: "Hindi Faculty", experience: "10 Years", image: "/images/faculty/shakuntala.jpg" },
    { id: 6, name: "Mohan", qualification: "Diploma", role: "Drawing Faculty", experience: "10 Years", image: "/images/faculty/mohan.jpg" },
    { id: 7, name: "Savitha M", qualification: "D.El.Ed, MA, K.TET", role: "Hindi Faculty", experience: "9 Years", image: "/images/faculty/savitha-m.jpg" },
    { id: 8, name: "Meena M", qualification: "BA, B.Ed", role: "Malayalam Faculty", experience: "7 Years", image: "/images/faculty/meena-m.jpg" },
    { id: 9, name: "Princy", qualification: "MA, B.Ed", role: "Social Science", experience: "5 Years", image: "/images/faculty/princy.jpg" },
    { id: 10, name: "Chaitra", qualification: "Diploma", role: "Physical Education", experience: "5 Years", image: "/images/faculty/chaitra.jpg" },
    { id: 11, name: "Akshatha V", qualification: "M.Com, B.Ed", role: "English & Maths", experience: "4 Years", image: "/images/faculty/akshatha-v.jpg" },
    { id: 12, name: "Divyashree", qualification: "B.Com, M.Com", role: "English, Maths, EVS", experience: "2 Years", image: "/images/faculty/divyashree.jpg" },
    { id: 13, name: "Chaithra", qualification: "B.Com", role: "L/KG Faculty", experience: "2 Years" },
    { id: 14, name: "Jeetha Mariya", qualification: "B.Sc, B.Ed", role: "Biology Faculty", experience: "1 Year", image: "/images/faculty/jeetha-mariya.jpg" },
    { id: 15, name: "Anna Maria D'Souza", qualification: "B.Sc, M.Sc", role: "Maths Faculty", experience: "1 Year", image: "/images/faculty/anna-maria.jpg" },
    { id: 16, name: "Vinool Priya M", qualification: "B.Sc, B.Ed", role: "Science & Computer", experience: "1 Year", image: "/images/faculty/vinool-priya.jpg" },
    { id: 17, name: "Yashwitha", qualification: "BA, B.Ed", role: "Hindi & Computer", experience: "1 Year", image: "/images/faculty/yashwitha.jpg" },
    { id: 18, name: "Nischitha D", qualification: "BA, B.Ed", role: "Kannada Faculty", experience: "1 Year", image: "/images/faculty/nischitha-d.jpg" },
    { id: 19, name: "Kadeejath Afnaz", qualification: "NTTC", role: "KG Section", experience: "1 Year", image: "/images/faculty/kadeejath-afnaz.jpg" },
    { id: 20, name: "Saraswati", qualification: "Qualification", role: "Faculty", experience: "Experience", image: "/images/faculty/saraswati.jpg" },
];

const FacultyCard = ({ teacher }: { teacher: Teacher }) => (
    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/40 flex flex-col h-full">
        <div className="aspect-[3/4] bg-muted relative overflow-hidden">
            {teacher.image ? (
                <Image
                    src={getImagePath(teacher.image)}
                    alt={teacher.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-secondary/5 text-muted-foreground p-4 text-center">
                    <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                        <span className="text-2xl font-serif font-bold text-secondary">
                            {teacher.name.charAt(0)}
                        </span>
                    </div>
                </div>
            )}
            {/* Overlay gradient on hover */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5 text-center flex-grow flex flex-col justify-between">
            <div>
                <h3 className="font-serif font-bold text-lg text-primary mb-2 line-clamp-1 group-hover:text-secondary transition-colors">
                    {teacher.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider mb-3">
                    {teacher.role}
                </span>
            </div>
            <div className="text-xs text-muted-foreground pt-3 border-t border-border/40 mt-2">
                <p className="font-medium text-foreground/80 mb-0.5">{teacher.qualification}</p>
                <p className="opacity-70">{teacher.experience} Exp</p>
            </div>
        </div>
    </div>
);

export default function FacultyPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                {/* Background Image Layer */}
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src={getImagePath('/images/hero/slide-1.jpg')}
                        alt="Faculty Hero"
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
                        Our Team
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                        Meet Our Faculty
                    </h1>
                    <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8" />
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        Dedicated educators committed to nurturing every child's potential through excellence in teaching.
                    </p>
                </motion.div>
            </section>

            <section className="py-24 container px-4 mx-auto flex-grow space-y-24">

                {/* Leadership Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">School Leadership</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full opacity-60" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                        {/* Centering logic for few items: use flex for wrapper or just justify-center in grid parent if applicable, but grid is rigid. 
                            For exactly 2 items on standard views, a centralized flex might be better, but grid is consistent. 
                            Let's use a centralized flex container for just these two if convenient, OR just grid. 
                            Grid is safer for responsiveness. We can center the grid content if it's not full? 
                            Let's use flexbox for this row to center the 2 cards.
                        */}
                        <div className="col-span-full flex flex-wrap justify-center gap-8">
                            {leadership.map((leader) => (
                                <div key={leader.id} className="w-full sm:w-[300px]">
                                    <FacultyCard teacher={leader} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Regular Faculty Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Educators</h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full opacity-60" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                        {faculty.map((teacher) => (
                            <FacultyCard key={teacher.id} teacher={teacher} />
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}
