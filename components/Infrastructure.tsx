"use client";

import { motion } from "framer-motion";

const locations = [
    {
        country: "Indonesia",
        title: "The Main Engine",
        description: "Transforming 16,000 government trash banks into verified nodes, injecting liquidity and data capture directly into our on-chain tracking registry.",
        stats: "16,000+ Nodes",
        detail: "Primary Operations"
    },
    {
        country: "South Korea",
        title: "Data Optimization",
        description: "Partnering with local municipal waste collection programs and corporate logistics systems to deploy high-resolution data sorting frameworks.",
        stats: "Government Partners",
        detail: "Tech Deployment"
    },
    {
        country: "Cambodia",
        title: "Edjai Integration",
        description: "Connecting grassroots collectors and informal networks through local partnerships to log waste origins and verify micro-action data.",
        stats: "Grassroots Network",
        detail: "Scale Initiative"
    }
];

export default function Infrastructure() {
    return (
        <section id="infrastructure" className="py-32 bg-[#020d0b] relative overflow-hidden border-t border-emerald-950/20">
            {/* Soft Ambient Light */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="max-w-4xl mb-24">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        viewport={{ once: true }}
                        className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-4"
                    >
                        Global Infrastructure
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
                    >
                        Turning Environmental Action <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                            Into Digital Assets.
                        </span>
                    </motion.h2>
                </div>

                {/* Minimal, Typography-First Locations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.country}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col justify-between border-t border-emerald-500/10 pt-8 group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                                        {loc.detail}
                                    </span>
                                    <span className="text-sm font-semibold text-white">
                                        {loc.country}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                    {loc.title}
                                </h3>
                                <p className="text-emerald-100/60 text-sm leading-relaxed font-light mb-12">
                                    {loc.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tracking-tight font-mono">
                                    {loc.stats}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
