"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
    {
        name: "Alex Kim",
        role: "CEO & Founder",
        bio: "Ex-Goldman Sachs. 15 years in Fintech & Sustainability.",
        image: "", // Placeholder
    },
    {
        name: "Sarah Lee",
        role: "CTO",
        bio: "Blockchain Architect. Lead Dev at Ethereum Consortium.",
        image: "", // Placeholder
    },
    {
        name: "Dr. Budi Santoso",
        role: "Head of Operations (Indonesia)",
        bio: "20 years in Waste Management Infrastructure.",
        image: "", // Placeholder
    },
];

const partners = [
    "Ministry of Environment (Ind)",
    "Seoul City Gov",
    "Samsung C&T",
    "Shinhan Bank",
    "Polygon Labs",
    "Chainlink",
];

export default function TeamPartners() {
    return (
        <section id="team" className="py-24 bg-[#020d0b] relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Team Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                            The Builders
                        </span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Team & Leadership
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
                            >
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-900/50 flex items-center justify-center border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
                                    {/* Placeholder for Image */}
                                    <span className="text-2xl font-bold text-emerald-500">
                                        {member.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-emerald-400 text-sm font-medium mb-4">{member.role}</p>
                                <p className="text-emerald-100/60 text-sm mb-6">{member.bio}</p>

                                <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                    <span className="text-xs">View Profile</span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Partners Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-cyan-400 font-mono tracking-widest text-sm uppercase">
                            Trusted By
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-white tracking-tight">
                            Strategic Partners
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-xl md:text-2xl font-bold text-white/30 hover:text-white transition-colors cursor-default"
                            >
                                {partner}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
