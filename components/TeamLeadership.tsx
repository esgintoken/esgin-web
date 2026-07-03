"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Send, ChevronLeft, ChevronRight } from "lucide-react";

// Team Data
const team = [
  {
    name: "Brandon Keam",
    title: "CEO · Director",
    image: "/images/brandon.png",
    links: [
      { type: "LinkedIn" as const, url: "https://www.linkedin.com/in/brandon-keam-esg-in/" },
      { type: "Telegram" as const, url: "https://t.me/esgin_brandon" },
    ],
  },
  {
    name: "Muthia Eka Pratiwi",
    title: "Commissioner",
    image: "/images/mutia.png",
    links: [
      { type: "LinkedIn" as const, url: "https://www.linkedin.com/in/muthia-eka-pratiwi-9b779626a/" },
      { type: "Telegram" as const, url: "https://t.me/itsmemuthia" },
    ],
  },
  {
    name: "Deandre Aria Putra",
    title: "Director",
    image: "/images/andre.png",
    links: [
      { type: "LinkedIn" as const, url: "https://www.linkedin.com/in/deandre-aria-putra-8939a6352/" },
      { type: "Telegram" as const, url: "https://t.me/deandreariap" },
    ],
  },
  {
    name: "Brian Lee",
    title: "CBO · Director",
    image: "/images/brian.png",
    links: [
      { type: "LinkedIn" as const, url: "https://www.linkedin.com/in/brian-lee-3195973a6/" },
      { type: "Telegram" as const, url: "https://t.me/Brian_LeeSH" },
    ],
  },
  {
    name: "Ian Cho",
    title: "CTO · Director",
    image: "/images/ian.png",
    links: [
      { type: "LinkedIn" as const, url: "https://www.linkedin.com/in/ian-cho-8a631b3a6/" },
    ],
  },
];

interface TeamMember {
  name: string;
  title: string;
  image: string;
  links: { type: "LinkedIn" | "Telegram"; url: string }[];
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="perspective-1000 w-full h-[400px]"
    >
      <motion.div
        className="relative w-full h-full transform-style-3d"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#0c1615] to-[#050e0c] border border-white/5 shadow-xl flex flex-col p-8 items-center justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 relative bg-emerald-950/20">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">
            {member.name}
          </h3>
          <p className="text-emerald-500/90 text-sm font-medium uppercase tracking-wide text-center">
            {member.title}
          </p>
          <span className="text-white/30 text-xs mt-auto">Hover to view details</span>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-[#0c1615] to-[#050e0c] border border-white/5 shadow-xl flex flex-col p-8 items-center justify-center [transform:rotateY(180deg)]">
          <h3 className="text-xl font-bold text-white mb-1 text-center">
            {member.name}
          </h3>
          <p className="text-emerald-500/90 text-xs font-medium uppercase tracking-wide mb-6 text-center">
            {member.title}
          </p>

          <div className="w-8 h-px bg-white/10 mb-6" />

          {/* Contact Links */}
          <div className="flex flex-col gap-3 w-full max-w-[200px]">
            {member.links.map((linkItem, linkIdx) => (
              <a
                key={linkIdx}
                href={linkItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-emerald-400 transition-colors text-sm font-medium py-2.5 px-4 rounded-xl bg-white/5 hover:bg-emerald-950/30 border border-white/10 hover:border-emerald-500/30"
              >
                {linkItem.type === "LinkedIn" ? (
                  <Linkedin className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>{linkItem.type}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TeamLeadership() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = team.length;
  const maxIndex = totalItems - itemsToShow;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev + 1); // wait, should be prev - 1, let's fix that too
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlePrevFixed = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Calculate progress for scrollbar/dots if needed, or just transform
  // Each item width is 100% / itemsToShow
  const translateX = -(currentIndex * (100 / itemsToShow));

  return (
    <section id="team" className="py-24 bg-[#020d0b] relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-900/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-500/80 font-mono tracking-[0.2em] text-xs uppercase font-semibold">
              The Builders
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
              Team & Leadership
            </h2>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto group">

          {/* Controls */}
          <button
            onClick={handlePrevFixed}
            disabled={currentIndex === 0}
            aria-label="Previous Team Member"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 
              p-3 rounded-full border border-white/10 bg-[#020d0b]/80 backdrop-blur-sm text-white/70 
              transition-all duration-300 hover:bg-emerald-900/20 hover:text-emerald-400 hover:border-emerald-500/30
              disabled:opacity-0 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next Team Member"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 
              p-3 rounded-full border border-white/10 bg-[#020d0b]/80 backdrop-blur-sm text-white/70 
              transition-all duration-300 hover:bg-emerald-900/20 hover:text-emerald-400 hover:border-emerald-500/30
              disabled:opacity-0 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Window */}
          <div className="overflow-hidden px-1 md:px-2 mx-auto" ref={containerRef}>
            <motion.div
              className="flex"
              animate={{ x: `${translateX}%` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.45 }}
              style={{ width: `${(totalItems / itemsToShow) * 100}%` }} // Total width relative to container
            >
              {team.map((member, index) => (
                <div
                  key={index}
                  className="px-3"
                  style={{ width: `${100 / totalItems}%` }} // Each item takes up uniform width in the flex container
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${currentIndex === idx
                    ? "w-8 h-1.5 bg-emerald-500"
                    : "w-1.5 h-1.5 bg-white/10 hover:bg-white/30"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
