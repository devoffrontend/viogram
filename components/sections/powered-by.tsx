/**
 * PoweredBy Component
 * 
 * Displays the "Powered By" section with technology partner logos.
 * 
 * Usage:
 * - Import and place after the MediaPartners section
 * - Dark background (#1E1E1E) to match the overall theme
 * - Two rows of tech partner logos in white/light text
 * 
 * Structure:
 * - Centered "POWERED BY" heading
 * - Two rows of partner logos in flex layout
 */

import Image from "next/image";

const partners = [
  { name: "OpenAI", icon: "/images/w-openai.png", width: 100, height: 100 },
  { name: "Gemini", icon: "/images/w-gemini.png", width: 100, height: 100 },
  { name: "SOLANA", icon: "/images/w-solana.png", width: 100, height: 100 },
  { name: "NVIDIA", icon: "/images/w-nvidia.png", width: 100, height: 100 },
  { name: "Google", icon: "/images/w-google.png", width: 100, height: 100 },
  { name: "BNB CHAIN", icon: "/images/w-bnb.png", width: 100, height: 100 },
  { name: "tether", icon: "/images/w-tether.png", width: 100, height: 100 },
  { name: "Bing", icon: "/images/w-bing.png", width: 100, height: 100 },
  { name: "TensorFlow", icon: "/images/w-tensor.png", width: 100, height: 100 },
  { name: "Microsoft", icon: "/images/w-microsoft.png", width: 100, height: 100 },
  { name: "TRUST", icon: "/images/w-trust.png", width: 100, height: 100 },
  { name: "MoonPay", icon: "/images/w-moonpay.png", width: 100, height: 100 },
  { name: "ethereum", icon: "/images/w-etherium.png", width: 100, height: 100 },
  { name: "VISA", icon: "/images/w-visa.png", width: 100, height: 100 },
  { name: "G Pay", icon: "/images/w-google-pay.png", width: 100, height: 100 },
  { name: "Google Analytics", icon: "/images/w-google-analytic.png", width: 100, height: 100 },
  { name: "Apple Pay", icon: "/images/w-apple-pay.png", width: 100, height: 100 },
];

export function PoweredBy() {
  return (
    <section className="pt-16 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold text-white text-center mb-12 uppercase tracking-[0.2em]">
          POWERED BY
        </h3>

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-12 gap-y-6 mb-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Image src={partner.icon} alt={partner.name} width={partner.width} height={partner.height} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
