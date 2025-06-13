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
    image: "/images/thecampsite.webp",
    title: "The Campsite",
    description:
      "Spend a night or more in our secure, eco-friendly campsite designed with all amenities to host up to 40 guests in authentic, traditional nomadic whool tents",
    buttonText: "Explore Camp",
  },
  {
    id: "activities",
    image: "/images/activities.webp",
    title: "Ecotourism & Activities",
    description:
      "A range of educational and eco-friendly activities for all ages designed to offer hands-on experiences and immerse you in the pristine nature and landscape",
    buttonText: "Discover Activities",
  },
  {
    id: "dining",
    image: "/images/restaurant.webp",
    title: "Community Space & Restaurant",
    description:
      "The perfect setting to enjoy delicious homemade meals prepared with fresh, locally sourced ingredients, experience authentic local hospitality and connect with linkeminded people",
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
              className="group flex flex-col h-full bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-80 overflow-hidden rounded-t-lg">
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

              <div className="flex flex-col flex-grow justify-between p-6">
                <p className="text-nature-mahogany mb-4">{card.description}</p>
                <Button
                  className="btn-luxury w-full mt-auto"
                  onClick={() => scrollToSection(card.id)}
                >
                  {card.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedCards;
