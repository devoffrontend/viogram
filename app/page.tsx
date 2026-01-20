import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { PrivateSaleBanner } from "@/components/sections/private-sale-banner";
import { About } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Ecosystem } from "@/components/sections/ecosystem";
import { TokenOverview } from "@/components/sections/token-overview";
import { Tokenomics } from "@/components/sections/tokenomics";
import { UseOfFunds } from "@/components/sections/use-of-funds";
import { Roadmap } from "@/components/sections/roadmap";
import { WhyParticipate } from "@/components/sections/why-participate";
import { Community } from "@/components/sections/community";
import { MediaPartners } from "@/components/sections/media-partners";
import { PoweredBy } from "@/components/sections/powered-by";
import { JoinSection } from "@/components/sections/join-section";
import { Footer } from "@/components/sections/footer";

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
      {/* <TokenOverview />
      <Tokenomics />
      <UseOfFunds />
      <Roadmap />
      <WhyParticipate />
      <Community />
      <MediaPartners />
      <PoweredBy />
      <JoinSection /> */}
      {/* <Footer /> */}
    </main>
  );
}
