"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Brain, 
    Cpu, 
    Coins, 
    Globe, 
    Users, 
    Award, 
    Zap, 
    FileText, 
    Building2, 
    Network, 
    TrendingUp, 
    Shield, 
    Layers, 
    ArrowRight,
    Workflow
} from "lucide-react";

type PillarId = "esgin-token" | "esg-in-platform" | "ai-platform" | "carbon-ecosystem" | "enterprise-solutions";

interface SubItem {
    name: string;
    description: string;
    icon: any;
}

interface PillarData {
    id: PillarId;
    title: string;
    shortDesc: string;
    longDesc: string;
    icon: any;
    accentColor: string;
    subItems: SubItem[];
}

const pillars: Record<PillarId, PillarData> = {
    "esgin-token": {
        id: "esgin-token",
        title: "ESGIN Token",
        shortDesc: "The core utility & economic layer of the ecosystem.",
        longDesc: "The ESGIN Token is the financial and operational engine of the entire ecosystem. It aligns incentives, governs platform participation, facilitates value exchange across carbon markets, and powers AI verification protocols.",
        icon: Shield,
        accentColor: "from-emerald-400 to-teal-400",
        subItems: [
            { name: "Incentive Layer", description: "Rewards active sustainability participation and accurate data validation.", icon: Award },
            { name: "Ecosystem Utility", description: "Settlement token for enterprise ESG tools and carbon asset transactions.", icon: Zap },
            { name: "Governance Model", description: "Enables decentralized decision-making regarding ecosystem rules.", icon: Network },
            { name: "Validation Staking", description: "Secures AI verification protocols and guarantees data integrity.", icon: Layers }
        ]
    },
    "esg-in-platform": {
        id: "esg-in-platform",
        title: "ESG-in Platform",
        shortDesc: "Decentralized portal for active citizen engagement.",
        longDesc: "The frontend portal connecting individual contributors to real-world climate campaigns. It translates micro-actions into verifiable environmental impact data.",
        icon: Globe,
        accentColor: "from-teal-400 to-emerald-400",
        subItems: [
            { name: "Climate Actions", description: "Real-world individual and group sustainability campaigns.", icon: Zap },
            { name: "Community Challenges", description: "Gamified community-driven environmental activities.", icon: Users },
            { name: "Verified Rewards", description: "Point-to-token rewards for validated environmental actions.", icon: Award },
            { name: "Citizen Participation", description: "Inclusive portal lowering barriers for global climate actions.", icon: Globe }
        ]
    },
    "ai-platform": {
        id: "ai-platform",
        title: "AI Platform",
        shortDesc: "Advanced verification and environmental intelligence.",
        longDesc: "Our AI engine automates environmental action verification, conducts predictive analysis on carbon offset validity, and extracts high-fidelity ESG intelligence.",
        icon: Brain,
        accentColor: "from-emerald-500 to-cyan-400",
        subItems: [
            { name: "AI Verification", description: "Computer-vision object validation of environmental claims.", icon: Cpu },
            { name: "AI-powered MRV", description: "Automated Measurement, Reporting, and Verification framework.", icon: Workflow },
            { name: "Environmental Intelligence", description: "Satellite and sensor-driven data interpretation algorithms.", icon: Brain },
            { name: "ESG Data Analytics", description: "Enterprise-grade dashboards tracking ESG metrics.", icon: TrendingUp }
        ]
    },
    "carbon-ecosystem": {
        id: "carbon-ecosystem",
        title: "Carbon Ecosystem",
        shortDesc: "Next-generation environmental asset market.",
        longDesc: "A transparent carbon asset infrastructure supporting fractional tokenization, transparent lifecycle tracking, and direct integration with international trading systems.",
        icon: Coins,
        accentColor: "from-cyan-400 to-teal-400",
        subItems: [
            { name: "Carbon Credits", description: "On-chain fractionalized and verified carbon offset tokens.", icon: Coins },
            { name: "ITMOs", description: "Internationally Transferred Mitigation Outcomes tracking.", icon: Network },
            { name: "Biochar Integration", description: "Carbon-sink validation for agricultural biochar projects.", icon: Layers },
            { name: "Carbon Asset Management", description: "Liquid markets for trading, retiring, and managing credits.", icon: TrendingUp }
        ]
    },
    "enterprise-solutions": {
        id: "enterprise-solutions",
        title: "Enterprise Solutions",
        shortDesc: "Compliance, transparency, and reporting tools.",
        longDesc: "Enterprise software suite built to streamline sustainability disclosure, manage supply-chain environmental impact, and facilitate public-private partnerships.",
        icon: Building2,
        accentColor: "from-teal-500 to-emerald-500",
        subItems: [
            { name: "ESG Reporting", description: "Automated standard-aligned disclosure preparation tools.", icon: FileText },
            { name: "Corporate ESG Programs", description: "Custom internal campaigns to incentivize workforce sustainability.", icon: Users },
            { name: "Government Collaboration", description: "Frameworks for public environmental project validation.", icon: Building2 },
            { name: "Sustainability Services", description: "Integration APIs for corporate environmental management systems.", icon: Workflow }
        ]
    }
};

export default function AIEcosystem() {
    const [selectedPillar, setSelectedPillar] = useState<PillarId>("esgin-token");
    const [hoveredPillar, setHoveredPillar] = useState<PillarId | null>(null);

    const activePillar = hoveredPillar || selectedPillar;
    const currentData = pillars[activePillar];

    return (
        <section id="ecosystem" className="py-28 bg-[#020d0b] relative overflow-hidden text-white border-t border-b border-emerald-950/40">
            {/* High-tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d1a_1px,transparent_1px),linear-gradient(to_bottom,#0c1d1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 font-mono tracking-widest text-xs uppercase inline-block mb-4">
                            Unified Infrastructure
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                            Where AI, Carbon Markets, and <br className="hidden md:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                                Climate Action Converge
                            </span>
                        </h2>
                        <p className="mt-6 text-emerald-100/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                            ESGIN unifies AI-powered environmental intelligence, carbon markets, enterprise solutions, and real-world climate action into one connected ecosystem powered by the ESGIN Token.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Interactive Spatial Graph Map (Left Column) */}
                    <div className="lg:col-span-6 flex justify-center items-center relative min-h-[460px] md:min-h-[520px]">
                        
                        {/* Connected SVG Lines container */}
                        <div className="absolute inset-0 w-full h-full hidden md:block pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
                                {/* Defs for gradients & shadow glows */}
                                <defs>
                                    <linearGradient id="grad-esg-in-platform" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2dd4bf" />
                                        <stop offset="100%" stopColor="#34d399" />
                                    </linearGradient>
                                    <linearGradient id="grad-ai-platform" x1="100%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#22d3ee" />
                                    </linearGradient>
                                    <linearGradient id="grad-carbon-ecosystem" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#22d3ee" />
                                        <stop offset="100%" stopColor="#2dd4bf" />
                                    </linearGradient>
                                    <linearGradient id="grad-enterprise-solutions" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#14b8a6" />
                                        <stop offset="100%" stopColor="#10b981" />
                                    </linearGradient>
                                </defs>

                                {/* ESG-in Platform Link */}
                                <g className="opacity-45">
                                    <path d="M 110 110 L 250 250" stroke="#1f2d29" strokeWidth="2" />
                                    <path 
                                        d="M 110 110 L 250 250" 
                                        stroke="url(#grad-esg-in-platform)" 
                                        strokeWidth={activePillar === "esg-in-platform" ? "3.5" : "1.5"}
                                        strokeDasharray={activePillar === "esg-in-platform" ? "8 6" : "none"} 
                                        className={activePillar === "esg-in-platform" ? "animate-[dash_12s_linear_infinite]" : ""}
                                    />
                                </g>

                                {/* AI Platform Link */}
                                <g className="opacity-45">
                                    <path d="M 390 110 L 250 250" stroke="#1f2d29" strokeWidth="2" />
                                    <path 
                                        d="M 390 110 L 250 250" 
                                        stroke="url(#grad-ai-platform)" 
                                        strokeWidth={activePillar === "ai-platform" ? "3.5" : "1.5"} 
                                        strokeDasharray={activePillar === "ai-platform" ? "8 6" : "none"}
                                        className={activePillar === "ai-platform" ? "animate-[dash_12s_linear_infinite]" : ""}
                                    />
                                </g>

                                {/* Carbon Ecosystem Link */}
                                <g className="opacity-45">
                                    <path d="M 110 390 L 250 250" stroke="#1f2d29" strokeWidth="2" />
                                    <path 
                                        d="M 110 390 L 250 250" 
                                        stroke="url(#grad-carbon-ecosystem)" 
                                        strokeWidth={activePillar === "carbon-ecosystem" ? "3.5" : "1.5"}
                                        strokeDasharray={activePillar === "carbon-ecosystem" ? "8 6" : "none"}
                                        className={activePillar === "carbon-ecosystem" ? "animate-[dash_12s_linear_infinite]" : ""}
                                    />
                                </g>

                                {/* Enterprise Solutions Link */}
                                <g className="opacity-45">
                                    <path d="M 390 390 L 250 250" stroke="#1f2d29" strokeWidth="2" />
                                    <path 
                                        d="M 390 390 L 250 250" 
                                        stroke="url(#grad-enterprise-solutions)" 
                                        strokeWidth={activePillar === "enterprise-solutions" ? "3.5" : "1.5"}
                                        strokeDasharray={activePillar === "enterprise-solutions" ? "8 6" : "none"}
                                        className={activePillar === "enterprise-solutions" ? "animate-[dash_12s_linear_infinite]" : ""}
                                    />
                                </g>
                            </svg>
                            
                            <style jsx>{`
                                @keyframes dash {
                                    to {
                                        stroke-dashoffset: -200;
                                    }
                                }
                            `}</style>
                        </div>

                        {/* Central Hub Node: ESGIN Token */}
                        <div className="absolute z-20 flex flex-col items-center justify-center">
                            <motion.button
                                onClick={() => setSelectedPillar("esgin-token")}
                                onMouseEnter={() => setHoveredPillar("esgin-token")}
                                onMouseLeave={() => setHoveredPillar(null)}
                                className={`w-28 h-28 rounded-full flex flex-col items-center justify-center relative transition-all duration-300 ${
                                    activePillar === "esgin-token" 
                                        ? "bg-emerald-950/90 border-2 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)] scale-110" 
                                        : "bg-emerald-950/70 border border-emerald-500/20 hover:border-emerald-400/50"
                                }`}
                            >
                                {/* Spinning Orbit Ring */}
                                <div className={`absolute -inset-3 rounded-full border border-dashed border-emerald-400/20 animate-[spin_20s_linear_infinite] ${
                                    activePillar === "esgin-token" ? "opacity-100 border-emerald-400/40" : "opacity-40"
                                }`} />
                                <div className={`absolute -inset-6 rounded-full border border-emerald-500/10 animate-[spin_40s_linear_infinite_reverse] ${
                                    activePillar === "esgin-token" ? "opacity-80" : "opacity-20"
                                }`} />

                                <Shield className={`w-7 h-7 mb-1 text-emerald-400 transition-transform ${
                                    activePillar === "esgin-token" ? "scale-110" : ""
                                }`} />
                                <span className="text-[10px] font-mono tracking-wider font-semibold text-emerald-400 uppercase">ESGIN</span>
                                <span className="text-[9px] text-emerald-200/50">Token</span>
                            </motion.button>
                        </div>

                        {/* Node 1: ESG-in Platform (Top Left) */}
                        <div className="absolute left-4 md:left-[45px] top-4 md:top-[45px] z-10">
                            <motion.button
                                onClick={() => setSelectedPillar("esg-in-platform")}
                                onMouseEnter={() => setHoveredPillar("esg-in-platform")}
                                onMouseLeave={() => setHoveredPillar(null)}
                                className={`p-5 rounded-2xl border text-left w-[170px] md:w-[190px] transition-all duration-300 backdrop-blur-md ${
                                    activePillar === "esg-in-platform"
                                        ? "bg-emerald-950/80 border-emerald-400 shadow-[0_0_20px_rgba(45,212,191,0.2)] scale-105"
                                        : "bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/10"
                                }`}
                            >
                                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                                    <Globe className="w-5 h-5 text-teal-400" />
                                </div>
                                <h4 className="text-sm font-semibold text-white">ESG-in Platform</h4>
                                <p className="text-[11px] text-emerald-100/50 mt-1 leading-relaxed hidden md:block">
                                    Citizen participation & rewards.
                                </p>
                            </motion.button>
                        </div>

                        {/* Node 2: AI Platform (Top Right) */}
                        <div className="absolute right-4 md:right-[45px] top-4 md:top-[45px] z-10">
                            <motion.button
                                onClick={() => setSelectedPillar("ai-platform")}
                                onMouseEnter={() => setHoveredPillar("ai-platform")}
                                onMouseLeave={() => setHoveredPillar(null)}
                                className={`p-5 rounded-2xl border text-left w-[170px] md:w-[190px] transition-all duration-300 backdrop-blur-md ${
                                    activePillar === "ai-platform"
                                        ? "bg-emerald-950/80 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] scale-105"
                                        : "bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/10"
                                }`}
                            >
                                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                                    <Brain className="w-5 h-5 text-emerald-400" />
                                </div>
                                <h4 className="text-sm font-semibold text-white">AI Platform</h4>
                                <p className="text-[11px] text-emerald-100/50 mt-1 leading-relaxed hidden md:block">
                                    Verification & data analytics.
                                </p>
                            </motion.button>
                        </div>

                        {/* Node 3: Carbon Ecosystem (Bottom Left) */}
                        <div className="absolute left-4 md:left-[45px] bottom-4 md:bottom-[45px] z-10">
                            <motion.button
                                onClick={() => setSelectedPillar("carbon-ecosystem")}
                                onMouseEnter={() => setHoveredPillar("carbon-ecosystem")}
                                onMouseLeave={() => setHoveredPillar(null)}
                                className={`p-5 rounded-2xl border text-left w-[170px] md:w-[190px] transition-all duration-300 backdrop-blur-md ${
                                    activePillar === "carbon-ecosystem"
                                        ? "bg-emerald-950/80 border-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] scale-105"
                                        : "bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/10"
                                }`}
                            >
                                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                                    <Coins className="w-5 h-5 text-cyan-400" />
                                </div>
                                <h4 className="text-sm font-semibold text-white">Carbon Ecosystem</h4>
                                <p className="text-[11px] text-emerald-100/50 mt-1 leading-relaxed hidden md:block">
                                    Credits, ITMOs, and Biochar.
                                </p>
                            </motion.button>
                        </div>

                        {/* Node 4: Enterprise Solutions (Bottom Right) */}
                        <div className="absolute right-4 md:right-[45px] bottom-4 md:bottom-[45px] z-10">
                            <motion.button
                                onClick={() => setSelectedPillar("enterprise-solutions")}
                                onMouseEnter={() => setHoveredPillar("enterprise-solutions")}
                                onMouseLeave={() => setHoveredPillar(null)}
                                className={`p-5 rounded-2xl border text-left w-[170px] md:w-[190px] transition-all duration-300 backdrop-blur-md ${
                                    activePillar === "enterprise-solutions"
                                        ? "bg-emerald-950/80 border-emerald-400 shadow-[0_0_20px_rgba(20,184,166,0.2)] scale-105"
                                        : "bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/10"
                                }`}
                            >
                                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                                    <Building2 className="w-5 h-5 text-teal-400" />
                                </div>
                                <h4 className="text-sm font-semibold text-white">Enterprise</h4>
                                <p className="text-[11px] text-emerald-100/50 mt-1 leading-relaxed hidden md:block">
                                    Compliance & corporate tools.
                                </p>
                            </motion.button>
                        </div>

                    </div>

                    {/* Interactive Information & Feature Details Panel (Right Column) */}
                    <div className="lg:col-span-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentData.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
                            >
                                {/* Glowing top border accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${currentData.accentColor}`} />

                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentData.accentColor} p-[1px]`}>
                                        <div className="w-full h-full rounded-[11px] bg-[#020d0b]/90 flex items-center justify-center">
                                            <currentData.icon className="w-6 h-6 text-emerald-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono text-emerald-400/80 uppercase tracking-wider">Ecosystem Component</span>
                                        <h3 className="text-2xl font-bold text-white mt-0.5">{currentData.title}</h3>
                                    </div>
                                </div>

                                <p className="text-emerald-100/80 text-base leading-relaxed mb-8">
                                    {currentData.longDesc}
                                </p>

                                <div className="border-t border-emerald-950/50 pt-8">
                                    <h4 className="text-xs font-mono tracking-widest text-emerald-400/70 uppercase mb-5">
                                        Core Capabilities
                                    </h4>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {currentData.subItems.map((sub, idx) => (
                                            <div 
                                                key={sub.name}
                                                className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 group"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-7 h-7 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform mt-0.5">
                                                        <sub.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <h5 className="text-sm font-semibold text-white">{sub.name}</h5>
                                                        <p className="text-[12px] text-emerald-100/60 leading-relaxed mt-1">
                                                            {sub.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Custom interaction CTA indicator */}
                                <div className="mt-8 pt-4 flex items-center justify-between text-xs text-emerald-500/50 font-mono">
                                    <span>* Select other nodes on the left graph to explore</span>
                                    <span className="flex items-center gap-1.5 text-emerald-400 group cursor-pointer hover:text-emerald-300 transition-colors" onClick={() => {
                                        // Auto rotate or select next
                                        const keys = Object.keys(pillars) as PillarId[];
                                        const nextIdx = (keys.indexOf(selectedPillar) + 1) % keys.length;
                                        setSelectedPillar(keys[nextIdx]);
                                    }}>
                                        Next Component <ArrowRight className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Bottom Ecosystem Statement Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-[#031d18]/40 to-cyan-950/10 border border-emerald-500/10 text-center max-w-4xl mx-auto backdrop-blur-md"
                >
                    <p className="text-sm md:text-base text-emerald-200/90 leading-relaxed font-medium">
                        <strong>ESGIN is not a single product.</strong> It is an AI-powered environmental infrastructure that connects climate action, carbon markets, enterprise ESG solutions, and digital assets into one unified ecosystem.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
