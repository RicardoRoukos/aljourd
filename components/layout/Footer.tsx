// components/layout/Footer.tsx

import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-forest text-white py-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Block */}
        <div className="flex flex-col md:flex-row items-start gap-6 w-full md:w-auto">
          {/* Contact Info */}
          <div className="text-sm flex-1">
            <Image
              src={"/images/logo.png"}
              alt="Al Jourd Logo"
              className="object-cover mb-2"
              width={120}
              height={120}
            />
            <p className="mb-1">
              Reconnect with nature in the heart of Lebanon
            </p>
            <div className="mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-nature-gold" />
              <span>Joud Mrebine – North Lebanon</span>
            </div>
            <div className="mb-1 flex items-center gap-2">
              <Phone className="w-4 h-4 text-nature-gold" />
              <span>+961 3 00 78 04</span>
            </div>
            {/* <div className="mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-nature-gold" />
              <span>info@aljourd.com</span>
            </div> */}
          </div>

          {/* Google Map Embed */}
          <div className="w-full max-w-xs mt-4 md:mt-2 self-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2129467450655!2d36.19866917566049!3d34.38388197301981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1522159279889abd%3A0xe162322d1a4c0b6!2sAl%20Jourd%20Nature%20Reserve!5e0!3m2!1sen!2slb!4v1716222350996!5m2!1sen!2slb"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: "0.5rem", marginTop: "8rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <Link href="/" className="hover:text-nature-gold transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-nature-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/camp"
            className="hover:text-nature-gold transition-colors"
          >
            Camp
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-8 w-8 hover:text-nature-gold transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-8 w-8 hover:text-nature-gold transition-colors" />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-white/70">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://somlb.com" className="hover:underline">
          Smart online marketing S.A.R.L. All rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
