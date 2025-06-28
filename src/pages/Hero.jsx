import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen h-screen bg-black">
      <div className="relative flex justify-center items-center overflow-hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute bg-black top-0 left-0 h-full w-full object-cover m-0 p-0 z-10"
        >
          <source
            src="https://res.cloudinary.com/drid0qpba/video/upload/v1751112975/Contourmaps_ahfow2.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className="font-inter text-[24rem] text-white font-bold m-0 p-0 leading-[0.8] mix-blend-multiply z-20 bg-black">
          TALHA
        </h1>
      </div>
      <h3 className="font-inter font-extralight text-[6rem] p-0 m-0 leading-none text-primary  tracking-[3.5rem] -mr-[3.5rem]">
        ABDUREHMAN
      </h3>
    </div>
  );
};

export default Hero;
