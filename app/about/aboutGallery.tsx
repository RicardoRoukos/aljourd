// components/AboutGallery.tsx
"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/about1.webp",
    thumbnail: "/images/about1.webp",
    // description: "Our eco domes in summer",
  },
  {
    original: "/images/about2.webp",
    thumbnail: "/images/about2.webp",
    // description: "View over Ouadi el Juhannam",
  },
  {
    original: "/images/about3.webp",
    thumbnail: "/images/about3.webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/about4.webp",
    thumbnail: "/images/about4.webp",
    // description: "Our eco domes in summer",
  },
  {
    original: "/images/about5.webp",
    thumbnail: "/images/about5.webp",
    // description: "View over Ouadi el Juhannam",
  },
  {
    original: "/images/about6.webp",
    thumbnail: "/images/about6.webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/about7.webp",
    thumbnail: "/images/about7.webp",
    // description: "Snow season at Al Jourd",
  },
];

export default function AboutGallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        showThumbnails={true}
        autoPlay={true}
        slideInterval={5000}
      />
    </div>
  );
}
