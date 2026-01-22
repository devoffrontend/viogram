import { Button } from "@/components/ui/button";
import Image from "next/image";

const mediaPartners = [
  {
    icon: "/images/coin-desk.png",
    width: 171,
    height: 123,
  },
  {
    icon: "/images/bloomberg.png",
    width: 159,
    height: 115,
  },
  {
    icon: "/images/coin-telegraph.png",
    width: 167,
    height: 120,
  },
  {
    icon: "/images/coin-marketcap.png",
    width: 135,
    height: 40,
  },
  {
    icon: "/images/coin-gecko.png",
    width: 127,
    height: 31,
  },
  {
    icon: "/images/yahoo.png",
    width: 137,
    height: 98,
  },
];

export function MediaPartners() {
  return (
    <section className="relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-[-200px] overflow-hidden bg-gradient-to-tr from-amber-500 to-black rounded-3xl p-8 lg:p-16 shadow-2xl">

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
                  className="bg-linear-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-0 rounded-full px-8 py-6 text-base lg:text-lg font-medium"
                >
                  Participate in Token Sale →
                </Button>
              </div>
            </div>

            {/* Right: Partner Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mediaPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-[#141414] border border-gray-800/60 rounded-2xl flex items-center justify-center p-4 lg:p-6 hover:border-gray-700 transition-colors"
                >
                  <Image src={partner.icon} alt={partner.icon} width={partner.width} height={partner.height} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
