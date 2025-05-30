"use client";

import { motion } from "framer-motion";
import AboutGallery from "./aboutGallery";

export default function AboutPage() {
  return (
    <section id="about" className="py-20 bg-nature-cream text-nature-charcoal">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          className="section-heading mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Al Jourd
        </motion.h2>

        <motion.div
          className="h-1 w-16 bg-nature-gold mx-auto mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Hello! I’m Hussein Allaw, founder and protector of Al Jourd Ghandi &
          Houssam Allaw Nature Reserve, & your host at Al Jourd Ecotourism &
          Campsite project nestled at 2200 m altitude in the remote highlands
          intersecting between the regions of Dennieh, Hermel and Akkar...
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <AboutGallery />
        </motion.div>

        <motion.p
          className="text-lg mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Surrounded by centuries old Juniper trees our land is embeded in the
          pristine and raw landscape of the unspoilt highands of North
          Lebanon...
        </motion.p>
      </div>
    </section>
  );
}
