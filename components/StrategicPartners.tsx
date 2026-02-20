"use client";

import { motion } from "framer-motion";

const partners = [
    "UI NETWORKS",
    "C&NET",
    "HOOXI PARTNERS",
];

export default function StrategicPartners() {
    return (
        <section className="py-24 bg-[#020d0b] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-cyan-400 font-mono tracking-widest text-sm uppercase">
                            Trusted By
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-white tracking-tight">
                            Strategic Partners
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-bold text-white/30 hover:text-white transition-colors cursor-default"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
