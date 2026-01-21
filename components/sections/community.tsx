import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const updates = [
  {
    title: "Product releases",
    description: "Dashboard, Wallet, Marketplace, Rewards",
    completed: true,
  },
  {
    title: "Proof of Engagement upgrades",
    description: "Verification, multipliers, anti-farm systems",
    completed: true,
  },
  {
    title: "Governance feature releases",
    description: "Voting, quorum updates, proposal history",
    completed: false,
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
          <div className="relative flex">
            {/* Vertical timeline - outside the cards */}
            <div className="relative flex flex-col items-center mr-6">
              {/* Top dot */}
              <div className="w-4 h-4 rounded-full bg-amber-500 flex-shrink-0 z-10" />
              {/* Vertical line */}
              <div className="w-0.5 flex-1 bg-amber-500/80 -mt-0" />
            </div>
            
            {/* Cards */}
            <div className="flex-1 space-y-4">
              {updates.map((update, index) => (
                <Card 
                  key={index} 
                  className={`bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden ${
                    !update.completed ? 'opacity-60' : ''
                  }`}
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
                          className={`w-12 h-12 ${!update.completed ? 'grayscale opacity-50' : ''}`}
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="pt-1">
                        <h3 className={`text-lg font-bold mb-1 ${
                          update.completed ? 'text-black' : 'text-gray-400'
                        }`}>
                          {update.title}
                        </h3>
                        <p className={`text-sm ${
                          update.completed ? 'text-neutral-600' : 'text-gray-400'
                        }`}>
                          {update.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
