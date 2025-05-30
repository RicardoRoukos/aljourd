// components/layout/Header.tsx
"use client";

import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
import clsx from "clsx";

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  // scrollDirection: "up" | "down";
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "camp", label: "Camp" },
  { id: "activities", label: "Activities" },
  { id: "find-us", label: "Find Us" },
];

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  // scrollDirection,
  activeSection,
  scrollToSection,
}: HeaderProps) {
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleSticky = () => setIsSticky(window.scrollY > 10);
  //   window.addEventListener("scroll", handleSticky);
  //   return () => window.removeEventListener("scroll", handleSticky);
  // }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        "bg-white/80 backdrop-blur shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">AL JOURD</div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={clsx(
                "transition-colors duration-200 hover:text-nature-gold",
                activeSection === item.id && "text-nature-gold underline"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={clsx(
                  "text-left text-sm font-medium",
                  activeSection === item.id && "text-nature-gold underline"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
