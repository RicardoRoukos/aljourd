"use client";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/camp", label: "Camp" },
  { href: "/ecotourism", label: "Eco Tourism and activities" },
  { href: "/find-us", label: "Find Us" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">
          {" "}
          <Image
            src={"/images/logo.png"}
            alt="Al Jourd Logo"
            className="object-cover"
            width={100}
            height={100}
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "transition-colors hover:text-nature-gold",
                  pathname === href && "text-nature-gold underline"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-nature-charcoal"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-sm font-medium">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block text-nature-charcoal hover:text-nature-gold",
                    pathname === href && "text-nature-gold underline"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
