import { About } from "@/components/sections/about";
import { Community } from "@/components/sections/community";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { JoinSection } from "@/components/sections/join-section";
import { MediaPartners } from "@/components/sections/media-partners";
import { PoweredBy } from "@/components/sections/powered-by";
import { Roadmap } from "@/components/sections/roadmap";
import { TokenOverview } from "@/components/sections/token-overview";
import { Tokenomics } from "@/components/sections/tokenomics";
import { UseOfFunds } from "@/components/sections/use-of-funds";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { WhyParticipate } from "@/components/sections/why-participate";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      {/* <PrivateSaleBanner /> */}
      <div className="bg-white">
        <About />
        <WhyChooseUs />
        <Ecosystem />
      </div>
      <TokenOverview />
      <Tokenomics />
      <UseOfFunds />
      <div className="bg-[#F4F1EB]">
        <Roadmap />
        <WhyParticipate />
        <Community />
      </div>
      <MediaPartners />
      <div className="bg-[#1E1E1E]">
        <PoweredBy />
        <JoinSection />
        <Footer />
      </div>
    </main>
  );
}
