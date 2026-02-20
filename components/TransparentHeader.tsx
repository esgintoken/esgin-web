"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Market Gap", href: "#market-gap" },
    { name: "Engine", href: "#engine" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Team", href: "#team" },
];

export default function TransparentHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#020d0b]/80 backdrop-blur-md border-b border-emerald-900/30 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/images/esgin-logo.png"
                            alt="ESGIN Logo"
                            fill
                            className="object-contain"
                            priority
                            unoptimized
                        />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                        ESGIN
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-emerald-100/80 hover:text-emerald-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => alert("Whitepaper download will be available soon!")}
                        className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-all"
                    >
                        Whitepaper
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#020d0b] border-b border-emerald-900/30 p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-emerald-100/80 hover:text-emerald-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => alert("Whitepaper download will be available soon!")}
                            className="w-full py-3 rounded-lg bg-emerald-500 text-white font-bold"
                        >
                            Whitepaper
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
