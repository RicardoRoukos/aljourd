// components/sections/About.tsx

import React from "react";

interface AboutProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const About: React.FC<AboutProps> = ({ sectionRef }) => {
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-nature-cream text-nature-charcoal"
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="section-heading mb-6">About Al Jourd</h2>
        <div className="h-1 w-16 bg-nature-gold mx-auto mb-8" />

        <p className="text-lg mb-6">
          Nestled in the heart of Lebanon’s untouched mountain ranges, Al Jourd
          offers a serene escape for nature lovers, adventure seekers, and
          families alike. Our site was built with sustainability and
          authenticity at its core — using natural materials and embracing local
          traditions.
        </p>

        <p className="text-lg">
          Whether you’re looking to unplug, connect with others, or simply
          breathe fresh mountain air, Al Jourd welcomes you with open arms.
        </p>
      </div>
    </section>
  );
};

export default About;
