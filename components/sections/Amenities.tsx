// components/sections/Amenities.tsx

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const amenities = [
  {
    label: "Nature Lovers Welcome",
    image: "/images/naturelovers.png",
  },
  {
    label: "Dogs Allowed",
    image: "/images/dogsallowed.png",
  },
  {
    label: "WiFi Available",
    image: "/images/wifiavailable.png",
  },
  {
    label: "Showers Available",
    image: "/images/showersavailable.png",
  },
  {
    label: "Campfire Space",
    image: "/images/ecostay.png",
  },
];

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section id="amenities" className="py-16 bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-6 text-center">CAMP AMENITIES</h2>
          <div className="h-1 w-16 bg-nature-gold mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {amenities.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 bg-nature-forest rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif font-medium mb-2">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Amenities;
