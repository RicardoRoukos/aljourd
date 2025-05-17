// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const sections = ["hero", "about", "activities", "events", "contact"];

export const Navbar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <ul className="flex justify-center gap-8 py-3 text-sm font-medium">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              className={clsx(
                "transition-colors duration-200 hover:text-blue-600",
                active === sec && "text-blue-600 font-semibold"
              )}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
