import { Card, CardContent } from "@/components/ui/card";

const allocations = [
  { label: "Team", percentage: 28, color: "bg-blue-500" },
  { label: "Marketing", percentage: 15, color: "bg-green-500" },
  { label: "Public Sale", percentage: 10, color: "bg-amber-500" },
  { label: "Private Sale", percentage: 12, color: "bg-purple-500" },
  { label: "Ecosystem", percentage: 20, color: "bg-orange-500" },
  { label: "Treasury", percentage: 15, color: "bg-red-500" },
];

export function Tokenomics() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
          Tokenomics (VGT)
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Allocation List */}
          <div className="space-y-4">
            {allocations.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-amber-500/20">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded ${item.color}`} />
                  <span className="text-white font-semibold">{item.label}</span>
                </div>
                <span className="text-amber-400 font-bold text-lg">{item.percentage}%</span>
              </div>
            ))}
          </div>

          {/* Right: Pie Chart Placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <svg viewBox="0 0 200 200" className="transform -rotate-90">
                {allocations.reduce((acc, item, index) => {
                  const startAngle = acc;
                  const endAngle = startAngle + (item.percentage / 100) * 360;
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;
                  const x1 = 100 + 80 * Math.cos(startRad);
                  const y1 = 100 + 80 * Math.sin(startRad);
                  const x2 = 100 + 80 * Math.cos(endRad);
                  const y2 = 100 + 80 * Math.sin(endRad);
                  const largeArc = item.percentage > 50 ? 1 : 0;
                  
                  const path = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;
                  
                  const colorMap: Record<string, string> = {
                    "bg-blue-500": "#3b82f6",
                    "bg-green-500": "#22c55e",
                    "bg-amber-500": "#f59e0b",
                    "bg-purple-500": "#a855f7",
                    "bg-orange-500": "#f97316",
                    "bg-red-500": "#ef4444",
                  };
                  
                  return (
                    <path
                      key={index}
                      d={path}
                      fill={colorMap[item.color] || "#f59e0b"}
                    />
                  );
                }, 0)}
              </svg>
            </div>
          </div>
        </div>

        {/* Treasury Buffer Protocol */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            Treasury Buffer Protocol
          </h3>
          <Card className="bg-gray-900/50 border-amber-500/20">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                A portion of revenue is allocated to a treasury to ensure stability and 
                support the ecosystem. This buffer helps maintain token value and provides 
                resources for future development and community initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

