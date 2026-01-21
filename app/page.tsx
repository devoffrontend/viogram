import { About } from "@/components/sections/about";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TokenOverview } from "@/components/sections/token-overview";
import { Tokenomics } from "@/components/sections/tokenomics";
import { UseOfFunds } from "@/components/sections/use-of-funds";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

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
      {/* <Roadmap /> */}
      {/* <WhyParticipate /> */}
      {/* <Community /> */}
      {/* <MediaPartners /> */}
      {/* <PoweredBy /> */}
      {/* <JoinSection /> */}
      {/* <Footer /> */}
    </main>
  );
}
