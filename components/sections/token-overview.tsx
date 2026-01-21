import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export function TokenOverview() {
  return (
    <>
      <section id="tokenomics" className="py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                VGT Token Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                VGT is the governance and utility token of the Viogram ecosystem.
              </p>
            </div>
            {/* Gradient border wrapper */}
            <div 
              className="p-[1px] rounded-xl"
              style={{
                background: 'linear-gradient(90deg, #363636 0%, #BB7E16 25%, #FFE0AA 50%, #BB7E16 75%, #363636 100%)'
              }}
            >
              <Card className="bg-[#0D0D0D] border-0 rounded-xl overflow-x-auto">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between min-w-max">
                    <div className="flex items-center gap-2 flex-col border-r border-neutral-600 px-6">
                      <span className="uppercase text-sm font-bold text-amber-500">Chain</span>
                      <Image
                        src="/images/chain-solana.png"
                        alt="Solana"
                        width={100}
                        height={20}
                      />
                    </div>
                    <div className="flex items-center gap-2 flex-col border-r border-neutral-600 px-6">
                      <span className="uppercase text-sm font-bold text-amber-500">Max Supply</span>
                      <span className="text-white text-sm font-bold whitespace-nowrap">10,000,000,000 VGT</span>
                    </div>
                    <div className="flex items-center gap-2 flex-col border-r border-neutral-600 px-6">
                      <span className="uppercase text-sm font-bold text-amber-500">Design</span>
                      <span className="text-white text-sm font-bold whitespace-nowrap">Fixed, deflationary</span>
                    </div>
                    <div className="flex items-center gap-2 flex-col border-r border-neutral-600 px-6">
                      <span className="uppercase text-sm font-bold text-amber-500">Token</span>
                      <span className="text-white text-sm font-bold whitespace-nowrap">Viogram (VGT)</span>
                    </div>
                    <div className="flex items-center gap-2 flex-col border-r border-neutral-600 px-6">
                      <span className="uppercase text-sm font-bold text-amber-500">Contract Address</span>
                      <span className="text-white text-sm font-bold whitespace-nowrap">v4VWLfeAWhVfhAeFBpKebRsfX9NbFNf93duDq7vCVGT</span>
                    </div>
                    <div className="flex items-center gap-2 flex-col px-6">
                      <span className="uppercase text-sm font-bold text-amber-500">Audited By</span>
                      <div className="flex items-center gap-2 justify-center">
                        <Image src="/images/audited-by-1.png" alt="Audited by" width={28} height={28} />
                        <Image src="/images/audited-by-2.png" alt="Audited by" width={28} height={28} />
                        <Image src="/images/audited-by-3.png" alt="Audited by" width={28} height={28} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-32 bg-[#F4F1EB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <Card className="bg-transparent border-none shadow-none justify-start items-start">
                <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                  Dual-Token architecture
                </h3>
                <Button
                  className="bg-linear-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-0 rounded-full px-8 py-6 text-base lg:text-lg font-medium"
                >
                  Participate in Token Sale →
                </Button>
              </Card>
              <Card className="bg-white shadow-none border-none p-0">
                <CardContent className="p-8">
                  <div className="flex flex-col mb-6">
                    <Image src="/images/vgt-token.png" alt="VGT Token" width={92} height={82} />
                    <h5 className="text-lg font-bold text-neutral-900 uppercase mt-8 mb-3">VGT</h5>
                    <h4 className="text-2xl font-bold text-neutral-900 uppercase">
                      GOVERNANCE AND VALUE TOKEN
                    </h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 mt-1"><ArrowRightCircle className="h-8 w-8" /></span>
                      <span className="text-neutral-900">Voting on protocol decisions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 mt-1"><ArrowRightCircle className="h-8 w-8" /></span>
                      <span className="text-neutral-900">Staking for rewards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 mt-1"><ArrowRightCircle className="h-8 w-8" /></span>
                      <span className="text-neutral-900">Ecosystem governance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-none border-none p-0">
                <CardContent className="p-8">
                  <div className="flex flex-col mb-6">
                    <Image src="/images/vgc-token.png" alt="VGC Token" width={92} height={82} />
                    <h5 className="text-lg font-bold text-neutral-900 uppercase mt-8 mb-3">VGC</h5>
                    <h4 className="text-2xl font-bold text-neutral-900 uppercase">
                      UTILITY AND REWARDS COIN
                    </h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 mt-1"><ArrowRightCircle className="h-8 w-8" /></span>
                      <span className="text-neutral-900">Gas fees for transactions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 mt-1"><ArrowRightCircle className="h-8 w-8" /></span>
                      <span className="text-neutral-900">Rewards for engagement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400 mt-1"><ArrowRightCircle className="h-8 w-8" /></span>
                      <span className="text-neutral-900">Access to premium features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

