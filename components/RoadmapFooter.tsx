"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Disc as Discord, Github, CheckCircle2, Zap, Rocket, Cuboid as Cube, Send, BookOpen, Youtube, Instagram, Facebook } from "lucide-react";

const phases = [
    {
        phase: "PHASE 1",
        title: "Validation",
        status: "COMPLETED",
        icon: CheckCircle2,
        accentColor: "emerald",
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
        accentColor: "cyan",
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
        accentColor: "purple",
        items: [
            "Global B2B Data Marketplace",
            "DAO Governance Transition"
        ],
    },
];

// Helper to get dynamic styles based on whether a phase is selected
function getCardStyle(isSelected: boolean, accentColor: string) {
    if (isSelected) {
        return "z-10 scale-100 md:scale-110 border-cyan-400 bg-cyan-950/40 shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)] ring-1 ring-cyan-400/50";
    }
    if (accentColor === "emerald") {
        return "opacity-60 grayscale-[0.5] scale-95 border-emerald-500/20 bg-emerald-900/10 cursor-pointer hover:opacity-80 hover:scale-[0.97]";
    }
    if (accentColor === "purple") {
        return "opacity-60 scale-95 border-purple-400/30 border-dashed bg-purple-900/10 cursor-pointer hover:opacity-80 hover:scale-[0.97]";
    }
    return "opacity-60 scale-95 border-white/10 bg-white/5 cursor-pointer hover:opacity-80 hover:scale-[0.97]";
}

function getBadgeStyle(isSelected: boolean, accentColor: string) {
    if (isSelected) {
        return "bg-cyan-400 text-[#051a14] border-cyan-400 animate-pulse font-bold";
    }
    if (accentColor === "emerald") return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    if (accentColor === "purple") return "bg-purple-500/10 text-purple-300 border-purple-500/20";
    return "bg-white/10 text-white/40 border-white/20";
}

// Reorder phases so the selected one is in the center (index 1)
function getOrderedPhases(selectedIndex: number) {
    const ordered = [...phases];
    if (selectedIndex === 0) {
        // Move first to center: [1, 0, 2] → display order
        return [ordered[1], ordered[0], ordered[2]];
    }
    if (selectedIndex === 2) {
        // Move last to center: [0, 2, 1]
        return [ordered[0], ordered[2], ordered[1]];
    }
    // Already center
    return ordered;
}

export default function RoadmapFooter() {
    const [selectedIndex, setSelectedIndex] = useState(1); // Default: Phase 2

    const orderedPhases = getOrderedPhases(selectedIndex);

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
                    {orderedPhases.map((phase) => {
                        const originalIndex = phases.indexOf(phase);
                        const isSelected = originalIndex === selectedIndex;

                        return (
                            <motion.div
                                key={phase.phase}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, layout: { type: "spring", stiffness: 300, damping: 30 } }}
                                className={`relative p-8 rounded-2xl border backdrop-blur-sm flex flex-col h-full justify-start transition-all duration-500 ${getCardStyle(isSelected, phase.accentColor)}`}
                                onClick={() => setSelectedIndex(originalIndex)}
                            >
                                {/* Pulsing Border for Selected */}
                                {isSelected && (
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-50 pointer-events-none"
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                )}

                                <div className="flex items-center justify-between mb-8">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500
                                        ${isSelected ? "bg-cyan-400 text-[#051a14]" : "bg-white/5 text-white/50"}`}
                                    >
                                        <phase.icon className="w-5 h-5" />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border tracking-wide transition-all duration-500 ${getBadgeStyle(isSelected, phase.accentColor)}`}>
                                        {phase.status}
                                    </span>
                                </div>

                                <h3 className={`text-2xl font-bold text-white mb-2 transition-all duration-500 ${isSelected ? "text-3xl drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" : ""}`}>
                                    {phase.title}
                                </h3>
                                <div className={`text-xs font-mono mb-6 uppercase tracking-wider transition-colors duration-500 ${isSelected ? "text-cyan-400" : "text-white/30"}`}>
                                    {phase.phase}
                                </div>

                                <ul className="space-y-4">
                                    {phase.items.map((item, i) => {
                                        const isString = typeof item === 'string';
                                        const text = isString ? item : item.text;
                                        const isHighlight = !isString && item.highlight;

                                        return (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500
                                                    ${isSelected ? "bg-cyan-400" : "bg-white/20"}
                                                `} />
                                                <span className={`text-sm leading-relaxed transition-colors duration-500
                                                    ${isHighlight && isSelected ? "text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 drop-shadow-[0_0_10px_rgba(252,211,77,0.5)]" :
                                                        isSelected ? "text-emerald-50" : "text-white/50"}
                                                `}>
                                                    {text}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#020d0b] py-16 border-t border-white/5 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">ESGIN</h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                The Trust Protocol for ESG. <br />
                                Digitizing global actions into assets.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Resources</h4>
                            <ul className="space-y-4 text-sm text-white/50">
                                <li><a href="/ESGIN_Whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Whitepaper</a></li>
                                <li><a href="/esgin_businesspaper.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Businesspaper</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Connect</h4>
                            <div className="flex gap-4">
                                <a href="https://medium.com/@esgintoken" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all">
                                    <BookOpen className="w-5 h-5" />
                                </a>
                                <a href="https://x.com/esgintoken" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://t.me/ESGINToken" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all">
                                    <Send className="w-5 h-5" />
                                </a>
                                <a href="https://github.com/esgintoken/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.tiktok.com/@esgin.global" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all" title="TikTok">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.2 2.27 2.05 3.73 2.45v3.85c-1.39-.12-2.74-.63-3.88-1.48-.99-.74-1.77-1.74-2.28-2.88v7.92c-.08 2.22-.96 4.34-2.5 5.89-1.63 1.63-3.92 2.53-6.28 2.5-2.28.02-4.48-.82-6.09-2.35C.79 17.84-.04 15.65 0 13.37c-.04-2.35.84-4.63 2.44-6.31 1.66-1.67 3.98-2.55 6.32-2.43.05 1.34-.02 2.68-.02 4.02-1.36-.14-2.73.27-3.72 1.22-.96.95-1.46 2.3-1.35 3.65.08 1.34.78 2.57 1.86 3.32 1.05.74 2.37.99 3.6.67 1.2-.31 2.22-1.15 2.76-2.28.43-.88.66-1.85.66-2.83V0z"/>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@esginglobal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all" title="YouTube">
                                    <Youtube className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/esgin.official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all" title="Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://www.facebook.com/esginglobal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500 hover:text-white transition-all" title="Facebook">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
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
            </footer>
        </section>
    );
}
