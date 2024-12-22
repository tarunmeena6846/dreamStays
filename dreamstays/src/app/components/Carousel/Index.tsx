"use client";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 3; // Total number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Slide interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  // Handle next and previous slide
  const goToSlide = (index: any) => setActiveIndex(index);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slideCount);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <div id="carousel" className="relative w-full h-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg w-full h-full">
        {Array.from({ length: slideCount }).map((_, index) => (
          <div
            key={index}
            className={`${activeIndex === index ? "block " : "hidden "
              } duration-700 ease-in-out `}
          >
            <img
              src={`/carousel-${index + 1}.jpeg`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-300"
              }`}
            aria-current={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
