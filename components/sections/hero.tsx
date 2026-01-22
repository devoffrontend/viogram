"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 80,
    hours: 23,
    minutes: 38,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900/50 via-amber-900/10 to-gray-950 text-white pt-20 lg:pt-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">VIOGRAM</span>
              <br />
              <span className="text-gray-400">TOKEN SALE</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
              Building the Participation Economy Infrastructure
            </p>

            <p className="text-white text-base lg:text-lg leading-relaxed max-w-2xl">
              Viogram is a next-generation Social Growth & Participation Economy Infrastructure that transforms digital activity into measurable economic value. It unifies social interaction, commerce, fintech, and real-world assets into one scalable ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-0 rounded-full px-8 py-6 text-base lg:text-lg font-medium"
              >
                Participate in Token Sale →
              </Button>
              <Button
                className="bg-gray-800 hover:bg-gray-700 text-white border-0 rounded-full px-8 py-6 text-base lg:text-lg font-medium"
              >
                Read Whitepaper
              </Button>
            </div>

            {/* Countdown */}
            <div className="pt-4 space-y-4">
              <p className="text-white text-xl lg:text-2xl font-semibold">
                PUBLIC SALE BEGINS APRIL 1, 2026
              </p>
              <div className="flex gap-3 lg:gap-4">
                <div
                  className="relative rounded-lg p-[2px]"
                  style={{
                    background: 'linear-gradient(to bottom, #FBB02BB2 0%, #6b7280 90%, #FBB02BB2 100%)'
                  }}
                >
                  <div className="bg-gradient-to-b from-[#FBB02BB2] to-black rounded-lg px-4 py-3 min-w-[90px] text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white">{timeLeft.days}</div>
                    <div className="text-xs lg:text-sm text-gray-400 uppercase mt-1">DAYS</div>
                  </div>
                </div>
                <div
                  className="relative rounded-lg p-[2px]"
                  style={{
                    background: 'linear-gradient(to bottom, #FBB02BB2 0%, #6b7280 90%, #FBB02BB2 100%)'
                  }}
                >
                  <div className="bg-gradient-to-b from-[#FBB02BB2] to-black rounded-lg px-4 py-3 min-w-[90px] text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white">{timeLeft.hours}</div>
                    <div className="text-xs lg:text-sm text-gray-400 uppercase mt-1">HOURS</div>
                  </div>
                </div>
                <div
                  className="relative rounded-lg p-[2px]"
                  style={{
                    background: 'linear-gradient(to bottom, #FBB02BB2 0%, #6b7280 90%, #FBB02BB2 100%)'
                  }}
                >
                  <div className="bg-gradient-to-b from-[#FBB02BB2] to-black rounded-lg px-4 py-3 min-w-[90px] text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white">{timeLeft.minutes}</div>
                    <div className="text-xs lg:text-sm text-gray-400 uppercase mt-1">MINUTES</div>
                  </div>
                </div>
                <div
                  className="relative rounded-lg p-[2px]"
                  style={{
                    background: 'linear-gradient(to bottom, #FBB02BB2 0%, #6b7280 90%, #FBB02BB2 100%)'
                  }}
                >
                  <div className="bg-gradient-to-b from-[#FBB02BB2] to-black rounded-lg px-4 py-3 min-w-[90px] text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white">{timeLeft.seconds}</div>
                    <div className="text-xs lg:text-sm text-gray-400 uppercase mt-1">SECONDS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative w-full">
            <div className="relative rounded-lg overflow-hidden" style={{ width: 'calc(50vw - 2rem)', marginRight: 'calc(2rem - 50vw)' }}>
              <Image
                src="/images/hero-img.png"
                alt="VIOGRAM Hero"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-6 border border-amber-500/40 rounded-lg mt-8 mb-16">
          <h6 className="text-white text-lg font-semibold">Private Sale is Live Now!</h6>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/etherium.png" alt="Etherium" width={24} height={24} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/tether.png" alt="Tether" width={24} height={24} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/binance.png" alt="Binance" width={24} height={24} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/solana.png" alt="Solana" width={24} height={24} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/bitcoin.png" alt="Bitcoin" width={24} height={24} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/visa.png" alt="Visa" width={38} height={12} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/master-card.png" alt="Mastercard" width={29} height={20} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/google-pay.png" alt="Google Pay" width={42} height={16} />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center w-[60px] h-[40px] border bg-neutral-600 border-neutral-500 rounded-sm">
              <Image src="/images/apple-pay.png" alt="Apple Pay" width={42} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
