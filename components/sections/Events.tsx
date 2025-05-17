// components/sections/Events.tsx

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface EventsProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Events: React.FC<EventsProps> = ({ sectionRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="events"
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
            <h2 className="section-heading mb-6">Private Events</h2>
            <div className="h-1 w-16 bg-nature-gold mb-6" />

            <p className="text-lg mb-4">
              Looking for a unique venue for your private event? Al Jourd
              provides an unforgettable natural setting for birthdays,
              engagements, retreats, and special gatherings.
            </p>

            <p className="text-lg">
              We offer customizable setups, catering options, and the backdrop
              of Lebanon’s breathtaking wilderness.
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
              src="/images/events.jpg"
              alt="Events at Al Jourd"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
