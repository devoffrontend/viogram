import { Button } from "@/components/ui/button";

const mediaPartners = [
  "Forbes",
  "Bloomberg",
  "CoinDesk",
  "Yahoo Finance",
  "TechCrunch",
  "Reuters",
];

export function MediaPartners() {
  return (
    <section className="py-20 lg:py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Media Partners
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Viogram has been featured in leading media outlets and publications, 
            showcasing our commitment to innovation and transparency.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {mediaPartners.map((partner, index) => (
              <div
                key={index}
                className="h-20 bg-gray-900/50 border border-amber-500/20 rounded-lg flex items-center justify-center hover:border-amber-500/50 transition-colors"
              >
                <span className="text-gray-400 text-sm font-semibold">{partner}</span>
              </div>
            ))}
          </div>
          
          <Button
            variant="outline"
            className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 mt-8"
          >
            View all partners
          </Button>
        </div>
      </div>
    </section>
  );
}

