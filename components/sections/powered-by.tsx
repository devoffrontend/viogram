const partners = [
  "OpenAI",
  "Solana",
  "Meta",
  "Google",
  "BNB Chain",
  "Tether",
  "Bing",
  "Tron",
  "Microsoft",
  "Trust Wallet",
  "MoonPay",
  "Apple Pay",
  "Visa",
  "PayPal",
  "Google Pay",
];

export function PoweredBy() {
  return (
    <section className="py-12 bg-black border-y border-amber-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-semibold text-gray-400 text-center mb-8 uppercase tracking-wider">
          POWERED BY
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-16 bg-gray-900/50 border border-amber-500/20 rounded-lg flex items-center justify-center hover:border-amber-500/50 transition-colors"
            >
              <span className="text-gray-500 text-xs font-medium text-center px-2">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

