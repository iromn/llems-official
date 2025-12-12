"use client";

import { Quote, Target, Lightbulb } from "lucide-react";
import { getImagePath } from "@/lib/paths";

export default function AboutPage() {
    const leadership = [
        {
            name: "Dr. Vishnudas Ramaswamy",
            role: "Leadership Team",
            qualifications: "B.Tech, M.Tech & Ph.D (IIT Madras)",
            bio: "Senior Research Scientist at Bosch Rexroth with 10+ years in R&D. Gold Medalist from NIT Allahabad. Also a passionate filmmaker with 5 short films to his credit.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Dr. Vaibhavi K R",
            role: "Leadership Team",
            qualifications: "MBBS & M.S (Otorhinolaryngology)",
            bio: "Senior Resident at Vivekananda Medical College. An enthusiastic doctor, counselor, and entrepreneur aiming to bring health and wellness to the community.",
            image: getImagePath("/images/staff/dr-vaibhavi.jpg")
        },
        {
            name: "Mr. Prahlad K R",
            role: "Leadership Team",
            qualifications: "B.Tech, M.Tech & M.E (Manipal)",
            bio: "Specialist in VLSI Design and Control Systems. Published multiple technical papers and has a strong background in academic excellence and athletics.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-primary text-primary-foreground">
                <div className="absolute inset-0 bg-black/40 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${getImagePath('/images/facilities/kids-play-area.jpg')})` }}
                    />
                </div>
                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Our School</h1>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>
            </section>

            {/* School Profile */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">35 Years of Educational Excellence</h2>
                            <div className="prose prose-lg text-muted-foreground">
                                <p>
                                    Founded in the year 1988, Little Lilli English Medium School is one of the premier institutions in Kumbla, Kasaragod, Kerala. Under the management of a private unaided unit, we conduct classes from Nursery to Plus Two. The school is governed by the CBSE board.
                                </p>
                                <p className="mt-4">
                                    The management and infrastructure of the school are above par. The building is packed with brilliant classrooms, activity rooms, playgrounds, labs, and a library. Our faculty comprises skilled and trained teachers who render the best learning to the students through various advanced teaching techniques.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-muted">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${getImagePath('/images/facilities/auditorium.jpg')})` }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl hidden md:block">
                                <p className="font-serif text-3xl font-bold">1988</p>
                                <p className="text-sm font-medium">Established</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-muted/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                                <li>To provide best platform for our kids, both stimulating and lively learning environment.</li>
                                <li>To become compassionate and competent citizens of the world.</li>
                                <li>To enable learner-centered education in a support atmosphere.</li>
                                <li>To develop values and knowledge for lifelong learning.</li>
                            </ul>
                        </div>

                        {/* Vision */}
                        <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                                <li>To attain Excellence in Education.</li>
                                <li>To promote and encourage lifelong learning, creativity, and innovation mindsets.</li>
                                <li>To provide best education that matches world-class standards.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Guided by a team of visionary leaders, researchers, and medical professionals dedicated to empowering the next generation.
                        </p>
                    </div>

                    {/* Chairperson Message */}
                    <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Quote className="h-32 w-32" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">Chairperson&#39;s Message</h3>
                            <p className="text-lg md:text-xl italic mb-6">
                                &quot;As a result of the &#39;knowledge economy&#39;, a new era is beginning to dawn. Even as we are ready to surf the waves of change, we must stay grounded in our core values. Our school takes pride in being a place that teaches not just the most up-to-date information, but also the fundamental principles of humanity.&quot;
                            </p>
                            <p className="font-bold text-secondary text-lg">Dr. Vishnudas Ramaswamy</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadership.map((person, index) => (
                            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                                <div className="h-64 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${person.image})` }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif text-xl font-bold mb-1 text-primary">{person.name}</h3>
                                    <p className="text-sm font-bold text-secondary mb-2">{person.qualifications}</p>
                                    <p className="text-sm text-muted-foreground">{person.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
