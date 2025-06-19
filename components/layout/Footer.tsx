"use client";

import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-forest text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Logo + Contact */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Al Jourd Logo"
            width={120}
            height={120}
            className="mb-4"
          />

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-nature-gold" />
              <span>Joud Mrebine – North Lebanon</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-nature-gold" />
              <span>+961 3 00 78 04</span>
            </div>
          </div>
        </div>

        {/* Middle Spacer or Motto */}
        <div className="hidden md:flex flex-col justify-center items-center text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2129467450655!2d36.19866917566049!3d34.38388197301981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1522159279889abd%3A0xe162322d1a4c0b6!2sAl%20Jourd%20Nature%20Reserve!5e0!3m2!1sen!2slb!4v1716222350996!5m2!1sen!2slb"
            width="100%"
            height="200"
            className="rounded-md border-none"
            loading="lazy"
          />
        </div>

        {/* Right: Map */}

        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-end items-end text-sm">
          {/* <div className="flex gap-6 mb-4 md:mb-0">
            <Link href="/" className="hover:text-nature-gold transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-nature-gold transition">
              About
            </Link>
            <Link href="/camp" className="hover:text-nature-gold transition">
              Camp
            </Link>
            <Link
              href="/ecotourism"
              className="hover:text-nature-gold transition"
            >
              Eco Tourism and activities
            </Link>
            <Link href="/find-us" className="hover:text-nature-gold transition">
              Find Us
            </Link>
          </div> */}
          <div className="flex-col gap-4">
            <div>
              {" "}
              <p className="hover:text-nature-gold transition">Follow Us</p>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/aljourd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-10 w-10 hover:text-nature-gold transition" />
              </a>
              <a
                href="https://www.facebook.com/Aljourdreserve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-10 w-10 hover:text-nature-gold transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="mt-10 border-t border-white/20 pt-6">
        <p className="text-center mt-6 text-xs text-white/60">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://somlb.com" className="hover:underline">
            Smart online marketing S.A.R.L. All rights reserved.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
