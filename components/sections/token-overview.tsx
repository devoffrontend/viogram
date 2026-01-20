import { Card, CardContent } from "@/components/ui/card";
import { Coins } from "lucide-react";

export function TokenOverview() {
  return (
    <section id="tokenomics" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              VGT Token Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              VGT is the governance and utility token of the Viogram ecosystem.
            </p>
          </div>

          {/* Token Details Bar */}
          <Card className="bg-gray-900/50 border-amber-500/20">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Chain:</span>
                  <span className="text-white font-semibold">SOLANA</span>
                  <div className="w-6 h-6 bg-purple-500 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Symbol:</span>
                  <span className="text-white font-semibold">VGT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-white font-semibold">Token</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Supply:</span>
                  <span className="text-white font-semibold">1,000,000,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Audited By:</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded border border-blue-500/50" />
                    <div className="w-8 h-8 bg-green-500/20 rounded border border-green-500/50" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dual-Token Architecture */}
          <div className="space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Dual-Token architecture
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-amber-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-amber-500/20 rounded-lg">
                      <Coins className="h-8 w-8 text-amber-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-amber-400">
                      GOVERNANCE AND VALUE TOKEN
                    </h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Voting on protocol decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Staking for rewards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Ecosystem governance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-amber-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-amber-500/20 rounded-lg">
                      <Coins className="h-8 w-8 text-amber-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-amber-400">
                      UTILITY AND REWARDS COIN
                    </h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Gas fees for transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Rewards for engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>Access to premium features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

