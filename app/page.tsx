import TransparentHeader from "@/components/TransparentHeader";
import HeroSection from "@/components/HeroSection";
import MarketGap from "@/components/MarketGap";
import Infrastructure from "@/components/Infrastructure";
import AppEngine from "@/components/AppEngine";
import Tokenomics from "@/components/Tokenomics";
import TeamPartners from "@/components/TeamPartners";
import MediaInsights from "@/components/MediaInsights";
import RoadmapFooter from "@/components/RoadmapFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#020d0b] selection:bg-emerald-500/30">
      <TransparentHeader />
      <HeroSection />
      <MarketGap />
      <Infrastructure />
      <AppEngine />
      <Tokenomics />
      <TeamPartners />
      <MediaInsights />
      <RoadmapFooter />
    </main>
  );
}
