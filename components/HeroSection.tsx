"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
    ArrowRight, 
    ExternalLink, 
    Shield, 
    Brain, 
    Cpu, 
    Coins, 
    Globe, 
    Building2, 
    Users, 
    Network, 
    Flame,
    Workflow
} from "lucide-react";

interface NodeData {
    id: string;
    label: string;
    description: string;
    icon: any;
    x: number; // percentage from left
    y: number; // percentage from top
    color: string;
}

const nodes: NodeData[] = [
    { id: "ai-platform", label: "AI Platform", description: "Environmental activity verification & intelligence", icon: Brain, x: 80, y: 22, color: "#10b981" },
    { id: "ai-mrv", label: "AI-powered MRV", description: "Automated Measurement, Reporting & Verification", icon: Workflow, x: 90, y: 50, color: "#06b6d4" },
    { id: "carbon-credits", label: "Carbon Credits", description: "On-chain tokenized & validated offsets", icon: Coins, x: 80, y: 78, color: "#06b6d4" },
    { id: "itmo", label: "ITMO", description: "Internationally Transferred Mitigation Outcomes", icon: Globe, x: 50, y: 92, color: "#14b8a6" },
    { id: "biochar", label: "Biochar", description: "Agricultural carbon sink validation", icon: Flame, x: 20, y: 78, color: "#10b981" },
    { id: "esg-in-platform", label: "ESG-in Platform", description: "Live citizen activity portal in Indonesia", icon: Globe, x: 10, y: 50, color: "#2dd4bf" },
    { id: "enterprise-esg", label: "Enterprise ESG", description: "Disclosure & supply chain auditing", icon: Building2, x: 20, y: 22, color: "#10b981" },
    { id: "env-intelligence", label: "Environmental Intel", description: "Satellite & sensor analysis", icon: Cpu, x: 50, y: 8, color: "#14b8a6" },
    { id: "community", label: "Community Networks", description: "Localized green initiatives & tasks", icon: Users, x: 32, y: 40, color: "#2dd4bf" }
];

export default function HeroSection() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const handleExploreScroll = () => {
        document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden pt-28 pb-10 bg-[#020d0b]">
            
            {/* Ambient Background Glow and Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#052019_1px,transparent_1px),linear-gradient(to_bottom,#052019_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 -z-10" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
                
                {/* Left Column: Visionary Copy & Action CTAs */}
                <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
                    
                    {/* Brand Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Powered by AI • Connected by ESGIN
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
                    >
                        Where AI, Carbon Markets, and <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            Climate Action Converge.
                        </span>
                    </motion.h1>

                    {/* Supporting Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-emerald-100/70 max-w-xl leading-relaxed font-light"
                    >
                        ESGIN builds the AI-powered environmental infrastructure connecting climate action, artificial intelligence, environmental intelligence, AI-powered MRV, carbon markets, biochar, enterprise ESG solutions, tokenized environmental assets, and digital infrastructure through one unified ecosystem powered by the ESGIN Token.
                    </motion.p>

                    {/* Call-to-Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <button 
                            onClick={handleExploreScroll}
                            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-[#020d0b] font-bold hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] cursor-pointer"
                        >
                            Explore the Ecosystem
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <a 
                            href="https://id.esg-in.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
                        >
                            Launch ESG-in Platform
                            <ExternalLink className="w-4 h-4 text-emerald-400" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Premium Interactive Ecosystem Visualization */}
                <div className="lg:col-span-6 flex items-center justify-center relative min-h-[460px] md:min-h-[500px]">
                    <div className="relative w-full h-[450px] max-w-[500px]">
                        
                        {/* Connected SVG Lines */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                {nodes.map((node) => {
                                    const isHovered = hoveredNode === node.id;
                                    return (
                                        <g key={node.id} className="opacity-40">
                                            <line 
                                                x1="50" 
                                                y1="50" 
                                                x2={node.x} 
                                                y2={node.y} 
                                                stroke={isHovered ? node.color : "#143a32"} 
                                                strokeWidth={isHovered ? "0.8" : "0.3"} 
                                                strokeDasharray={isHovered ? "1.5 1" : "none"}
                                                className={isHovered ? "animate-[dash_8s_linear_infinite]" : ""}
                                            />
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>

                        {/* Central Hub Node: ESGIN Token */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="relative w-24 h-24 rounded-full bg-emerald-950/90 border-2 border-emerald-400 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                <div className="absolute -inset-2.5 rounded-full border border-dashed border-emerald-400/25 animate-[spin_25s_linear_infinite]" />
                                <Shield className="w-6 h-6 text-emerald-400 mb-0.5" />
                                <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400">ESGIN</span>
                                <span className="text-[9px] text-emerald-300/60">Token</span>
                            </div>
                        </div>

                        {/* Peripheral Orbit Nodes */}
                        {nodes.map((node) => {
                            const isHovered = hoveredNode === node.id;
                            const Icon = node.icon;
                            
                            return (
                                <div 
                                    key={node.id}
                                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                                >
                                    <div 
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                                            isHovered 
                                                ? "bg-emerald-900 border-2 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-110" 
                                                : "bg-[#031d18]/80 border border-emerald-500/25 hover:border-emerald-400/60"
                                        }`}
                                    >
                                        <Icon className="w-5 h-5 text-emerald-400" />

                                        {/* Hover Tooltip / Detail Box */}
                                        {isHovered && (
                                            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl bg-emerald-950/95 border border-emerald-400/50 shadow-2xl backdrop-blur-md pointer-events-none z-30">
                                                <h4 className="text-xs font-semibold text-white">{node.label}</h4>
                                                <p className="text-[10px] text-emerald-100/60 leading-normal mt-1">{node.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>

            {/* Bottom Credibility Strip (Trust Indicators) */}
            <div className="border-t border-emerald-950/40 bg-[#020a08]/70 py-10 mt-12 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-emerald-950/40">
                        
                        <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2 lg:pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">01 / Operational Node</span>
                            <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">Indonesia Operations</h4>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2 lg:pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">02 / Corporate Entity</span>
                            <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">PT ESGIN Global Partners</h4>
                        </div>

                        <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2 lg:pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">03 / Core Technology</span>
                            <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">AI Environmental Infrastructure</h4>
                        </div>

                        <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2 lg:pt-2">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">04 / Product Suite</span>
                            <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">Carbon & Enterprise ESG</h4>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes dash {
                    to {
                        stroke-dashoffset: -20;
                    }
                }
            `}</style>
        </section>
    );
}
