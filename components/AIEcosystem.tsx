"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, ShieldCheck, Scale } from "lucide-react";

const features = [
    {
        title: "AI-Driven Verification",
        description: "Validation consistency & Data accuracy through AI-powered object recognition.",
        icon: Bot,
        color: "bg-emerald-500",
        delay: 0.1,
    },
    {
        title: "Off-Chain Evaluation",
        description: "Predictable token supply & Non-inflationary interaction dynamics.",
        icon: Scale,
        color: "bg-cyan-500",
        delay: 0.2,
    },
    {
        title: "ESG Data Analysis",
        description: "Environmental data evaluation & Pattern analysis for data integrity.",
        icon: Cpu,
        color: "bg-blue-500",
        delay: 0.3,
    },
    {
        title: "Stability Model",
        description: "Systemic predictability & Long-term ecosystem coherence.",
        icon: ShieldCheck,
        color: "bg-purple-500",
        delay: 0.4,
    },
];

export default function AIEcosystem() {
    return (
        <section className="py-24 bg-[#020d0b] relative overflow-hidden text-white">
            {/* Background Circuit Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald-500 font-mono tracking-widest text-sm uppercase">
                        System Architecture
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                        AI-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ecosystem</span>
                    </h2>
                    <p className="mt-4 text-emerald-100/60 max-w-2xl mx-auto text-lg">
                        Structural separation of validation and reward layers ensures validation reliability and data integrity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-900/10 transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.color} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-emerald-50">{feature.title}</h3>
                            <p className="text-emerald-100/60 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
