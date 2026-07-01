"use client";

import { motion } from "framer-motion";

export default function MarketGap() {
    return (
        <section id="market-gap" className="py-32 bg-[#020d0b] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header Section */}
                <div className="mb-24 max-w-4xl">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true }}
                        className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-4"
                    >
                        Market Gap & Solution
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
                    >
                        The End of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            Greenwashing.
                        </span>
                    </motion.h2>
                </div>

                {/* Minimalist Split Typography Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* The Problem Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="border-t border-red-500/20 pt-10 flex flex-col justify-between"
                    >
                        <div>
                            <span className="text-xs font-mono font-semibold tracking-wider text-red-500 uppercase block mb-6">
                                Legacy Supply Chain
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-snug">
                                The Black Box of ESG Claims.
                            </h3>
                            <p className="text-emerald-100/60 text-base md:text-lg leading-relaxed font-light">
                                Billions of dollars are committed to corporate sustainability, yet trust remains broken. Traditional frameworks rely on offline, manual, and easily manipulated paper trails. The lack of item-level tracing makes greenwashing a systemic risk, mixing virgin materials with undocumented offsets.
                            </p>
                        </div>
                        <div className="mt-12 text-sm font-mono text-red-500/70">
                            * Status: Unverifiable Paper Trials
                        </div>
                    </motion.div>

                    {/* The Solution Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="border-t border-emerald-500/20 pt-10 flex flex-col justify-between"
                    >
                        <div>
                            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase block mb-6">
                                ESGIN Protocol
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-snug">
                                The Glass Box of Traced Action.
                            </h3>
                            <p className="text-emerald-100/80 text-base md:text-lg leading-relaxed font-light">
                                We secure transparency by attaching a Proof of Action NFT directly to verified environmental shipments on-chain. Powered by distributed ledger technology and automated verification, trust is transformed from a marketing claim into a secure digital asset.
                            </p>
                        </div>
                        <div className="mt-12 text-sm font-mono text-emerald-400">
                            * Status: On-Chain & 100% Traceable
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
