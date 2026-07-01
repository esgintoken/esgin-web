"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, ShieldCheck, Landmark } from "lucide-react";

export default function ExploreEcosystem() {
    const primaryPoints = [
        "Climate Actions",
        "Community Challenges",
        "Reward System",
        "AI-powered Verification",
        "Community Participation",
        "Growing Indonesia Ecosystem"
    ];

    const secondaryPoints = [
        "Company Overview",
        "Vision & Mission",
        "AI Technologies & MRV",
        "Carbon & ITMO Initiatives",
        "Enterprise ESG Solutions",
        "Roadmap & Partnerships"
    ];

    return (
        <section className="py-28 bg-[#020d0b] relative overflow-hidden text-white border-b border-emerald-950/30">
            {/* Tech Background Grid details */}
            <div className="absolute inset-0 bg-[radial-gradient(#052e24_1.2px,transparent_1.2px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
            
            {/* Glowing Accent Orb between and behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 inline-block mb-4">
                            Operational Integrity
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">ESGIN Ecosystem</span>
                        </h2>
                        <p className="mt-4 text-emerald-100/60 text-base md:text-lg">
                            Discover the products, platform, and organization that power the ESGIN ecosystem.
                        </p>
                    </motion.div>
                </div>

                {/* 70/30 Connected Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto relative">
                    
                    {/* SVG Connector Line bridging the two cards */}
                    <div className="absolute top-1/2 left-2/3 right-1/4 h-[2px] bg-gradient-to-r from-emerald-500/30 to-teal-500/5 hidden lg:block pointer-events-none z-0" />

                    {/* Primary Card: ESG-in Platform (Indonesia) - Takes 8 cols (~70%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-8 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all duration-500 z-10"
                    >
                        {/* Interactive border glow */}
                        <div className="absolute -inset-px bg-gradient-to-br from-emerald-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                        <div>
                            {/* Card Badge & Tech Line */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase font-semibold">Live Operational Platform</span>
                                </div>
                                <ShieldCheck className="w-5 h-5 text-emerald-400/60" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                ESG-in Platform <span className="text-emerald-400/50 font-normal text-lg md:text-xl">(Indonesia)</span>
                            </h3>
                            
                            <p className="text-base text-emerald-100/80 leading-relaxed mb-8 max-w-2xl">
                                <strong>Experience the ESGIN ecosystem in action.</strong> The ESG-in Platform is the live operational platform of the ESGIN ecosystem, currently available in Indonesia. Users can participate in real environmental activities while earning rewards through AI-powered verification.
                            </p>

                            {/* Core Capabilities Checklist Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {primaryPoints.map((point) => (
                                    <div key={point} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span className="text-sm text-emerald-100/70">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA section */}
                        <div className="border-t border-emerald-950/40 pt-8 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <p className="text-xs font-mono text-emerald-500/70">
                                * Actual platform where the ESGIN ecosystem is operating today.
                            </p>
                            <a 
                                href="https://id.esg-in.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-[#020d0b] font-semibold text-sm hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-[1.02]"
                            >
                                Launch ESG-in Platform
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Secondary Card: Official ESG-in Website - Takes 4 cols (~30%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all duration-500 z-10"
                    >
                        {/* Interactive border glow */}
                        <div className="absolute -inset-px bg-gradient-to-br from-teal-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                        <div>
                            {/* Card Badge */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xs font-mono tracking-wider text-emerald-400/80 uppercase font-semibold">Corporate Portal</span>
                                <Landmark className="w-5 h-5 text-emerald-400/60" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                Official ESG-in Website
                            </h3>

                            <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                                <strong>Discover the organization behind the ecosystem.</strong> The ESG-in Website is the official website of <strong>PT ESGIN Global Partners</strong>. It introduces the complete ESGIN project, vision, and technologies.
                            </p>

                            {/* Core Capabilities Checklist Grid */}
                            <div className="space-y-3.5 mb-8">
                                {secondaryPoints.map((point) => (
                                    <div key={point} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                        <span className="text-xs text-emerald-100/60">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA section */}
                        <div className="border-t border-emerald-950/40 pt-8 mt-4 flex flex-col gap-4">
                            <p className="text-[11px] font-mono text-emerald-500/60">
                                PT ESGIN Global Partners foundation.
                            </p>
                            <a 
                                href="https://esg-in.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                            >
                                Visit Official Website
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
