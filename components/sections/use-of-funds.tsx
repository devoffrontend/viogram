import { Card, CardContent } from "@/components/ui/card";

const fundAllocations = [
  { category: "Core System Development", percentage: 30 },
  { category: "Blockchain & Protocol R&D", percentage: 20 },
  { category: "User Growth & Ecosystem Expansion", percentage: 20 },
  { category: "Community, Legal & Risk Management", percentage: 10 },
  { category: "Treasury Buffer & Liquidity Support", percentage: 10 },
  { category: "Operations & Strategic Reserves", percentage: 10 },
];

export function UseOfFunds() {
  return (
    <section className="py-20 lg:py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
          Use of Funds
        </h2>

        <div className="mx-auto space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fundAllocations.map((item, index) => (
            <Card key={index} className="bg-black border-transparent p-0 m-0 hover:border-amber-500/50 transition-colors">
              <CardContent className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">{item.category}</span>
                  <span className="text-white font-bold text-xl">{item.percentage}%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

