// components/layout/Footer.tsx

import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-nature-forest text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-wider mb-2">AL JOURD</h3>
          <p className="text-sm">
            Reconnect with nature in the heart of Lebanon
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {[
            { id: "about", label: "About" },
            { id: "camp", label: "Camp" },
            { id: "activities", label: "Activities" },
            { id: "events", label: "Events" },
            { id: "find-us", label: "Find Us" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-nature-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 hover:text-nature-gold transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-5 w-5 hover:text-nature-gold transition-colors" />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-white/70">
        &copy; {new Date().getFullYear()} Al Jourd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
