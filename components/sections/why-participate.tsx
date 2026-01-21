import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Innovative tokenized economy",
  "Earn rewards for engagement",
  "Secure, transparent ecosystem",
  "Community-driven growth",
  "Long-term value potential",
];

export function WhyParticipate() {
  return (
    <section className="pb-20 lg:pb-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-black rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/images/participate-diagram.png" alt="Why Participate" width={500} height={500} />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Why participate in Viogram
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-amber-400 mt-1"><ArrowRightCircle className="h-8 w-8" /></span>
                  <span className="text-neutral-900">{benefit}</span>
                </li>
              ))}
            </ul>


            <Button
              className="bg-linear-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-0 rounded-full px-8 py-6 text-base lg:text-lg font-medium"
            >
              Participate in Token Sale →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

