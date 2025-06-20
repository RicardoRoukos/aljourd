// components/CampGallery.tsx
"use client";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/camp1.webp",
    thumbnail: "/images/camp1.webp",
    // description: "Our eco domes in the snow",
  },
  {
    original: "/images/camp2.webp",
    thumbnail: "/images/camp2.webp",
    // description: "Sunset over the campsite",
  },
  {
    original: "/images/camp3.webp",
    thumbnail: "/images/camp3.webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp4.webp",
    thumbnail: "/images/camp4.webp",
    // description: "Our eco domes in the snow",
  },
  {
    original: "/images/camp5.webp",
    thumbnail: "/images/camp5.webp",
    // description: "Sunset over the campsite",
  },
  {
    original: "/images/camp6.webp",
    thumbnail: "/images/camp6.webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp7.webp",
    thumbnail: "/images/camp7.webp",
    // description: "Our eco domes in the snow",
  },
  {
    original: "/images/camp8.webp",
    thumbnail: "/images/camp8.webp",
    // description: "Sunset over the campsite",
  },
  {
    original: "/images/camp9.webp",
    thumbnail: "/images/camp9.webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp10.webp",
    thumbnail: "/images/camp10.webp",
    // description: "Our eco domes in the snow",
  },
  {
    original: "/images/camp11.webp",
    thumbnail: "/images/camp11.webp",
    // description: "Sunset over the campsite",
  },
  {
    original: "/images/camp12.webp",
    thumbnail: "/images/camp12.webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp14.webp",
    thumbnail: "/images/camp14.webp",
    // description: "Our eco domes in the snow",
  },
  {
    original: "/images/camp15.webp",
    thumbnail: "/images/camp15.webp",
    // description: "Sunset over the campsite",
  },
  {
    original: "/images/camp16.webp",
    thumbnail: "/images/camp16.webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp17.webp",
    thumbnail: "/images/camp17.webp",
    // description: "Our eco domes in the snow",
  },
  {
    original: "/images/camp18.webp",
    thumbnail: "/images/camp18.webp",
    // description: "Sunset over the campsite",
  },
  {
    original: "/images/camp19.webp",
    thumbnail: "/images/camp19.webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp20.webp",
    thumbnail: "/images/camp20.webp",
    // description: "Sunset over the campsite",
  },
  {
    original: "/images/camp21.webp",
    thumbnail: "/images/camp21.webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (1).webp",
    thumbnail: "/images/camp (1).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (1).webp",
    thumbnail: "/images/camp (1).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (2).webp",
    thumbnail: "/images/camp (2).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (3).webp",
    thumbnail: "/images/camp (3).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (4).webp",
    thumbnail: "/images/camp (4).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (5).webp",
    thumbnail: "/images/camp (5).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (6).webp",
    thumbnail: "/images/camp (6).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (7).webp",
    thumbnail: "/images/camp (7).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (8).webp",
    thumbnail: "/images/camp (8).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (9).webp",
    thumbnail: "/images/camp (9).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (10).webp",
    thumbnail: "/images/camp (10).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/camp (11).webp",
    thumbnail: "/images/camp (11).webp",
    // description: "Inside view of a nomadic tent",
  },
  {
    original: "/images/kitchen (1).webp",
    thumbnail: "/images/kitchen (1).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (2).webp",
    thumbnail: "/images/kitchen (2).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (3).webp",
    thumbnail: "/images/kitchen (3).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (4).webp",
    thumbnail: "/images/kitchen (4).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (5).webp",
    thumbnail: "/images/kitchen (5).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (6).webp",
    thumbnail: "/images/kitchen (6).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (7).webp",
    thumbnail: "/images/kitchen (7).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (8).webp",
    thumbnail: "/images/kitchen (8).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (9).webp",
    thumbnail: "/images/kitchen (9).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (10).webp",
    thumbnail: "/images/kitchen (10).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (11).webp",
    thumbnail: "/images/kitchen (11).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (12).webp",
    thumbnail: "/images/kitchen (12).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (13).webp",
    thumbnail: "/images/kitchen (13).webp",
    // description: "Snow season at Al Jourd",
  },
  {
    original: "/images/kitchen (14).webp",
    thumbnail: "/images/kitchen (14).webp",
    // description: "Snow season at Al Jourd",
  },
];

export default function CampGallery() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center">
        Gallery
      </h2>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        showThumbnails={true}
        autoPlay={true}
      />
    </div>
  );
}
