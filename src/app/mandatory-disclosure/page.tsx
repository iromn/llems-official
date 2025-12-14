"use client";

import { FileText, Download, Users, Building2 } from "lucide-react";
import { getImagePath } from "@/lib/paths";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MandatoryDisclosurePage() {
    const generalInfo = [
        { label: "Name of the School", value: "Little Lilli English Medium School" },
        { label: "Affiliation No.", value: "931326" },
        { label: "School Code", value: "76313" },
        { label: "Complete Address", value: "Kumbla, Kasaragod, Kerala, 671321" },
        { label: "Principal Name & Qualification", value: "Dr. Vishnudas Ramaswamy, M.Tech, Ph.D" },
        { label: "School Email ID", value: "LLSKSD@gmail.com" },
        { label: "Contact Details", value: "04998 215306" }
    ];

    const documents = [
        { label: "Affiliation Letter", link: "#" },
        { label: "Society Registration Certificate", link: "#" },
        { label: "No Objection Certificate (NOC)", link: "#" },
        { label: "Recognition Certificate", link: "#" },
        { label: "Building Safety Certificate", link: "#" },
        { label: "Fire Safety Certificate", link: "#" },
        { label: "Water & Health Certificate", link: "#" },
        { label: "Fee Structure", link: "#" },
        { label: "Annual Academic Calendar", link: "#" },
        { label: "School Management Committee", link: "#" },
        { label: "Parents Teachers Association", link: "#" },
        { label: "Last Three Year Result", link: "#" }
    ];

    const staff = [
        { label: "Principal", value: "1" },
        { label: "Total No. of Teachers", value: "45" },
        { label: "PGT", value: "10" },
        { label: "TGT", value: "15" },
        { label: "PRT", value: "20" },
        { label: "Teachers Section Ratio", value: "1:1.5" },
        { label: "Details of Special Educator", value: "Mrs. Sarah Thomas, M.Ed (Spl. Ed)" },
        { label: "Details of Wellness Teacher", value: "Mrs. Anjali P, MA (Psychology)" }
    ];

    const infrastructure = [
        { label: "Total Campus Area", value: "4 Acres" },
        { label: "Total Built-up Area", value: "2500 Sq. Mtrs" },
        { label: "Play Area", value: "8000 Sq. Mtrs" },
        { label: "No. of Class Rooms", value: "40" },
        { label: "No. of Labs", value: "5 (Physics, Chem, Bio, Comp, Math)" },
        { label: "Internet Facility", value: "Yes (High Speed)" },
        { label: "Number of Girls Toilets", value: "20" },
        { label: "Number of Boys Toilets", value: "20" }
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
                {/* Background Image Layer */}
                {/* Background Image Layer */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src={getImagePath('/images/facilities/library.jpg')}
                        alt="Mandatory Disclosure Hero"
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
                        Official Information
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                        Mandatory Disclosure
                    </h1>
                    <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8" />
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        Official information as per CBSE requirements for transparency and compliance.
                    </p>
                </motion.div>
            </section>

            <section className="py-24">
                <div className="container px-4 md:px-6 mx-auto max-w-5xl space-y-16">

                    {/* General Information */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <FileText className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary">General Information</h2>
                                <div className="h-1 w-16 bg-secondary/40 rounded-full mt-1" />
                            </div>
                        </div>
                        <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                            <table className="w-full text-sm md:text-base">
                                <tbody>
                                    {generalInfo.map((item, index) => (
                                        <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                                            <td className="p-5 font-bold text-foreground/70 w-2/5">{item.label}</td>
                                            <td className="p-5 font-medium text-foreground">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Documents */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <Download className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary">Documents & Information</h2>
                                <div className="h-1 w-16 bg-secondary/40 rounded-full mt-1" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {documents.map((doc, index) => (
                                <a
                                    key={index}
                                    href={doc.link}
                                    className="flex items-center justify-between p-5 bg-white border border-border rounded-xl hover:border-secondary hover:shadow-lg transition-all group"
                                >
                                    <span className="font-semibold text-foreground group-hover:text-secondary transition-colors">{doc.label}</span>
                                    <div className="bg-secondary/10 p-2.5 rounded-full group-hover:bg-secondary group-hover:text-white transition-all">
                                        <Download className="h-4 w-4" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Staff */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <Users className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary">Staff Details</h2>
                                <div className="h-1 w-16 bg-secondary/40 rounded-full mt-1" />
                            </div>
                        </div>
                        <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                            <table className="w-full text-sm md:text-base">
                                <tbody>
                                    {staff.map((item, index) => (
                                        <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                                            <td className="p-5 font-bold text-foreground/70 w-2/5">{item.label}</td>
                                            <td className="p-5 font-medium text-foreground">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Infrastructure */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <Building2 className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary">Infrastructure Details</h2>
                                <div className="h-1 w-16 bg-secondary/40 rounded-full mt-1" />
                            </div>
                        </div>
                        <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                            <table className="w-full text-sm md:text-base">
                                <tbody>
                                    {infrastructure.map((item, index) => (
                                        <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                                            <td className="p-5 font-bold text-foreground/70 w-2/5">{item.label}</td>
                                            <td className="p-5 font-medium text-foreground">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
