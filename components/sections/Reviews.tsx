import React, { useEffect } from "react";

const Reviews = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?dbdac9f4783c3244736637dc885";
    script.async = true;
    script.defer = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="section-heading mb-8">What Our Guests Say</h2>
      <div
        ref={containerRef}
        className="trustindex-widget"
        data-ti="dbdac9f4783c3244736637dc885"
      />
    </section>
  );
};

export default Reviews;
