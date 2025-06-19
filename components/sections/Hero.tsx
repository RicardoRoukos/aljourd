"use client";

import { ChevronDown, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

type HeroProps = {
  scrollToSection: (id: string) => void;
  sectionRef: React.RefObject<HTMLDivElement>;
};

const Hero: React.FC<HeroProps> = ({ scrollToSection, sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/banner-1.webp"
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-4 px-4 w-full">
        <Link
          href="/camp"
          className="bg-nature-forest hover:bg-nature-mahogany text-white text-center rounded-none px-8 py-4 text-lg transition-all duration-300 border-b-2 border-nature-gold"
        >
          Explore the campsite
        </Link>
        <div className="flex flex-col items-center">
          <span className="text-white text-sm font-light tracking-wider">
            Scroll Down
          </span>
          <ChevronDown className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-8 w-8 text-white hover:text-nature-gold transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-8 w-8 text-white hover:text-nature-gold transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
