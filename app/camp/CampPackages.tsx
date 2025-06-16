// components/sections/CampPackages.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const packages = [
  {
    category: "Full Meals + Sleeping",
    options: [
      {
        title: "In Our Tent",
        price: "$70 / Adult / Night",
        image: "/images/acamp1.webp",
        description:
          "Breakfast, Lunch, Dinner, 1 spot in shared furnished tent with mattress, sheets, pillows, cover, electricity access, shared showers & toilets. Alcohol extra.",
      },
      {
        title: "In Your Tent",
        price: "$50 / Adult / Night",
        image: "/images/acamp2.webp",
        description:
          "Breakfast, Lunch, Dinner, land rental for your tent, electricity access, shared showers & toilets. Alcohol extra.",
      },
    ],
  },
  {
    category: "Camping Only",
    options: [
      {
        title: "In Our Tent",
        price: "$25 / Person / Night",
        image: "/images/acamp3.webp",
        description:
          "1 spot in shared furnished tent with mattress, sheets, pillows, cover, electricity access, shared showers & toilets.",
      },
      {
        title: "In Your Tent",
        price: "$10 / Person / Night",
        image: "/images/acamp4.webp",
        description:
          "Land rental for your tent, access to electricity, shared showers & toilets.",
      },
    ],
  },
  {
    category: "Meals Only",
    options: [
      {
        title: "Breakfast",
        price: "$10 / Adult",
        image: "/images/rest1.webp",
        description:
          "Foul, Manakich, Kechek, eggs, seasonal vegetables, labneh, cheese, olives, makdous, jam, tea, coffee, water.",
      },
      {
        title: "Lunch or Dinner",
        price: "$20 / Adult",
        image: "/images/rest2.webp",
        description:
          "Homemade stew or grilled trout/beef, salad, hommous, moutabbal, potatoes, vegetables, soft drinks, water. Alcohol extra.",
      },
    ],
  },
];

const CampPackages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-nature-cream py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <h2 className="section-heading text-center mb-12">Packages & Rates</h2>

        {packages.map((group, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-xl font-serif font-semibold text-nature-mahogany mb-6 text-center">
              {group.category}
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                {group.options.map((opt, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                  >
                    <div className="relative h-56">
                      <Image
                        src={opt.image}
                        alt={opt.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-2">
                        {opt.title}
                      </h4>
                      <p className="text-sm text-nature-mahogany mb-3">
                        {opt.description}
                      </p>
                      <p className="font-bold text-nature-olive">{opt.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <p className="text-center text-xl font-bold mt-12 text-nature-charcoal/80">
          50% discount for Kids under 12 on all accommodation and meals. <br />
          10% discount for stays of 2 nights and above for both adults & kids.
        </p>
      </motion.div>
    </section>
  );
};

export default CampPackages;
