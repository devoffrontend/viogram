import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * JoinSection Component
 * 
 * Displays the "Join the participation economy" CTA section.
 * 
 * Usage:
 * - Import and place before the Footer section
 * - Features an orange gradient rounded card
 * - Contains heading, description, two CTA buttons, and video placeholder
 * 
 * Structure:
 * - Orange gradient card container with rounded corners
 * - Left: Heading, description, and buttons
 * - Right: Video placeholder area
 */

export function JoinSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#D97706] via-[#B45309] to-[#92400E] rounded-3xl p-8 lg:p-12 xl:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                Join the participation economy
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-md">
                Viogram is building infrastructure for long-term economic participation, not short-term speculation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-base font-medium group"
                >
                  Participate in Token Sale
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 bg-transparent rounded-full px-8 py-6 text-base font-medium"
                >
                  Download Whitepaper
                </Button>
              </div>
            </div>

            {/* Right: Video Placeholder */}
            <div className="hidden lg:block">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
