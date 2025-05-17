// components/sections/Activities.tsx

import React from "react";
import Image from "next/image";

interface ActivitiesProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const Activities: React.FC<ActivitiesProps> = ({ sectionRef }) => {
  return (
    <section
      id="activities"
      ref={sectionRef}
      className="py-20 bg-nature-cream text-nature-charcoal"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/activities.jpg"
              alt="Ecotourism Activities"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="section-heading mb-6">Activities</h2>
            <div className="h-1 w-16 bg-nature-gold mb-6" />

            <p className="text-lg mb-4">
              From hiking trails and foraging walks to storytelling nights and
              meditation by the fire, Al Jourd offers unique ecotourism
              experiences curated for all ages and interests.
            </p>

            <p className="text-lg">
              All activities are designed to deepen your connection with nature
              while supporting the local community and ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
