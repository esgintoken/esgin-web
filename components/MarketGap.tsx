"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Zap, Link2Off } from "lucide-react";
import { useState } from "react";

export default function MarketGap() {
    return (
        <section id="market-gap" className="pt-12 pb-32 bg-[#020d0b] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        The End of <span className="text-red-500 line-through decoration-2 decoration-red-500/50">Greenwashing</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative items-center">

                    {/* Visual Connector (Desktop Only) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#020d0b] border border-white/10 rounded-full items-center justify-center z-20">
                        <Zap className="w-6 h-6 text-white/50" />
                    </div>

                    {/* CARD 1: THE PROBLEM (One - Chaos/Glitch) */}
                    <ProblemCard />

                    {/* CARD 2: THE SOLUTION (Two - Order/Glass) */}
                    <SolutionCard />

                </div>
            </div>
        </section>
    );
}

function ProblemCard() {
    const [isHovered, setIsHovered] = useState(false);

    // Glitch animation variants
    const glitchVariants = {
        idle: { x: 0, opacity: 1 },
        hover: {
            x: [0, -1, 1, 0], // Reduced movement (was -2, 2)
            opacity: [1, 0.9, 1], // Reduced opacity flicker
            transition: {
                duration: 0.2, // Slower flicker (was 0.1 implicit?)
                repeat: Infinity,
                repeatType: "mirror" as const
            }
        }
    };

    return (
        <motion.div
            className="group relative h-full min-h-[400px] p-8 md:p-12 border-2 border-dashed border-red-500/30 bg-[#0a0505] overflow-hidden"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ borderColor: "rgba(239, 68, 68, 0.6)" }}
        >
            {/* TV Static Noise Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                    <motion.div
                        variants={glitchVariants}
                        animate={isHovered ? "hover" : "idle"}
                        className="w-16 h-16 bg-red-500/10 flex items-center justify-center rounded-none border border-red-500/50"
                    >
                        <Link2Off className="w-8 h-8 text-red-500" />
                    </motion.div>
                    <div className="font-mono text-sm md:text-base font-bold text-red-500 uppercase tracking-widest animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                        System Failure
                    </div>
                </div>

                <motion.h3
                    variants={glitchVariants}
                    animate={isHovered ? "hover" : "idle"}
                    className="text-2xl md:text-3xl font-bold text-red-500 mb-6 font-mono"
                >
                    Legacy Supply Chain: <br />
                    <span className="bg-red-500/20 px-1">The Black Box</span>
                </motion.h3>

                <p className="text-red-100/60 leading-relaxed flex-grow font-mono text-sm">
                    Billions spent on ESG, but zero proof. Companies rely on unverifiable paper trails, leading to <strong className="text-red-400">Greenwashing Risks</strong> and mixed virgin plastics.
                </p>

                {/* Glitch Overlay Text */}
                {isHovered && (
                    <motion.div
                        className="absolute bottom-8 right-8 text-7xl md:text-8xl text-red-500/20 font-black pointer-events-none select-none z-0"
                        animate={{ opacity: [0, 1, 0.5, 1], x: [0, 5, -5, 0] }}
                        transition={{ duration: 0.1, repeat: Infinity }}
                    >
                        ERROR
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

function SolutionCard() {
    return (
        <motion.div
            className="group relative h-full min-h-[400px] p-8 md:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/10 to-cyan-900/10 backdrop-blur-xl overflow-hidden"
            whileHover={{
                borderColor: "rgba(52, 211, 153, 0.8)",
                boxShadow: "0 0 40px rgba(52, 211, 153, 0.15)"
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Smooth Glow Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none group-hover:bg-emerald-400/30 transition-all duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                    <motion.div
                        className="w-16 h-16 bg-emerald-500/10 flex items-center justify-center rounded-2xl border border-emerald-500/30"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <ShieldCheck className="w-8 h-8 text-emerald-400" />
                    </motion.div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wide">
                        Verified
                    </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    ESGIN Protocol: <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">The Glass Box</span>
                </h3>

                <p className="text-emerald-100/70 leading-relaxed flex-grow text-lg">
                    We attach a <strong className="text-white">Proof of Action NFT</strong> to every shipment. 100% Traceable on-chain data turns 'Trust' into a verifiable digital asset.
                </p>

                {/* Floating Particles */}
                <motion.div
                    className="absolute bottom-8 right-8"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-400 blur-[2px]" />
                </motion.div>
            </div>
        </motion.div>
    );
}
