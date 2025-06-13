// app/camp/page.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import BookNowCta from "@/components/sections/CTA";
import EcoTourismPackages from "./ActivityCards";
import ActivityCards from "./ActivityCards";

export default function EcoTourisn() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/acamp3.webp"
          alt="Camp Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl font-serif font-bold"
          >
            Eco Tourism and Activities
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 max-w-5xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-serif font-semibold mb-4"
        >
          Experience Rustic Comfort
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-nature-mahogany"
        >
          Al Jourd is dedicated to supporting the local community, preserving,
          and raising awareness about the biodiversity and beauty of our
          environment. That's why we've curated a range of educational and
          eco-friendly activities designed to offer hands-on experiences and
          immerse you in the pristine landscape. All activities can be booked
          privately or you an also keep an eye on our social media pages for
          public events you can join.
        </motion.p>
      </section>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <ActivityCards />
      </motion.div>

      <BookNowCta />
    </>
  );
}
