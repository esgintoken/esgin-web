"use client";

import { motion } from "framer-motion";

const tokenDist = [
    { label: "Reward Pool", value: 45, color: "bg-emerald-500" },
    { label: "ESG Bank Pool", value: 15, color: "bg-teal-500" },
    { label: "Team & Founders", value: 15, color: "bg-cyan-500" },
    { label: "Liquidity & Exchange", value: 15, color: "bg-emerald-600" },
    { label: "Partners & Advisors", value: 10, color: "bg-teal-600" },
];

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="py-32 bg-[#020d0b] relative overflow-hidden border-t border-emerald-950/20">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left: Token Definition & Philosophy */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-4">
                            AI-Native Utility Token
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            What is the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                                ESGIN Token?
                            </span>
                        </h2>
                        <p className="mt-6 text-emerald-100/60 text-lg leading-relaxed font-light">
                            ESGIN is the utility token powering our environmental data layer. Designed to align global corporate compliance demands with real-world climate participation, it guarantees verification reliability, system transparency, and long-term ecosystem integrity.
                        </p>
                    </motion.div>

                    {/* Typography-first key principles (no icons) */}
                    <div className="space-y-10 pt-4">
                        <div className="border-l-2 border-emerald-500/30 pl-6">
                            <h4 className="text-lg font-semibold text-white">Verifiable ESG Action</h4>
                            <p className="text-emerald-100/60 text-sm leading-relaxed mt-1 font-light">
                                Directly backed by real-world, AI-verified environmental outcomes and traceable shipments.
                            </p>
                        </div>
                        <div className="border-l-2 border-emerald-500/30 pl-6">
                            <h4 className="text-lg font-semibold text-white">Structural Separation</h4>
                            <p className="text-emerald-100/60 text-sm leading-relaxed mt-1 font-light">
                                Maintains separation between validation layer reliability and value exchange tokenomics.
                            </p>
                        </div>
                        <div className="border-l-2 border-emerald-500/30 pl-6">
                            <h4 className="text-lg font-semibold text-white">Stability-Oriented Protocol</h4>
                            <p className="text-emerald-100/60 text-sm leading-relaxed mt-1 font-light">
                                Built to reward continuous, high-fidelity corporate compliance integration over speculative volatility.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Token Distribution Chart (Clean, Minimal) */}
                <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="mb-8">
                        <span className="text-xs font-mono tracking-wider text-emerald-400 uppercase block mb-1">Economic Distribution</span>
                        <h3 className="text-2xl font-bold text-white">Token Supply Allocation</h3>
                    </div>

                    <div className="space-y-6">
                        {tokenDist.map((item, index) => (
                            <div key={item.label} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-emerald-100/75 font-light">{item.label}</span>
                                    <span className="text-emerald-400 font-mono font-medium">{item.value}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.value}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                        className={`h-full rounded-full ${item.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/10 text-center">
                        <p className="text-xs text-emerald-500/50 uppercase tracking-widest mb-1 font-mono">Total Capitalized Supply</p>
                        <p className="text-3xl font-mono font-bold text-white">
                            1,000,000,000 <span className="text-sm font-normal text-emerald-400 uppercase tracking-wider">ESGIN</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
