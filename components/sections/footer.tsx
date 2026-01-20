import { Facebook, Twitter, MessageCircle, Users } from "lucide-react";

const footerLinks = {
  About: ["About", "Partners", "Tokenomics", "Roadmap"],
  Resources: ["Whitepaper", "Terms", "Privacy", "Contact"],
  Community: ["Blog", "Docs"],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              VIOGRAM
            </h1>
            <p className="text-gray-400 text-sm">
              © 2024 Viogram. All rights reserved.
            </p>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.About.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.Community.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-6 pt-8 border-t border-amber-500/20">
          <a
            href="#"
            className="text-gray-400 hover:text-amber-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-amber-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-amber-400 transition-colors"
            aria-label="Telegram"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-amber-400 transition-colors"
            aria-label="Discord"
          >
            <Users className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

