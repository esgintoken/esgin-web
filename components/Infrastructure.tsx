"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Globe, ArrowUpRight } from "lucide-react";

const locations = [
    {
        country: "Indonesia",
        title: "The Main Engine",
        description: "Transforming 16,000 Government Trash Banks. Injecting liquidity to restart the stalled engine.",
        stats: "16k Sites",
        icon: Globe,
        color: "from-emerald-400 to-cyan-400",
        delay: 0.2,
        highlight: true,
    },
    {
        country: "Korea",
        title: "High-Tech Sorting",
        description: "Partnered with Local Governments & Corps. Implementing advanced data sorting infrastructure.",
        stats: "Gov Partners",
        icon: Building2,
        color: "from-blue-400 to-indigo-400",
        delay: 0.3,
        highlight: false,
    },
    {
        country: "Cambodia",
        title: "Edjai Network",
        description: "Integrated with local Edjai network for grassroots collection and data verification.",
        stats: "Network Integrated",
        icon: MapPin,
        color: "from-orange-400 to-amber-400",
        delay: 0.4,
        highlight: false,
    },
];

export default function Infrastructure() {
    return (
        <section id="infrastructure" className="py-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#020d0b] opacity-80 -z-20" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#051a14] to-[#051a14] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                        Global Infrastructure
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Turning Infrastructure Into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Data Mines
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.country}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: loc.delay }}
                            className={`group relative p-8 rounded-2xl border transition-all duration-500 ${loc.highlight
                                ? "bg-emerald-900/20 border-emerald-500/50 hover:bg-emerald-900/30"
                                : "bg-white/5 border-white/10 hover:bg-white/10"
                                }`}
                        >
                            {/* Country Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${loc.color} bg-opacity-10`}>
                                        <loc.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{loc.country}</h3>
                                </div>
                                {loc.highlight && (
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                                        MAIN FOCUS
                                    </span>
                                )}
                            </div>

                            <h4 className="text-lg font-semibold text-emerald-100 mb-2 group-hover:text-white transition-colors">
                                {loc.title}
                            </h4>
                            <p className="text-emerald-100/60 text-sm leading-relaxed mb-6">
                                {loc.description}
                            </p>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${loc.color}`}>
                                    {loc.stats}
                                </span>
                                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${loc.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
