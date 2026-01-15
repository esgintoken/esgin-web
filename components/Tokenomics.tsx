"use client";

import { motion } from "framer-motion";
import { ArrowRight, PieChart, Coins, RefreshCw, TrendingUp } from "lucide-react";

const tokenDist = [
    { label: "Ecosystem Rewards", value: 50, color: "bg-emerald-500" },
    { label: "Liquidity Pool", value: 20, color: "bg-cyan-500" },
    { label: "Team & Advisors", value: 15, color: "bg-blue-500" },
    { label: "Partners & Treasury", value: 15, color: "bg-purple-500" },
];

export default function Tokenomics() {
    return (
        <section id="tokenomics" className="py-24 bg-[#020d0b] relative overflow-hidden">

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Business Model (The Cycle) */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                            Real Yield
                        </span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Backed by <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                Real Revenue
                            </span>
                        </h2>
                        <p className="mt-6 text-emerald-100/60 text-lg leading-relaxed">
                            Unlike speculative tokens, ESGIN is backed by the physical sales of r-PET materials and B2B ESG Data (NFTs). Profits are used to buy back and burn tokens.
                        </p>
                    </motion.div>

                    <div className="mt-12 space-y-6">
                        <CycleStep
                            icon={Coins}
                            title="Revenue Generation"
                            desc="Sales from recycled materials & Data APIs."
                            delay={0.2}
                        />
                        <CycleStep
                            icon={RefreshCw}
                            title="Buyback & Burn"
                            desc="Profits automatically buy ESGIN from market."
                            delay={0.4}
                        />
                        <CycleStep
                            icon={TrendingUp}
                            title="Value Appreciation"
                            desc="Reduced supply drives long-term token value."
                            delay={0.6}
                        />
                    </div>
                </div>

                {/* Right: Token Distribution Chart */}
                <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <PieChart className="w-6 h-6 text-emerald-400" />
                        Token Distribution
                    </h3>

                    <div className="space-y-6">
                        {tokenDist.map((item, index) => (
                            <div key={item.label} className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-gray-300">{item.label}</span>
                                    <span className="text-emerald-400">{item.value}%</span>
                                </div>
                                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.value}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                        className={`h-full rounded-full ${item.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-6 rounded-xl bg-emerald-900/20 border border-emerald-500/30 text-center">
                        <p className="text-sm text-emerald-200 uppercase tracking-widest mb-1">Total Supply</p>
                        <p className="text-3xl font-mono font-bold text-white">1,000,000,000 <span className="text-base text-emerald-500">ESGIN</span></p>
                    </div>
                </div>

            </div>
        </section>
    );
}

function CycleStep({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
        >
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white">{title}</h4>
                <p className="text-emerald-100/50 text-sm mt-1">{desc}</p>
            </div>
        </motion.div>
    )
}
