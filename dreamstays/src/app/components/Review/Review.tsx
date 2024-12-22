"use client";
import { useEffect, useState } from "react";
// import Carousel from "../Carousel/Index";
const Reviews = [
  {
    author: "Vaishali Sharma",
    profile: "./profile1.jpeg",
    review:
      "Cozy Corner was an absolute delight! The themed rooms were beautifully decorated, especially the Rajasthani room, which felt like a royal escape. All the amenities were thoughtfully provided, making our stay comfortable and memorable. Would definitely recommend!",
  },
  {
    author: "Rohit Mehta",
    profile: "./profile2.jpeg",
    review:
      "This place exceeded all my expectations! Loved the Boho room’s laid-back vibe, and the modern room was a nice touch for those who prefer a minimalist feel. The location was perfect for exploring the area, and the host was super friendly and responsive.",
  },
  {
    author: "Anjali Patel",
    profile: "./profile3.jpeg",
    review:
      "A unique and cozy spot! Each room has its own charm, and you can see the effort put into every detail. The amenities were top-notch, and it was a perfect base for our trip. We’ll definitely be back the next time we’re in town!",
  },
];
export function Review() {
  return (
    <div
      //   className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      className="h-screen md:h-[80vh]"
      style={{
        backgroundImage: "url('./newsletter_bg.jpg')",
        // height: "80vh",
      }}
    >
      <Testimonials />
    </div>
  );
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 3;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Slide interval in milliseconds

    return () => clearInterval(interval);
  }, []);
  const goToSlide = (index) => setActiveIndex(index);
  return (
    // <div className="flex  justify-center items-center h-full px-40">
    <div className="relative mx-auto max-w-2xl lg:max-w-4xl h-full">
      <div className="relative overflow-hidden rounded-lg w-full h-full flex items-center mx-auto">
        {Array.from({ length: slideCount }).map((_, index) => (
          <div
            key={index}
            className={`text-black ${activeIndex === index ? "block " : "hidden "
              } duration-700 ease-in-out `}
          >
            <p className="text-xl md:text-3xl text-white">
              {Reviews[index].review}
            </p>
            <div className="flex flex-col items-center pt-10">
              <img
                src={Reviews[index].profile}
                className="h-14 w-14 rounded-full"
              ></img>
              <h1 className="text-lg md:text-2xl text-[#fc9285] mt-3">
                {Reviews[index].author}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* ))} */}
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
    </div>
  );
};
