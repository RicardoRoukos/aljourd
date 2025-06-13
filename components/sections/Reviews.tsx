"use client";

import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="reviews"
      className="py-16 bg-white text-nature-charcoal text-center"
    >
      <h2 className="text-2xl font-serif font-semibold mb-4">
        What People Say
      </h2>
      <div className="h-1 w-16 bg-nature-gold mx-auto mb-8" />

      {/* Elfsight widget container */}
      <div
        className="elfsight-app-e2d160ad-290d-43ee-b46a-2404d55ac0e2"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export default GoogleReviews;
