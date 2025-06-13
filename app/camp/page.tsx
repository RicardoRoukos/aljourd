// app/camp/page.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import CampGallery from "./campGallery";

export default function CampPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/banner.webp"
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
            Our Camp
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
          Nestled at 2200m, our eco-camp offers a blend of nomadic charm and
          modern comfort. Sleep under the stars in traditional tents or eco
          domes, surrounded by Lebanon’s raw wilderness.
        </motion.p>
      </section>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <CampGallery />
      </motion.div>
    </>
  );
}
