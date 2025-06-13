"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    title: "Hiking",
    price: "From $50 / Group",
    image: "/images/hiking.webp",
    description:
      "Guided hikes tailored to your group’s size and interest, exploring nearby forests and peaks. Prices vary by group size. Led by local mountain guides and coordinated with homestays or eco-lodges.",
  },
  {
    title: "Art Workshop",
    price: "$12 / Person",
    image: "/images/art.webp",
    description:
      "Led by Hussein, abstract artist and professor, using all professional painting tools and materials. Guests artists occasionally hosted. Inspired by the surrounding nature.",
  },
  {
    title: "Stargazing Session",
    price: "$10 / Person (Min 4)",
    image: "/images/stars.webp",
    description:
      "Held weekly in our dark sky zone. Organized with the Lebanese Astronomy Group. Private or public sessions available. Ideal for astrophotography and night sky lovers.",
  },
  {
    title: "Yoga & Holistic Sessions",
    price: "$15 / Person (Min 4)",
    image: "/images/yoga.webp",
    description:
      "We host weekly holistic talks, yoga & meditation sessions. Private sessions tailored to your group are also available. Check our summer calendar for updates.",
  },
  {
    title: "Adopt a Juniper",
    price: "$30 / Tree",
    image: "/images/juniper.webp",
    description:
      "Plant and adopt a 3-year-old Juniper tree in our private reserve. Receive a certificate and GPS coordinates. Contribute to long-term conservation.",
  },
  {
    title: "Youth Workshops",
    price: "Custom",
    image: "/images/workshops.webp",
    description:
      "Educational workshops on biodiversity, upcycling, DIY, and sustainable living. Great for school groups and awareness campaigns. Tailored to youth needs.",
  },
];

const ActivityCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-nature-sage py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4"
      >
        <h2 className="section-heading text-center mb-12">
          Ecotourism & Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{activity.title}</h4>
                <p className="text-sm text-nature-mahogany mb-3">
                  {activity.description}
                </p>
                <p className="font-bold text-nature-olive">{activity.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ActivityCards;
