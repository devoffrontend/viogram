import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Innovative tokenized economy",
  "Earn rewards for engagement",
  "Secure, transparent ecosystem",
  "Community-driven growth",
  "Long-term value potential",
];

export function WhyParticipate() {
  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-black border border-amber-500/20 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-amber-500/20 rounded-full border-2 border-amber-500/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-500/30 rounded-full" />
                  </div>
                  <p className="text-gray-400 text-sm">3D Render Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Why participate in Viogram
            </h2>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 text-lg px-8 py-6"
            >
              Participate in Token Sale
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

