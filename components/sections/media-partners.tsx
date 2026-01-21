import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const mediaPartners = [
  {
    name: "CoinDesk",
    icon: "⬡",
  },
  {
    name: "Bloomberg",
    icon: null,
  },
  {
    name: "Cointelegraph",
    icon: "◎",
    subtitle: "THE FUTURE OF MONEY",
  },
  {
    name: "CoinMarketCap",
    icon: "Ⓜ",
  },
  {
    name: "CoinGecko",
    icon: "🦎",
  },
  {
    name: "Yahoo",
    icon: null,
    isYahoo: true,
  },
];

export function MediaPartners() {
  return (
    <section className="relative">
      {/* Split background - beige top half, dark bottom half */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-1/2 bg-[#F4F1EB]" />
        <div className="h-1/2 bg-[#1E1E1E]" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="relative overflow-hidden bg-[#0a0a0a] rounded-3xl p-8 lg:p-16 shadow-2xl">
          {/* Background shadow image on left-bottom side */}
          <Image
            src="/images/media-partner-bg.png"
            alt=""
            fill
            className="object-cover object-left-bottom pointer-events-none"
            aria-hidden="true"
          />
          
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                Media Partners
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Find us across the digital spectrum, check us out, feel the pulse of the Viogram project.
              </p>
              
              <div className="pt-4">
                <Button
                  className="bg-gradient-to-r from-[#C17A56] to-[#A65D3F] hover:from-[#B06A46] hover:to-[#954D2F] text-white border-0 rounded-full px-8 py-6 text-base lg:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Participate in Token Sale
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right: Partner Logos Grid */}
            <div className="grid grid-cols-3 gap-4">
              {mediaPartners.map((partner, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] bg-[#141414] border border-gray-800/60 rounded-2xl flex items-center justify-center p-4 lg:p-6 hover:border-gray-700 transition-colors"
                >
                  <div className="text-white font-semibold text-sm lg:text-base text-center">
                    {partner.name === "CoinDesk" && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg">⬡</span>
                        <span>CoinDesk</span>
                      </div>
                    )}
                    {partner.name === "Bloomberg" && (
                      <span className="font-bold tracking-tight">Bloomberg</span>
                    )}
                    {partner.name === "Cointelegraph" && (
                      <div className="flex items-center gap-1 text-xs lg:text-sm">
                        <span className="text-lg">◎</span>
                        <div className="text-left">
                          <div className="font-bold text-[11px] tracking-wide">COINTELEGRAPH</div>
                          <div className="text-[9px] text-gray-500 tracking-wide">THE FUTURE OF MONEY</div>
                        </div>
                      </div>
                    )}
                    {partner.name === "CoinMarketCap" && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg">Ⓜ</span>
                        <span className="text-sm">CoinMarketCap</span>
                      </div>
                    )}
                    {partner.name === "CoinGecko" && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🦎</span>
                        <span>CoinGecko</span>
                      </div>
                    )}
                    {partner.name === "Yahoo" && (
                      <span className="font-bold text-xl tracking-tight">yahoo!</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
