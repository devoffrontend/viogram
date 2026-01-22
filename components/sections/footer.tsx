import { Mail } from "lucide-react";
import Image from "next/image";

/**
 * Footer Component
 * 
 * Displays the site footer with navigation links, social icons, and legal info.
 * 
 * Usage:
 * - Import and place at the very bottom of the page
 * - Dark background (#1E1E1E)
 * - Contains logo, disclaimer, email, navigation columns, social icons
 * 
 * Structure:
 * - Top row: Logo/disclaimer, navigation columns, social icons
 * - Bottom row: Legal links and copyright
 */

const navLinks = {
  column1: [
    { label: "About", href: "#about" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  column2: [
    { label: "Whitepaper", href: "#whitepaper" },
    { label: "Lightpaper", href: "#lightpaper" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Left: Logo and Disclaimer */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/footer-logo.png"
                alt="VIOGRAM Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <div className="space-y-4 text-gray-400 text-xs leading-relaxed">
              <p>
                This website is for informational purposes only and does not constitute financial
                advice or an offer of securities. Participation involves risk and is subject to
                applicable laws and regulations.
              </p>
              <p>
                Digital assets and cryptocurrencies are highly volatile and carry significant risk,
                including the possible loss of your entire investment. Only participate if you
                understand the risks and can afford to lose the funds committed.
              </p>
            </div>

            <a
              href="mailto:tokensale@viogram.info"
              className="inline-flex items-center gap-2 text-[#D97706] hover:text-[#F59E0B] transition-colors text-sm"
            >
              <Mail className="h-4 w-4" />
              tokensale@viogram.info
            </a>
          </div>

          {/* Center: Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                {navLinks.column1.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {navLinks.column2.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Social Icons and Legal */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-8">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Medium"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-2 text-gray-400 text-xs">
              <a href="#terms-of-service" className="hover:text-white transition-colors">
                Terms of service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms-of-use" className="hover:text-white transition-colors">
                Terms of use
              </a>
              <span className="text-gray-600">|</span>
              <a href="#privacy-policy" className="hover:text-white transition-colors">
                Privacy policy
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              © 2026 Viogram. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
