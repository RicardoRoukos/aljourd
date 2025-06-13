// components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { ChevronDown, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

type HeroProps = {
  bannerImages: string[];
  currentBanner: number;
  scrollToSection: (id: string) => void;
  sectionRef: React.RefObject<HTMLDivElement>;
};

const Hero: React.FC<HeroProps> = ({
  bannerImages,
  currentBanner,
  scrollToSection,
  sectionRef,
}) => {
  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Banners */}
      <div className="absolute inset-0 z-0">
        {bannerImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentBanner === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`Al Jourd Mountains ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-3xl">
          <Image
            src={"/images/logo.png"}
            alt="Al Jourd Logo"
            className="object-cover"
            width={200}
            height={200}
          />
          <div className="h-1 bg-nature-gold mb-6" />
          <p className="text-xl md:text-2xl text-white mb-8 max-w-lg font-light">
            A unique camping experience in the heart of Lebanon's mountains.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              className="bg-nature-forest hover:bg-nature-mahogany text-white rounded-none px-8 py-6 text-lg transition-all duration-300 border-b-2 border-nature-gold"
              onClick={() => scrollToSection("camp")}
            >
              Explore the campsite
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2 font-light tracking-wider">
            Scroll Down
          </span>
          <ChevronDown className="h-6 w-6 text-white" />
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
