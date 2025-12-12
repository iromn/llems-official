"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-16 text-center">
                <h1 className="font-serif text-4xl font-bold mb-4">Contact Us</h1>
                <p className="opacity-90">We&#39;d love to hear from you. Reach out to us for any queries.</p>
            </section>

            <div className="flex-grow container px-4 mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-card border border-border p-6 rounded-xl">
                                <MapPin className="h-8 w-8 text-secondary mb-4" />
                                <h3 className="font-bold mb-2">Our Address</h3>
                                <p className="text-muted-foreground text-sm">
                                    Little Lilli English Medium School,<br />
                                    Kumbla, Kasaragod,<br />
                                    Kerala, India - 671321
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6 rounded-xl">
                                <Phone className="h-8 w-8 text-secondary mb-4" />
                                <h3 className="font-bold mb-2">Phone</h3>
                                <p className="text-muted-foreground text-sm">
                                    +91 123 456 7890<br />
                                    +91 987 654 3210
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6 rounded-xl">
                                <Mail className="h-8 w-8 text-secondary mb-4" />
                                <h3 className="font-bold mb-2">Email</h3>
                                <p className="text-muted-foreground text-sm">
                                    info@littlelilli.edu.in<br />
                                    admissions@littlelilli.edu.in
                                </p>
                            </div>
                            <div className="bg-card border border-border p-6 rounded-xl">
                                <Clock className="h-8 w-8 text-secondary mb-4" />
                                <h3 className="font-bold mb-2">Office Hours</h3>
                                <p className="text-muted-foreground text-sm">
                                    Mon - Fri: 9:00 AM - 4:00 PM<br />
                                    Sat: 9:00 AM - 1:00 PM
                                </p>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[300px] w-full bg-muted">
                            {/* Placeholder for Google Maps - using generic location for Kasaragod */}
                            <iframe
                                src="https://maps.google.com/maps?q=Little+Lilli+English+Medium+School&ll=12.5912382,74.9804479&z=16&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Quick Contact Form */}
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-lg h-fit">
                        <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" className="w-full px-3 py-2 border rounded-md" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subject</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="General Enquiry" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea rows={4} className="w-full px-3 py-2 border rounded-md resize-none" placeholder="How can we help you?" />
                            </div>
                            <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-md hover:bg-primary/90 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
