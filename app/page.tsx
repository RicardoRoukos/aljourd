// This is a cleaned-up and modularized version of your main homepage file
// We'll split this into reusable sections and remove inline content blocks.

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Hero from "../components/sections/HeroPictures";
import FounderStory from "../components/sections/FounderStory";
import FeaturedCards from "../components/sections/FeaturedCards";
import Amenities from "../components/sections/Amenities";
import About from "../components/sections/About";
import Camp from "../components/sections/Camp";
import Activities from "../components/sections/Activities";
import Events from "../components/sections/Events";
import FindUs from "../components/sections/FindUs";
import Footer from "../components/layout/Footer";
// import Header from "../components/layout/Header";
import Reviews from "@/components/sections/Reviews";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    "/images/banner-1.webp",
    "/images/banner-2.webp",
    "/images/banner-3.webp",
  ];

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    camp: useRef(null),
    activities: useRef(null),
    events: useRef(null),
    findUs: useRef(null),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
  //     setLastScrollY(currentScrollY);

  //     Object.entries(sectionRefs).forEach(([key, ref]) => {
  //       if (ref.current) {
  //         const rect = ref.current.getBoundingClientRect();
  //         if (rect.top <= 50 && rect.bottom >= 50) {
  //           setActiveSection(key);
  //         }
  //       }
  //     });
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-nature-cream text-nature-charcoal">
      <Navbar />

      <main>
        <Hero
          sectionRef={sectionRefs.hero}
          bannerImages={bannerImages}
          currentBanner={currentBanner}
          scrollToSection={scrollToSection}
        />
        <FounderStory scrollToSection={scrollToSection} />
        <FeaturedCards scrollToSection={scrollToSection} />
        <Amenities />
        <Reviews />
        {/* <About sectionRef={sectionRefs.about} />
        <Camp sectionRef={sectionRefs.camp} /> */}
        {/* <Activities sectionRef={sectionRefs.activities} /> */}
        {/* <Events sectionRef={sectionRefs.events} />
        <FindUs
          sectionRef={sectionRefs.findUs}
          scrollToSection={scrollToSection}
        /> */}
      </main>
    </div>
  );
}
