import { Button } from "@/components/ui/button";

export function PrivateSaleBanner() {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex bg-transparent border border-amber-500 px-4 rounded-xl py-4 flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <p className="text-white font-semibold text-lg">Private Sale Is Live ddd</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Payment method icons placeholder */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-600/30 border border-amber-500/50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

