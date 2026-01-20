import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2024",
    title: "Platform launch, Private sale, Core features",
    highlighted: true,
  },
  {
    quarter: "Q2 2024",
    title: "Public sale, VGT listing, Super App V1",
    highlighted: false,
  },
  {
    quarter: "Q3 2024 - Q4 2024",
    title: "Proof of Engagement V1, VioBank integration",
    highlighted: false,
  },
  {
    quarter: "Q1 2025 - Q2 2025",
    title: "RWA Launchpad V1, Global expansion",
    highlighted: false,
  },
  {
    quarter: "Q3 2025",
    title: "Decentralized governance, Ecosystem grants",
    highlighted: false,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
          Roadmap
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-500/30 transform -translate-x-1/2" />
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 max-w-md">
                  <Card
                    className={`${
                      item.highlighted
                        ? "bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-amber-500/50"
                        : "bg-gray-900/50 border-amber-500/20"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        {item.highlighted && (
                          <Check className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                        )}
                        <div>
                          <h3 className="text-lg font-bold text-amber-400 mb-2">
                            {item.quarter}
                          </h3>
                          <p className="text-gray-300">{item.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden lg:block w-4 h-4 bg-amber-500 rounded-full border-4 border-black z-10" />
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-md hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

