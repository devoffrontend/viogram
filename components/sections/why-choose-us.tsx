import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="pb-20 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-12 text-center">
          Why choose us?
        </h2>

        <div className="gap-4 sm:gap-6 lg:gap-8 mx-auto w-full flex flex-col lg:flex-row">
          {/* Problem Card */}
          <Card className="bg-[#F4F1EB] rounded-lg w-full">
            <CardContent className="px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Image
                src="/images/problem.png"
                alt="Problem"
                width={90}
                height={90}
                className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]"
              />
              <div className="flex-col flex items-start gap-4 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase">Problem</h3>
                <p className="text-sm sm:text-base text-neutral-900 leading-relaxed">
                  Today&apos;s platforms extract value from users and creators. Engagement generates revenue, but ownership and economic participation remain centralized.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Solution Card */}
          <Card className="bg-gradient-to-br  from-neutral-900 via-neutral-800  to-amber-900 rounded-lg w-full">
            <CardContent className="px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Image
                className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px]"
                src="/images/solution.png"
                alt="Solution"
                width={85}
                height={90}
              />
              <div className="flex-col items-start gap-4 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase">SOLUTION</h3>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  Viogram redistributes value through real participation. Rewards are revenue-backed, infrastructure-first, and designed for long-term sustainability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

