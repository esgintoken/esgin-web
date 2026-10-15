import type { Metadata } from "next";
import TransparentHeader from "@/components/TransparentHeader";
import RoadmapFooter from "@/components/RoadmapFooter";
import { mediaArticles, projectUpdates } from "@/lib/mediaData";
import { ArrowUpRight, Newspaper, BookmarkCheck, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Media Coverage | ESGIN - The Trust Protocol",
    description:
        "ESGIN's strategic partnerships and environmental initiatives have been featured across Indonesian media, highlighting our work in Digital MRV, circular economy, sustainable agriculture, and carbon markets.",
    openGraph: {
        title: "Media Coverage | ESGIN - The Trust Protocol",
        description:
            "Explore featured media coverage and strategic milestones of ESGIN in carbon markets, Digital MRV, and sustainable agriculture.",
        url: "https://www.esgintoken.com/media",
        siteName: "ESGIN",
        type: "website",
    },
};

export default function MediaPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#020d0b] selection:bg-emerald-500/30 text-white">
            <TransparentHeader />

            {/* Hero Header Section */}
            <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden border-b border-white/5">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-6">
                        <Newspaper className="w-3.5 h-3.5" />
                        <span>Press &amp; Publications</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Media{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            Coverage
                        </span>
                    </h1>

                    <p className="text-emerald-100/70 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
                        ESGIN&apos;s strategic partnerships and environmental initiatives have been featured across
                        Indonesian media, highlighting our work in Digital MRV, circular economy, sustainable
                        agriculture, and carbon markets.
                    </p>
                </div>
            </section>

            {/* Media Articles Section */}
            <section className="py-16 md:py-20 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/5">
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                            Featured Press Releases
                            <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-400">
                                {mediaArticles.length} Articles
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:gap-8">
                        {mediaArticles.map((article, index) => (
                            <article
                                key={article.id}
                                className="group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Metadata Row */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                                                {article.media}
                                            </span>
                                            <span className="text-xs font-mono text-white/40">
                                                #{String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-100/60">
                                            {article.partner}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                                        {article.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed mb-6 font-light">
                                        {article.description}
                                    </p>
                                </div>

                                {/* External Links */}
                                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                                    {article.links.map((link) => (
                                        <a
                                            key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 text-sm font-medium transition-all group/link"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Updates Section */}
            <section className="py-16 md:py-20 relative bg-white/[0.01] border-t border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-10 pb-4 border-b border-white/5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
                            <BookmarkCheck className="w-3.5 h-3.5" />
                            <span>Official Channels</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Project Updates
                        </h2>
                        <p className="text-emerald-100/60 text-sm md:text-base mt-2 font-light">
                            Official milestone updates and progress reports published on ESGIN channels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {projectUpdates.map((item) => (
                            <article
                                key={item.id}
                                className="group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-white/[0.05] transition-all duration-300"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <span className="text-xs font-mono tracking-wider uppercase text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                                        {item.source}
                                    </span>
                                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-100/60">
                                        {item.partner}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed mb-6 font-light">
                                    {item.description}
                                </p>

                                <div className="pt-4 border-t border-white/5">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/30 text-sm font-semibold transition-all group/link"
                                    >
                                        <span>Read Article</span>
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer without duplicating Roadmap */}
            <RoadmapFooter hideRoadmap={true} />
        </main>
    );
}
