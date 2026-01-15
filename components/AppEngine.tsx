"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, Scan, Share2, TrendingUp, CheckCircle, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const steps = [
    {
        id: 1,
        title: "Snap Action",
        description: "AI verifies material & location instantly.",
        icon: Camera,
        position: "left", // Layout position relative to phone
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
    {
        id: 2,
        title: "Mint Data",
        description: "Transmuted into an immutable NFT record.",
        icon: Scan,
        position: "right",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
    },
    {
        id: 3,
        title: "Global Valuation",
        description: "Viral sharing drives token value.",
        icon: TrendingUp,
        position: "left",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
    },
];

export default function AppEngine() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section id="engine" className="py-32 bg-[#020d0b] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        The Data Engine
                    </h2>
                    <p className="text-xl text-emerald-100/60 font-light tracking-wide">
                        Your Pride, <span className="text-white font-medium">Global Proof.</span>
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* LEFT COLUMN (Step 1 & 3) */}
                    <div className="flex-1 flex flex-col gap-24 lg:text-right items-center lg:items-end">
                        <StepItem step={steps[0]} isActive={activeStep === 1} onHover={() => setActiveStep(1)} align="right" number={1} />
                        <StepItem step={steps[2]} isActive={activeStep === 3} onHover={() => setActiveStep(3)} align="right" number={3} />
                    </div>

                    {/* CENTER PHONE */}
                    <div className="relative w-[300px] h-[600px] flex-shrink-0">
                        {/* Phone Frame */}
                        <div className="absolute inset-0 border-[8px] border-[#1a1a1a] rounded-[3rem] bg-[#051a14] shadow-2xl overflow-hidden z-20">
                            {/* Dynamic Screen Content */}
                            <AnimatePresence mode="wait">
                                {/* SCREEN 1: SNAP */}
                                {activeStep === 1 && (
                                    <motion.div
                                        key="screen-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 flex flex-col"
                                    >
                                        {/* Camera Viewfinder Overlay */}
                                        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                                            <div className="flex justify-between text-white/70 text-xs font-mono">
                                                <span>REC ●</span>
                                                <span>[AI SCANNING]</span>
                                            </div>
                                            <div className="w-full h-64 border border-white/30 rounded-lg relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400"></div>
                                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400"></div>
                                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400"></div>
                                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400"></div>

                                                {/* Scanning Bar */}
                                                <motion.div
                                                    className="w-full h-[2px] bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                                                    animate={{ y: [0, 250, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                />
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-white rounded-full" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Background Image (Using waste from hero for continuity) */}
                                        <div className="absolute inset-0 bg-stone-800">
                                            <Image
                                                src="/images/hero-waste.png"
                                                alt="Waste"
                                                fill
                                                className="object-cover opacity-60 grayscale"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {/* SCREEN 2: MINT */}
                                {activeStep === 2 && (
                                    <motion.div
                                        key="screen-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 bg-[#051a14] flex flex-col items-center justify-center p-6"
                                    >
                                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                                            {/* Grid Background */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                className="relative z-10"
                                            >
                                                <Image
                                                    src="/images/hero-hologram.png"
                                                    alt="NFT"
                                                    width={200}
                                                    height={200}
                                                    className="object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                                                />
                                            </motion.div>

                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="mt-8 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-lg"
                                            >
                                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                                                    <CheckCircle className="w-3 h-3" />
                                                    MINTED: #0002847
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* SCREEN 3: SHARE */}
                                {activeStep === 3 && (
                                    <motion.div
                                        key="screen-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 bg-gradient-to-br from-[#2e0233] to-[#051a14] p-6 flex flex-col"
                                    >
                                        {/* Social Feed UI Helper */}
                                        <div className="mt-12 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
                                                <div className="flex flex-col">
                                                    <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                                                    <div className="h-2 w-12 bg-white/10 rounded" />
                                                </div>
                                            </div>
                                            <div className="h-32 bg-black/20 rounded-lg mb-3 flex items-center justify-center">
                                                <Smartphone className="text-white/20" />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="h-4 w-4 rounded-full bg-pink-500/50" />
                                                <div className="h-4 w-4 rounded-full bg-white/10" />
                                            </div>
                                        </div>

                                        {/* Value Notification */}
                                        <motion.div
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3, type: "spring" }}
                                            className="mt-6 bg-emerald-500 rounded-xl p-4 shadow-lg shadow-emerald-500/20"
                                        >
                                            <div className="flex items-center justify-between text-white font-bold">
                                                <span>Token Value</span>
                                                <span>+12.5%</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-emerald-100 text-xs mt-1">
                                                <TrendingUp className="w-3 h-3" />
                                                <span>Impact Verified</span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-30" />
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Step 2) */}
                    <div className="flex-1 flex flex-col gap-24 lg:text-left items-center lg:items-start">
                        {/* Spacer for alignment to match visual balance if needed, or just center the single item */}
                        <div className="hidden lg:block h-24" />
                        <StepItem step={steps[1]} isActive={activeStep === 2} onHover={() => setActiveStep(2)} align="left" number={2} />
                    </div>

                </div>
            </div>
        </section>
    );
}

function StepItem({ step, isActive, onHover, align, number }: { step: any, isActive: boolean, onHover: () => void, align: "left" | "right", number: number }) {
    return (
        <div
            className={`cursor-pointer group relative max-w-sm flex flex-col ${align === "right" ? "lg:items-end items-center" : "lg:items-start items-center"} text-center ${align === "right" ? "lg:text-right" : "lg:text-left"}`}
            onMouseEnter={onHover}
            onClick={onHover} // For mobile interaction
        >
            {/* Number Badge */}
            <div className={`text-4xl font-black mb-4 transition-colors duration-300 ${isActive ? step.color : "text-[#7B7B7B]"}`}>
                0{number}
            </div>

            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                {step.title}
            </h3>
            <p className={`text-lg transition-colors duration-300 ${isActive ? step.color : "text-emerald-100/20 group-hover:text-emerald-100/40"}`}>
                {step.description}
            </p>

            {/* Active Indicator Line */}
            <motion.div
                className={`h-0.5 bg-current mt-4 ${step.color}`}
                initial={{ width: 0 }}
                animate={{ width: isActive ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
            />
        </div>
    )
}
