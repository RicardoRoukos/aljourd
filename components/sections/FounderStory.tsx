import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
          <motion.div
            className="h-1 w-16 bg-nature-gold mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />

          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 text-left md:text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Image
              src="/images/hussein2.webp"
              alt="Hussein Allaw"
              width={180}
              height={180}
              className="rounded-full object-cover border-4 border-nature-gold shadow-md"
            />

            <p className="text-lg text-nature-mahogany">
              <span className="italic">
                My family and I warmly welcome you to our campsite and
                ecotourism project, nestled in the remote highlands of Jourd
                Mrebine in North Lebanon. Our sanctuary offers a safe and
                peaceful environment, immersed in a pristine landscape and
                surrounded by ancient Juniper trees. It’s a place where guests
                can truly disconnect from city life and reconnect with their
                roots and nature in a meaningful, sustainable way.
              </span>{" "}
              — Hussein Allaw
            </p>
          </motion.div>

          <motion.div
            className="mt-8"
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
