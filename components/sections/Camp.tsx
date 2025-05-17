// components/sections/Camp.tsx

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface CampProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Camp: React.FC<CampProps> = ({ sectionRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="camp"
      ref={(el) => {
        ref.current = el;
        if (sectionRef) sectionRef.current = el;
      }}
      className="py-20 bg-white text-nature-charcoal"
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="section-heading mb-6">Our Camp</h2>
            <div className="h-1 w-16 bg-nature-gold mb-6" />

            <p className="text-lg mb-4">
              Al Jourd features a range of camping options, from traditional
              tent pitches to fully equipped setups with mattresses, lighting,
              and cozy blankets. All of our campsites offer stunning views and
              immediate access to nature.
            </p>

            <p className="text-lg">
              Whether you’re a solo traveler, couple, or group, we have the
              perfect setting for your next mountain getaway.
            </p>
          </motion.div>

          <motion.div
            className="relative h-80 w-full rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/camp.jpg"
              alt="Al Jourd Camping Area"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Camp;
