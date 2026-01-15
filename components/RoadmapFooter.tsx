"use client";

import { motion } from "framer-motion";
import { Twitter, Disc as Discord, Github, CheckCircle2, Zap, Rocket, Cuboid as Cube } from "lucide-react";

const phases = [
    {
        phase: "PHASE 1",
        title: "Validation",
        status: "COMPLETED",
        icon: CheckCircle2,
        style: "opacity-60 grayscale-[0.5] scale-95 border-emerald-500/20 bg-emerald-900/10",
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        items: [
            "ESG-in App Launch",
            "Pilot Tests Complete",
            "Seed Funding Secured"
        ],
    },
    {
        phase: "PHASE 2",
        title: "Scale-Up & TGE",
        status: "ACTIVE & MAIN FOCUS",
        icon: Zap,
        style: "z-10 scale-100 md:scale-110 border-cyan-400 bg-cyan-950/40 shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)] ring-1 ring-cyan-400/50",
        badge: "bg-cyan-400 text-[#051a14] border-cyan-400 animate-pulse font-bold",
        isHero: true,
        items: [
            { text: "🚀 TGE & Exchange Listing (Target: Q1 2026)", highlight: true },
            "Massive Expansion of ESG Bank Nodes",
            "NFT Data Accumulation"
        ],
    },
    {
        phase: "PHASE 3",
        title: "Assetization",
        status: "FUTURE",
        icon: Cube,
        style: "opacity-80 scale-95 border-purple-400/30 border-dashed bg-purple-900/10",
        badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        items: [
            "Global B2B Data Marketplace",
            "DAO Governance Transition"
        ],
    },
];

export default function RoadmapFooter() {
    return (
        <section className="bg-[#020d0b] pt-32 pb-0 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none" />

            {/* Roadmap Content */}
            <div className="container mx-auto px-6 mb-48 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        Roadmap
                    </h2>
                    <p className="text-emerald-100/50 font-light">
                        Our journey to digitize environmental action.
                    </p>
                </div>

                {/* Center Stage Horizontal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center max-w-6xl mx-auto">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border backdrop-blur-sm flex flex-col h-full justify-start ${phase.style}`}
                        >
                            {/* Pulsing Border for Hero */}
                            {phase.isHero && (
                                <div className="absolute inset-0 rounded-2xl border border-cyan-400 animate-pulse opacity-50 pointer-events-none" />
                            )}

                            <div className="flex items-center justify-between mb-8">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                            ${phase.isHero ? "bg-cyan-400 text-[#051a14]" : "bg-white/5 text-white/50"}`}
                                >
                                    <phase.icon className="w-5 h-5" />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border tracking-wide ${phase.badge}`}>
                                    {phase.status}
                                </span>
                            </div>

                            <h3 className={`text-2xl font-bold text-white mb-2 ${phase.isHero ? "text-3xl drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" : ""}`}>
                                {phase.title}
                            </h3>
                            <div className={`text-xs font-mono mb-6 uppercase tracking-wider ${phase.isHero ? "text-cyan-400" : "text-white/30"}`}>
                                {phase.phase}
                            </div>

                            <ul className="space-y-4">
                                {phase.items.map((item, i) => {
                                    const isString = typeof item === 'string';
                                    const text = isString ? item : item.text;
                                    const isHighlight = !isString && item.highlight;

                                    return (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 
                                        ${phase.isHero ? "bg-cyan-400" : "bg-white/20"}
                                    `} />
                                            <span className={`text-sm leading-relaxed 
                                        ${isHighlight ? "text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.5)]" :
                                                    phase.isHero ? "text-emerald-50" : "text-white/50"}
                                    `}>
                                                {text}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#020d0b] py-16 border-t border-white/5 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-2xl font-bold text-white mb-6">ESGIN</h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                The Trust Protocol for ESG. <br />
                                Digitizing global actions into assets.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Ecosystem</h4>
                            <ul className="space-y-4 text-sm text-white/50">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">App Download</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Tokenomics</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Governance</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Resources</h4>
                            <ul className="space-y-4 text-sm text-white/50">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Whitepaper</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Media Kit</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Connect</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all">
                                    <Discord className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/30 text-xs">
                            © 2026 ESGIN Project. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-white/30 text-xs">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
