"use client";

import { FileText, Download, Users } from "lucide-react";

export default function MandatoryDisclosurePage() {
    const generalInfo = [
        { label: "Name of the School", value: "Little Lilli English Medium School" },
        { label: "Affiliation No.", value: "931326" },
        { label: "School Code", value: "76313" },
        { label: "Complete Address", value: "Kumbla, Kasaragod, Kerala, 671321" },
        { label: "Principal Name & Qualification", value: "Dr. Vishnudas Ramaswamy, M.Tech, Ph.D" },
        { label: "School Email ID", value: "info@littlelilli.edu.in" },
        { label: "Contact Details", value: "04998 213456" }
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
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary text-primary-foreground py-16 text-center">
                <div className="container px-4 mx-auto">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Mandatory Disclosure</h1>
                    <p className="opacity-90 max-w-2xl mx-auto">
                        Information for the public as per the CBSE requirement.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">

                    {/* General Information */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
                            <FileText className="text-secondary" /> General Information
                        </h2>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <table className="w-full text-sm md:text-base">
                                <tbody>
                                    {generalInfo.map((item, index) => (
                                        <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-semibold text-muted-foreground w-1/3 md:w-1/4">{item.label}</td>
                                            <td className="p-4 font-medium">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
                            <Download className="text-secondary" /> Documents & Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {documents.map((doc, index) => (
                                <a
                                    key={index}
                                    href={doc.link}
                                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                                >
                                    <span className="font-medium group-hover:text-primary transition-colors">{doc.label}</span>
                                    <div className="bg-secondary/10 p-2 rounded-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                        <Download className="h-4 w-4" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Staff */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
                            <Users className="text-secondary" /> Staff Details
                        </h2>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <table className="w-full text-sm md:text-base">
                                <tbody>
                                    {staff.map((item, index) => (
                                        <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-semibold text-muted-foreground w-1/3 md:w-1/4">{item.label}</td>
                                            <td className="p-4 font-medium">{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Infrastructure */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
                            <FileText className="text-secondary" /> Infrastructure Details
                        </h2>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <table className="w-full text-sm md:text-base">
                                <tbody>
                                    {infrastructure.map((item, index) => (
                                        <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                                            <td className="p-4 font-semibold text-muted-foreground w-1/3 md:w-1/4">{item.label}</td>
                                            <td className="p-4 font-medium">{item.value}</td>
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
