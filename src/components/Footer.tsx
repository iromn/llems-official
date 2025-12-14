import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { getImagePath } from "@/lib/paths";

export default function Footer() {
    return (
        <footer className="bg-[#1a0508] text-white pt-20 pb-10 border-t-4 border-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative h-14 w-14 bg-white/10 rounded-full p-2">
                                <Image
                                    src={getImagePath("/logo_transparent_v2.webp")}
                                    alt="Little Lilli Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-xl font-bold leading-tight text-white">
                                    Little Lilli
                                </span>
                                <span className="text-sm text-white/60">English Medium School</span>
                            </div>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            Empowering young minds with holistic education since 1988. We believe in nurturing character alongside academic excellence.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="https://www.facebook.com/LITTLELILLIKSD/" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-all">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.instagram.com/littlelillischoolksd?igsh=bHhsbGJlNDRyeTU5" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-all">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="https://youtube.com/@littlelillischool?si=QXvbWGYhOLt7zvsY" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-all">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Academics", href: "/academics" },
                                { name: "Admissions", href: "/admissions" },
                                { name: "Faculty", href: "/faculty" },
                                { name: "Contact", href: "/contact" },
                                { name: "Mandatory Disclosure", href: "/mandatory-disclosure" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/70 hover:text-secondary hover:pl-2 transition-all flex items-center gap-2">
                                        <ArrowRight className="h-3 w-3 text-secondary/50" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-secondary">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-white/70">
                                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                <span>
                                    Little Lilli English Medium School,<br />
                                    Kumbla, Kasaragod,<br />
                                    Kerala, India - 671321
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-white/70">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <a href="tel:04998215306" className="hover:text-white transition-colors">
                                    04998 215306
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-white/70">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <a href="mailto:LLSKSD@gmail.com" className="hover:text-white transition-colors">
                                    LLSKSD@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Map placeholder */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-secondary">Locate Us</h3>
                        <div className="bg-white/5 rounded-lg h-48 w-full border border-white/10 overflow-hidden">
                            <iframe
                                src="https://maps.google.com/maps?cid=5022091885320661106&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
                    <p>© {new Date().getFullYear()} Little Lilli English Medium School. All rights reserved.</p>
                    <div className="flex gap-6">
                        {/* <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
