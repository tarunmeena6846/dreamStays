"use client"
import Carousel from "../Carousel/Index";
import { Index } from "../Nav";
import BlobAnimation from "./BlogAnimation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const Hero = () => {
  return (
    <div className="relative min-h-[120vh] flex flex-col px-4 md:px-20 overflow-hidden">
      {/* Background image with Carousel */}
      <div className="absolute top-[200px] right-5  w-[60%] h-[60%]  z-[3]">
        <Carousel />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('./header_image.jpg')",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#475a57]/90 z-[2]"></div>

      {/* Navbar */}
      <div className="relative z-[3] pt-10">
        <Index />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-[3] flex flex-col justify-center items-start w-full h-full pt-10 px-4 sm:px-8 md:px-0">
        {/* Text Section */}
        <div className="relative w-full md:w-[50%] text-white pt-20">
          <div className="absolute top-[-120px] left-[-50px] md:left-[-170px]">
            <BlobAnimation />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl leading-tight">
            Dream
            Stays
          </h2>
          <p className="text-base md:text-lg mt-2">
            From check-in to chill out
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;