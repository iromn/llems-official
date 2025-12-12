import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-12 pb-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/20">
                                <Image
                                    src="/logo.webp"
                                    alt="Little Lilli School Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-xl font-bold leading-tight">
                                    Little Lilli
                                </span>
                                <span className="text-xs uppercase tracking-wider text-primary-foreground/80">
                                    English Medium School
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-primary-foreground/80 pr-4">
                            Providing excellence in education since 1988. Nurturing young minds to become compassionate and competent global citizens.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4 text-secondary">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
                            <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                            <li><Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
                            <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
                            <li><Link href="/mandatory-disclosure" className="hover:text-white transition-colors">CBSE Mandatory Disclosure</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4 text-secondary">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-primary-foreground/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                                <span>Kumbla, Kasaragod,<br />Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                                <span>info@littlelilli.edu.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
                    <p>© {new Date().getFullYear()} Little Lilli English Medium School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
