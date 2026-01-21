import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const updates = [
  {
    title: "Product releases",
    description: "Dashboard, Wallet, Marketplace, Rewards",
  },
  {
    title: "Proof of Engagement upgrades",
    description: "Verification, multipliers, anti-farm systems",
  },
  {
    title: "Security improvements",
    description: "Audits, patches, monitoring",
  },
  {
    title: "Performance upgrades",
    description: "Vaster sync, smoother UI, scalable infra",
  },
  {
    title: "Governance feature releases",
    description: "Voting, quorum updates, proposal history",
  },
  {
    title: "Upcoming milestones and development schedule",
    description: "",
  },
];

export function Community() {
  return (
    <section id="community" className="pt-20 lg:pt-32 pb-20 lg:pb-32 bg-[#F5F3EE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Description */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-black leading-[1.1] tracking-tight">
              Community & News
            </h2>
            <div className="space-y-4">
              <p className="text-neutral-700 text-lg leading-relaxed">
                Viogram is built with a ship-fast, secure-first mindset—delivering consistent 
                upgrades to performance, user experience, and blockchain functionality.
              </p>
              <p className="text-neutral-700 text-lg leading-relaxed">
                This page provides full transparency into what we&apos;re building, what&apos;s launching 
                next, and how the ecosystem is evolving—so holders, creators, and partners can 
                track real progress in real time.
              </p>
              <p className="text-black text-lg font-semibold mt-6">
                Transparency builds trust. Shipping builds value.
              </p>
            </div>
          </div>

          {/* Right: Updates Timeline */}
          <div className="relative flex h-[380px]">
            {/* Vertical timeline - outside the cards */}
            <div className="relative flex flex-col items-center mr-6 flex-shrink-0">
              {/* Top dot */}
              <div className="w-4 h-4 rounded-full bg-amber-500 flex-shrink-0 z-10" />
              {/* Vertical line */}
              <div className="w-0.5 flex-1 bg-amber-500/80 -mt-0" />
            </div>
            
            {/* Scrollable Cards Container */}
            <div className="flex-1 relative">
              <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-transparent">
                <div className="space-y-4 pb-20">
                  {updates.map((update, index) => (
                    <Card 
                      key={index} 
                      className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden"
                    >
                      <CardContent className="p-5 pl-6">
                        <div className="flex items-start gap-5">
                          {/* Icon */}
                          <div className="relative flex-shrink-0">
                            <Image
                              src="/images/news-tick.png"
                              alt="Status"
                              width={48}
                              height={48}
                              className="w-12 h-12"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="pt-1">
                            <h3 className="text-lg font-bold mb-1 text-black">
                              {update.title}
                            </h3>
                            {update.description && (
                              <p className="text-sm text-neutral-600">
                                {update.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Fixed fade overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-2 h-16 pointer-events-none bg-gradient-to-t from-[#F5F3EE] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
