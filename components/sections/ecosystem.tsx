import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const ecosystemItems = [
  {
    icon: "/images/vision.png",
    title: "Super App",
    description: "The comprehensive wallet and super app for all users.",
  },
  {
    icon: "/images/vision.png",
    title: "Proof of Engagement",
    description: "A novel consensus mechanism that rewards active participation.",
  },
  {
    icon: "/images/vision.png",
    title: "Viogram Labs Foundation",
    description: "A non-profit organization supporting ecosystem growth.",
  },
  {
    icon: "/images/vision.png",
    title: "VioBank",
    description: "For easy and secure digital payments, remittances, and asset storage.",
  },
  {
    icon: "/images/vision.png",
    title: "VioGrow",
    description: "Treasury capital management for ecosystem stability.",
  },
  {
    icon: "/images/vision.png",
    title: "RWA Launchpad",
    description: "Real-World Asset tokenization and launch.",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="pb-20 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12 text-left">
          The Viogram Ecosystem
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemItems.map((item, index) => {
            
            return (
              <Card key={index} className="bg-transparent p-0 border-neutral-200 hover:border-neutral-300 transition-colors">
                <CardContent className="p-10">
                  <div className="flex flex-col items-start text-left">
                      <Image
                      src={item.icon}
                      alt={item.title}
                      width={72}
                      height={72}
                      />
                    <h3 className="text-xl font-bold text-neutral-900 text-left mt-4 mb-2">{item.title}</h3>
                    <p className="text-neutral-900 text-base text-left">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

