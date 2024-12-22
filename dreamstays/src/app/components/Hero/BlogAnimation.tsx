"use client"
import Lottie from 'lottie-react';
import blobAnimation from "./blob-animation.json"; // Download and save the JSON file locally

const BlobAnimation = () => {
  return (
    <div className=" ">
      {/* <Player
        loop
        autoplay
        src={blobAnimation}
        style={{ width: "100%", height: "100%" }}
      /> */}
      <Lottie
        autoplay
        loop
        animationData={blobAnimation}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BlobAnimation;
