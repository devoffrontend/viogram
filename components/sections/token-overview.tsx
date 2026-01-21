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
            <Card className="bg-gray-900/50 border-amber-500/40">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-y-8 justify-center">
                  <div className="flex items-center gap-3 flex-col w-[240px] md:border-r border-neutral-600 px-4">
                    <span className="uppercase text-base font-bold text-amber-500">Chain</span>
                    <Image
                      src="/images/chain-solana.png"
                      alt="Solana"
                      width={140}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-3 flex-col w-[240px] md:border-r border-neutral-600 px-4">
                    <span className="uppercase text-base font-bold text-amber-500">Max Supply</span>
                    <span className="text-white text-lg font-bold">10,000,000,000 VGT</span>
                  </div>
                  <div className="flex items-center gap-3 flex-col w-[240px] md:border-r border-neutral-600 px-4">
                    <span className="uppercase text-base font-bold text-amber-500">Design</span>
                    <span className="text-white text-lg font-bold">Fixed, deflationary</span>
                  </div>
                  <div className="flex items-center gap-3 flex-col w-[240px] md:border-r border-neutral-600 px-4">
                    <span className="uppercase text-base font-bold text-amber-500">Token</span>
                    <span className="text-white text-lg font-bold">Viogram (VGT)</span>
                  </div>
                  <div className="flex items-center gap-3 flex-col w-[240px] px-4 md:border-r border-neutral-600">
                    <span className="uppercase text-base font-bold text-amber-500">audited by</span>
                    <div className="flex items-center gap-2 justify-center">
                      <Image src="/images/audited-by-1.png" alt="Audited by" width={30} height={30} />
                      <Image src="/images/audited-by-2.png" alt="Audited by" width={30} height={30} />
                      <Image src="/images/audited-by-3.png" alt="Audited by" width={30} height={30} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-col w-[240px] px-4">
                    <span className="uppercase text-base font-bold text-amber-500">Contract Address</span>
                    <span className="text-white text-lg font-bold break-all max-w-full text-center">v4VWLfeAWhVfhAeFBpKebRsfX9NbFNf93duDq7vCVGT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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

