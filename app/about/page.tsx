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
          intersecting between the regions of Dennieh, Hermel and Akkar. This
          sanctuary is a tribute to my only son Ghandi and his cousin Houssam,
          who tragically passed away few years ago. Today, me, my wife Rima and
          our two daughters Ghazal and Ghia are commited to preserving the
          beauty of this land, share its wonder with visitors from all over the
          world and preserving the memory of Ghandi & Houssam that lives on in
          the spirit of this reserve. Surrounded by centuries old Juniper trees
          our land is embeded in the pristine and raw landscape of the unspoilt
          highands of North Lebanon. It benefits from a unique panorama
          overlooking Ouadi El Juhannam, the mountains of Dennieh and Akkar to
          the sea.
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
          Our Hidden gem is a safe sanctuary for both the soul and the
          environment, far from everything, where guests can escape the hustle
          and bustle of urban life and reconnect with their roots and nature in
          a meaningful and sustainable way. Through eco-friendly practices, and
          a deep respect for the local ecosystem, we aspire to be a leading
          example for regenerative tourism in our region. Join us on this
          journey as we work towards creating a sanctuary where nature thrives,
          memories are made, and the legacy of Ghandi and Houssam lives on
          forever.
        </motion.p>
      </div>
    </section>
  );
}
