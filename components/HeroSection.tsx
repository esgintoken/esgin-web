"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, FileText } from "lucide-react";

export default function HeroSection() {
    const [showHologram, setShowHologram] = useState(false);

    // Auto-looping logic for the cross-fade animation
    useEffect(() => {
        const interval = setInterval(() => {
            setShowHologram((prev) => !prev);
        }, 4000); // Toggle every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden pt-28 pb-10">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#051a14] via-[#092e24] to-[#051a14] -z-10" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                {/* Left: Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Live in Korea & Indonesia
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Trash is Bonus. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Action is Asset.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg lg:text-xl text-emerald-100/70 max-w-xl font-light"
                    >
                        Global corporations need proof, not just plastic.
                        <strong className="text-white font-medium"> ESGIN</strong> transforms your daily climate actions into verifiable NFTs and sells them to the world.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                            Explore Ecosystem
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                            <FileText className="w-4 h-4" />
                            Read Whitepaper
                        </button>
                    </motion.div>
                </div>

                {/* Right: Visual Loop */}
                <div className="hidden lg:flex relative items-center justify-center h-[600px] w-full">
                    <div className="relative w-full h-full max-w-[600px] max-h-[600px]">
                        {/* Real Waste Image (Base) */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ opacity: showHologram ? 0 : 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            {/* Mask Image: Radial gradient to soften edges */}
                            <div
                                className="relative w-full h-full"
                                style={{
                                    maskImage: "radial-gradient(circle at center, black 40%, transparent 70%)",
                                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 70%)"
                                }}
                            >
                                <Image
                                    src="/images/hero-waste.png"
                                    alt="Physical Plastic Waste"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Hologram Image (Overlay) */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ opacity: showHologram ? 1 : 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            {/* Mix Blend Mode: Screen to make black background transparent */}
                            <div
                                className="relative w-full h-full mix-blend-screen mix-blend-plus-lighter"
                                style={{
                                    maskImage: "radial-gradient(circle at center, black 40%, transparent 70%)",
                                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 70%)"
                                }}
                            >
                                <Image
                                    src="/images/hero-hologram.png"
                                    alt="Digital Hologram Data"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Glow Effect behind the main visual for depth */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
                    </div>

                    {/* Caption for the transition */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
                        <span className={cn("transition-colors duration-1000", !showHologram ? "text-emerald-400 font-bold" : "text-emerald-900")}>
                            Raw Material
                        </span>
                        <div className="w-12 h-[1px] bg-emerald-900 overflow-hidden relative">
                            <motion.div
                                className="absolute inset-0 bg-emerald-400"
                                animate={{ x: showHologram ? "100%" : "-100%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                        <span className={cn("transition-colors duration-1000", showHologram ? "text-cyan-400 font-bold glow" : "text-emerald-900")}>
                            Digital Asset
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
