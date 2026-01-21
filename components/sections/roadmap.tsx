import { Card, CardContent } from "@/components/ui/card";

const roadmapPhases = [
  {
    phase: 1,
    dates: "Q1-Q2 2026",
    items: [
      "MVP launch, PoE v1",
      "VGC rewards, VGT",
      "deployment, token sale",
    ],
    isActive: true,
  },
  {
    phase: 2,
    dates: "Q3-Q4 2026",
    items: [
      "Marketplace, live",
      "commerce, VioRadar, AI",
      "fraud detection",
    ],
    isActive: false,
  },
  {
    phase: 3,
    dates: "Q4 2026 - Q1 2027",
    items: [
      "VioBank rails, remittance",
      "DAO governance, VG",
      "Chain testnet",
    ],
    isActive: false,
  },
  {
    phase: 4,
    dates: "Q1-Q2 2027",
    items: [
      "VG Chain beta, RWA",
      "launchpad, institutional",
      "reporting",
    ],
    isActive: false,
  },
  {
    phase: 5,
    dates: "Q3 2027+",
    items: [
      "Full protocol, DID",
      "developer ecosystem",
      "global scale",
    ],
    isActive: false,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-16 text-center">
          Roadmap
        </h2>

        <div className="relative">
          {/* Timeline line - vertical on mobile/tablet, horizontal on desktop */}
          <div className="absolute top-[15px] left-4 lg:left-0 bottom-[15px] lg:bottom-auto lg:top-[15px] lg:right-0 w-0.5 lg:w-auto lg:h-0.5 bg-gray-400" />

          {/* Timeline nodes and phases */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative pl-4 lg:pl-0">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center relative -ml-4 lg:ml-0">
                {/* Timeline node - centered on the line */}
                <div className="relative z-10 mb-0 lg:mb-12 h-8 lg:h-8 flex items-center justify-center mr-6 lg:mr-0 shrink-0 w-8 lg:w-auto">
                  {phase.isActive ? (
                    <div className="w-8 h-8 inline-flex items-center justify-center bg-[#F4F1EB] rounded-full border-2 border-amber-600">
                      <span className="w-4 h-4 bg-amber-600 rounded-full inline-flex items-center justify-center"></span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 inline-flex items-center justify-center bg-[#F4F1EB] rounded-full border-2 border-gray-300">
                      <span className="w-2 h-2 bg-gray-300 rounded-full inline-flex items-center justify-center"></span>
                    </div>
                  )}
                </div>

                {/* Phase card */}
                <Card
                  className={`w-full flex-1 lg:flex-none rounded-lg ${phase.isActive
                    ? "bg-white border-gray-300"
                    : "bg-[#ECE9E1] border-gray-300"
                    }`}
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`inline-block px-3 py-1 rounded-xl mb-3 text-sm font-bold ${phase.isActive
                        ? "bg-amber-600 text-white"
                        : "bg-black text-white"
                        }`}
                    >
                      PHASE {phase.phase}
                    </div>
                    <div className="text-black font-semibold text-sm mb-3">
                      {phase.dates}
                    </div>
                    <div className="space-y-1">
                      {phase.items.map((item, itemIndex) => (
                        <p
                          key={itemIndex}
                          className="text-black text-sm leading-tight"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

