import { Button } from "@/components/ui/button";

export function JoinSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Join the participation economy
            </h2>
            <p className="text-black/80 text-lg leading-relaxed">
              Be part of the future of decentralized participation. Learn more about 
              Viogram and start participating in the token sale today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black/10 bg-white/90 text-lg px-8 py-6"
              >
                Participate in Token Sale
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black/10 bg-white/90 text-lg px-8 py-6"
              >
                Download Whitepaper
              </Button>
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="hidden lg:block">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-black/20 border-2 border-black/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-black/30 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-black/60 text-sm">Video Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

