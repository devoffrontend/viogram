import { About } from "@/components/sections/about";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
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
        {/* <Community /> */}
        {/* <MediaPartners /> */}
        {/* <PoweredBy /> */}
        {/* <JoinSection /> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
