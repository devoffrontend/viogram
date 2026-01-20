import { Eye, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              About us
            </h2>
            <div className="space-y-4">
              <p className="text-black text-lg leading-relaxed">
                Viogram is building the <strong>Social Growth & Participation Economy Infrastructure</strong>—a next-generation ecosystem where users and creators earn measurable value from real digital activity.
              </p>
              <p className="text-black text-lg leading-relaxed">
                By integrating social commerce, fintech rails, and AI-driven Proof-of-Engagement, Viogram delivers Web2-level usability with Web3-level ownership—creating a scalable foundation for global adoption.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            <Card className="bg-[#F4F1EB] p-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/vision.png"
                    alt="Vision"
                    width={72}
                    height={72}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">VISION</h3>
                    <p className="text-black text-base">
                      Build the economic layer of the internet where participation becomes ownership.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#F4F1EB] p-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/mission.png"
                    alt="Mission"
                    width={72}
                    height={72}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">MISSION</h3>
                    <p className="text-black text-base">
                      Empower users, creators, and communities to earn and own value through verified engagement and real-world utility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

