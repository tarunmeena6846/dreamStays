"use client"
import { useState, useEffect } from "react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
];

export function Gallery() {
  return (
    <div className="w-full mx-auto py-10">
      <h2
        className="text-4xl md:text-6xl lg:text-8xl text-[#f9f7f1] my-5 md:my-10 mx-4 md:mx-10"
        style={{ WebkitTextStroke: "0.3px #455d58" }}
      >
        Gallery
      </h2>
      <div className="flex items-center justify-center">
        <ImageGallery />
      </div>
    </div>
  );
}

export default function ImageGallery() {
  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const maxPosition = isMobile ? images.length - 1 : images.length - 3; // Show 1 image on mobile, 3 on larger screens

  // Update isMobile state based on screen size
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Slide functions
  const slideLeft = () => {
    setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const slideRight = () => {
    setPosition((prevPosition) => Math.min(prevPosition + 1, maxPosition));
  };

  return (
    <div className="relative w-full px-4 md:px-10 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${position * (isMobile ? 100 : 33.33)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${
              isMobile ? "w-full" : "w-1/3"
            } px-2 md:px-4`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={slideLeft}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-700 text-white p-1 md:p-2 rounded-full hover:bg-gray-600 transition"
        disabled={position === 0}
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        onClick={slideRight}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-700 text-white p-1 md:p-2 rounded-full hover:bg-gray-600 transition"
        disabled={position === maxPosition}
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
}
