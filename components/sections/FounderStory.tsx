// components/sections/FounderStory.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FounderStoryProps = {
  scrollToSection: (id: string) => void;
};

const FounderStory: React.FC<FounderStoryProps> = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="founder-short" className="py-16 bg-nature-cream" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="section-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            OUR STORY
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-nature-gold mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="text-lg mb-8 text-nature-mahogany"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Founded with a passion for nature and community, Al Jourd was
            established to create a sanctuary where people can reconnect with
            the natural world while preserving the beauty of Lebanon's
            mountains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              className="btn-luxury"
              onClick={() => scrollToSection("about")}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderStory;
