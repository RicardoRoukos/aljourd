// components/sections/FeaturedCards.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FeaturedCardsProps {
  scrollToSection: (id: string) => void;
}

const cards = [
  {
    id: "camp",
    image: "/images/camp.jpg",
    title: "Our Camp",
    description:
      "Experience the perfect blend of rustic camping and modern comfort at Al Jourd.",
    buttonText: "Explore Camp",
  },
  {
    id: "activities",
    image: "/images/activities.jpg",
    title: "Activities",
    description:
      "Immerse yourself in nature through our carefully curated ecotourism activities.",
    buttonText: "Discover Activities",
  },
  {
    id: "dining",
    image: "/images/food.jpg",
    title: "Food & Dining",
    description:
      "Enjoy delicious local cuisine prepared with fresh ingredients from our garden.",
    buttonText: "Learn About Dining",
  },
];

const FeaturedCards: React.FC<FeaturedCardsProps> = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="featured" className="py-16 bg-nature-sage" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-80 overflow-hidden mb-6 shadow-lg rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-serif font-medium text-white">
                    {card.title}
                  </h3>
                </div>
              </div>

              <p className="text-nature-mahogany mb-4">{card.description}</p>

              <Button
                className="btn-luxury w-full"
                onClick={() => scrollToSection(card.id)}
              >
                {card.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedCards;
