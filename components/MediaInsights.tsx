"use client";

import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight, Calendar, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const news = [
    {
        id: 1,
        date: "Jan 10, 2026",
        category: "Government Partnership",
        title: "MOU Signed with Indonesian Ministry of Environment",
        description: "ESGIN chosen as official digital verification partner for the National Trash Bank initiative.",
        link: "#",
    },
    {
        id: 2,
        date: "Dec 28, 2025",
        category: "Pilot Report",
        title: "Jeju Island Pilot: 50% Reduction in Logistics Cost",
        description: "Our high-tech sorting facility in Jeju demonstrates record-breaking efficiency using AI sorting.",
        link: "#",
    },
    {
        id: 3,
        date: "Dec 15, 2025",
        category: "Exchange Listing",
        title: "Upcoming Token Listing Announcement",
        description: "ESGIN token will be listed on a top-tier global exchange in Q1 2026. Details coming soon.",
        link: "#",
    },
    {
        id: 4,
        date: "Nov 30, 2025",
        category: "Strategy",
        title: "Expansion into Vietnam Market",
        description: "Preliminary talks with Vietnam's recycling consortiums have begun.",
        link: "#",
    },
    {
        id: 5,
        date: "Nov 15, 2025",
        category: "Technology",
        title: "ESGIN Mainnet Beta Live",
        description: "The world's first carbon-neutral blockchain network is now live for beta testing.",
        link: "#",
    },
];

const CARD_WIDTH = 400; // Width of each card
const GAP = 24; // Gap between cards

export default function MediaInsights() {
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    // Function to scroll to independent card
    const scrollTo = (index: number) => {
        setCurrentIndex(index);
        // Calculate new x position: -(cardWidth + gap) * index
        const newX = -(CARD_WIDTH + GAP) * index;
        // Clamp value
        const clampedX = Math.max(Math.min(newX, 0), -width);
        // Animate x will be handled via motion style if we passed x as value, 
        // but with drag we might need to physically move or animate.
        // Simplified approach: We just move the constraints or animate the wrapper.
        // For framer-motion drag, changing the x value externally requires `animate`.
        // We will just use a simpler key-based re-render or direct animation if possible.
        // But drag and external control often fight. 
        // Let's rely on standard scroll behavior for simplicity and robustness if drag isn't critical,
        // BUT user asked for "Pushing items" (Drag).
    };

    // Calculate active dot based on drag position (simplified approximation)
    const handleDragEnd = (event: any, info: any) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        // Logic to snap to nearest slide could be added here
    };

    return (
        <section id="media" className="py-24 bg-[#020d0b] relative border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                        Latest Updates
                    </span>
                    <h2 className="mt-2 text-3xl font-bold text-white tracking-tight">
                        Media & Insights
                    </h2>
                </div>

                <div className="flex gap-2">
                    {/* Navigation Buttons (Optional, better UX than just dots) */}
                    <button
                        onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
                        disabled={currentIndex === 0}
                        className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 disabled:opacity-30 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scrollTo(Math.min(news.length - 1, currentIndex + 1))}
                        disabled={currentIndex === news.length - 1}
                        className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 disabled:opacity-30 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Draggable Carousel Area */}
            <div className="container mx-auto px-6 overflow-hidden">
                <motion.div
                    ref={carouselRef}
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    animate={{ x: -(CARD_WIDTH + GAP) * currentIndex }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;

                        if (swipe < -10000) {
                            scrollTo(Math.min(news.length - 1, currentIndex + 1));
                        } else if (swipe > 10000) {
                            scrollTo(Math.max(0, currentIndex - 1));
                        }
                    }}
                >
                    {news.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`shrink-0 w-[350px] md:w-[400px] p-8 rounded-2xl border transition-all duration-300 group
                                ${index === currentIndex
                                    ? "bg-white/5 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                                    : "bg-transparent border-white/10 opacity-60 hover:opacity-100"}
                            `}
                            onClick={() => scrollTo(index)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase
                                    ${index === currentIndex ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-white/40"}
                                `}>
                                    {item.category}
                                </span>
                                <span className="flex items-center gap-1 text-white/40 text-xs">
                                    <Calendar className="w-3 h-3" />
                                    {item.date}
                                </span>
                            </div>

                            <h3 className={`text-xl font-bold mb-4 line-clamp-2 transition-colors
                                ${index === currentIndex ? "text-white" : "text-white/60 group-hover:text-white"}
                            `}>
                                {item.title}
                            </h3>

                            <p className="text-emerald-100/40 text-sm mb-8 line-clamp-3">
                                {item.description}
                            </p>

                            <div className={`flex items-center gap-2 font-medium text-sm transition-all
                                ${index === currentIndex ? "text-emerald-400" : "text-white/40 group-hover:text-white"}
                            `}>
                                Read More
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
                {news.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-2 rounded-full transition-all duration-300 
                            ${index === currentIndex
                                ? "w-8 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                : "w-2 bg-white/10 hover:bg-white/30"}
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    );
}
