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

const partnersRow1 = [
  { name: "OpenAI", icon: "◎" },
  { name: "Gemini", icon: "◆" },
  { name: "SOLANA", icon: "≡" },
  { name: "NVIDIA", icon: "▣" },
  { name: "Google", icon: null },
  { name: "BNB CHAIN", icon: "◇" },
  { name: "tether", icon: "◈" },
  { name: "Bing", icon: "▷" },
  { name: "TensorFlow", icon: "⧉" },
];

const partnersRow2 = [
  { name: "Microsoft", icon: "⊞" },
  { name: "TRUST", icon: "◯" },
  { name: "MoonPay", icon: "●" },
  { name: "ethereum", icon: "◆" },
  { name: "Meta", icon: "∞" },
  { name: "VISA", icon: null },
  { name: "G Pay", icon: null },
  { name: "Google Analytics", icon: "▪" },
  { name: "Apple Pay", icon: "◉" },
];

export function PoweredBy() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold text-white text-center mb-12 uppercase tracking-[0.2em]">
          POWERED BY
        </h3>

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-12 gap-y-6 mb-8">
          {partnersRow1.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              {partner.name === "OpenAI" && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2 8.4c.3-1.3.2-2.7-.4-3.9-.9-1.7-2.6-2.9-4.5-3.1-1.3-.2-2.6.1-3.7.7C12.8 1.1 11.6.5 10.3.4 8.4.2 6.6.9 5.3 2.3c-.9 1-1.5 2.2-1.6 3.5C2.4 6.1 1.4 7 .8 8.1c-.9 1.7-.9 3.7-.1 5.4.6 1.1 1.5 2.1 2.6 2.6-.3 1.3-.2 2.7.4 3.9.9 1.7 2.6 2.9 4.5 3.1 1.3.2 2.6-.1 3.7-.7.8 1 2 1.6 3.3 1.7 1.9.2 3.7-.5 5-1.9.9-1 1.5-2.2 1.6-3.5 1.3-.3 2.3-1.2 2.9-2.3.9-1.7.9-3.7.1-5.4-.6-1.1-1.5-2.1-2.6-2.6zm-9.4 12.8c-1.1.6-2.5.5-3.5-.2-.1-.1-.2-.1-.3-.2l4.6-2.7v-.1l-5.3-3.1V11l4.5 2.6 4.5-2.6v4c0 .1 0 .1-.1.2-1.2.7-3.3 2-4.4 2.6-.1 0-.1 0 0 0zm-8.4-5.3c-.6-1-.7-2.3-.3-3.4V13l4.6 2.7 4.6-2.7v5.3l-4.5 2.6-4.4-2.6v-.4zM3 10.6c.5-1.1 1.5-1.9 2.7-2.2v5.4l4.5 2.6-4.5 2.6c-.1 0-.1 0-.2 0-.1-.1-.2-.1-.3-.2-1.1-.6-1.8-1.6-2.2-2.7-.4-1.2-.4-2.5 0-3.7V10.6zm15.3 2.2l-4.6-2.6 4.5-2.6c.1 0 .1 0 .2 0 .1.1.2.1.3.2 1.1.6 1.8 1.6 2.2 2.7.4 1.2.4 2.5 0 3.7v.3c-.5 1.1-1.5 1.9-2.7 2.2V12.8zm2.6-5.2c-.1.1-.2.1-.3.2l-4.6 2.7V5.2l4.5-2.6 4.5 2.6v.5c-.6 1.1-1.5 1.9-2.7 2.2-.5-.1-1-.1-1.4-.1zm-8-3.8c1.1-.6 2.5-.5 3.5.2.1.1.2.1.3.2L12.1 7V7l5.3 3.1V14l-4.5-2.6L8.4 14V9.9c0-.1 0-.1.1-.2l4.4-2.6v-.3zm-6.7.9c.5.1 1 .1 1.4.1.1-.1.2-.1.3-.2l4.6-2.7V7l-4.5 2.6-4.5-2.6V6.6c.5-1.1 1.5-2 2.7-2.3v.4zm-.7 9.7V9.1L6 6.5l4.5 2.6V14l-4.5 2.6v-.2z" />
                  </svg>
                  <span className="font-medium text-sm lg:text-base">OpenAI</span>
                </div>
              )}
              {partner.name === "Gemini" && (
                <div className="flex items-center gap-2">
                  <span className="text-lg">◆</span>
                  <span className="font-medium text-sm lg:text-base">Gemini</span>
                </div>
              )}
              {partner.name === "SOLANA" && (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">=</span>
                  <span className="font-bold text-sm lg:text-base tracking-wider">SOLANA</span>
                </div>
              )}
              {partner.name === "NVIDIA" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold">☐</span>
                  <span className="font-bold text-sm lg:text-base tracking-wide">NVIDIA</span>
                </div>
              )}
              {partner.name === "Google" && (
                <span className="font-medium text-sm lg:text-base">Google</span>
              )}
              {partner.name === "BNB CHAIN" && (
                <div className="flex items-center gap-2">
                  <span className="text-lg">◇</span>
                  <span className="font-bold text-sm lg:text-base tracking-wide">BNB CHAIN</span>
                </div>
              )}
              {partner.name === "tether" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">◈</span>
                  <span className="font-medium text-sm lg:text-base">tether</span>
                </div>
              )}
              {partner.name === "Bing" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">▷</span>
                  <span className="font-bold text-sm lg:text-base">Bing</span>
                </div>
              )}
              {partner.name === "TensorFlow" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">⧉</span>
                  <span className="font-medium text-sm lg:text-base">TensorFlow</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-12 gap-y-6">
          {partnersRow2.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              {partner.name === "Microsoft" && (
                <div className="flex items-center gap-2">
                  <span className="text-lg">⊞</span>
                  <span className="font-medium text-sm lg:text-base">Microsoft</span>
                </div>
              )}
              {partner.name === "TRUST" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">◯</span>
                  <span className="font-bold text-sm lg:text-base tracking-wide">TRUST</span>
                </div>
              )}
              {partner.name === "MoonPay" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">●</span>
                  <span className="font-medium text-sm lg:text-base">MoonPay</span>
                </div>
              )}
              {partner.name === "ethereum" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">◆</span>
                  <span className="font-medium text-sm lg:text-base">ethereum</span>
                </div>
              )}
              {partner.name === "Meta" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">∞</span>
                  <span className="font-medium text-sm lg:text-base">Meta</span>
                </div>
              )}
              {partner.name === "VISA" && (
                <span className="font-bold text-sm lg:text-base tracking-wide">VISA</span>
              )}
              {partner.name === "G Pay" && (
                <span className="font-medium text-sm lg:text-base">G Pay</span>
              )}
              {partner.name === "Google Analytics" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">▪</span>
                  <span className="font-medium text-xs lg:text-sm">Google<br />Analytics</span>
                </div>
              )}
              {partner.name === "Apple Pay" && (
                <div className="flex items-center gap-1">
                  <span className="text-lg">◉</span>
                  <span className="font-medium text-sm lg:text-base">Pay</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
