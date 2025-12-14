import Link from "next/link";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm border-b border-primary-foreground/10">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2">
                {/* Contact Info */}
                <div className="flex items-center gap-4 md:gap-6">
                    <a href="tel:04998215306" className="flex items-center gap-2 hover:text-secondary transition-colors">
                        <Phone className="h-3 w-3" />
                        <span>04998 215306</span>
                    </a>
                    <a href="mailto:LLSKSD@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                        <Mail className="h-3 w-3" />
                        <span>LLSKSD@gmail.com</span>
                    </a>
                </div>

                {/* Social Links & Utility */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <Link href="https://www.facebook.com/LITTLELILLIKSD/" className="hover:text-secondary transition-colors" aria-label="Facebook">
                            <Facebook className="h-3.5 w-3.5" />
                        </Link>
                        <Link href="https://www.instagram.com/littlelillischoolksd?igsh=bHhsbGJlNDRyeTU5" className="hover:text-secondary transition-colors" aria-label="Instagram">
                            <Instagram className="h-3.5 w-3.5" />
                        </Link>
                        <Link href="https://youtube.com/@littlelillischool?si=QXvbWGYhOLt7zvsY" className="hover:text-secondary transition-colors" aria-label="YouTube">
                            <Youtube className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                    <div className="w-px h-3 bg-primary-foreground/20 hidden md:block"></div>
                    <Link href="/admissions" className="font-semibold text-secondary hover:text-white transition-colors">
                        Admissions Open
                    </Link>
                </div>
            </div>
        </div>
    );
}
