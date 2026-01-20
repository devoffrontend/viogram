import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const updates = [
  {
    title: "Product milestones",
    description: "Enhanced Super App features.",
  },
  {
    title: "Proof of Engagement upgrade",
    description: "Improved reward mechanics.",
  },
];

export function Community() {
  return (
    <section id="community" className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Community & News
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Viogram is built by and for the community. We believe in transparency, 
              active development, and creating value for all participants. Stay updated 
              with our latest developments and milestones.
            </p>
          </div>

          {/* Right: Updates Timeline */}
          <div className="space-y-6">
            {updates.map((update, index) => (
              <Card key={index} className="bg-gray-900/50 border-amber-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-400 mb-2">
                        {update.title}
                      </h3>
                      <p className="text-gray-300">{update.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

