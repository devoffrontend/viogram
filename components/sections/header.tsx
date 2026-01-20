"use client";

import { Button } from "@/components/ui/button";
import { Menu, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-14">
          <div className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="VIOGRAM Logo"
              width={170}
              height={44}
              className="w-[170px] h-11"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#about" className="text-white hover:text-gray-300 transition-colors text-sm">
              About
            </a>
            <a href="#ecosystem" className="text-white hover:text-gray-300 transition-colors text-sm">
              Ecosystem
            </a>
            <a href="#devs-updates" className="text-white hover:text-gray-300 transition-colors text-sm">
              Devs Updates
            </a>
            <a href="#tokenomics" className="text-white hover:text-gray-300 transition-colors text-sm">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-white hover:text-gray-300 transition-colors text-sm">
              Roadmap
            </a>
            <a href="#community" className="text-white hover:text-gray-300 transition-colors text-sm">
              Community & News
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors text-sm">
              Contact
            </a>
          </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Button
              className="hidden sm:flex bg-transparent border border-white/20 text-white hover:bg-white/10 text-sm px-4 py-2 rounded-full"
            >
              Participate in Token Sale
            </Button>
            
            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm px-3 py-2"
              >
                <Globe className="w-4 h-4" />
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {languageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-black/95 border border-white/20 rounded-lg shadow-lg py-2">
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm">
                    English
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm">
                    Español
                  </button>
                  <button className="w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm">
                    中文
                  </button>
                </div>
              )}
            </div>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">
                About
              </a>
              <a href="#ecosystem" className="text-white hover:text-gray-300 transition-colors">
                Ecosystem
              </a>
              <a href="#devs-updates" className="text-white hover:text-gray-300 transition-colors">
                Devs Updates
              </a>
              <a href="#tokenomics" className="text-white hover:text-gray-300 transition-colors">
                Tokenomics
              </a>
              <a href="#roadmap" className="text-white hover:text-gray-300 transition-colors">
                Roadmap
              </a>
              <a href="#community" className="text-white hover:text-gray-300 transition-colors">
                Community & News
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">
                Contact
              </a>
              <Button className="bg-transparent border border-white/20 text-white hover:bg-white/10">
                Participate in Token Sale
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

