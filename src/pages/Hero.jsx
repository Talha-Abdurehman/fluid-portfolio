import React from "react";

const Hero = () => {
  return (
    <div className="xl:flex xl:xl:flex-col xl:xl:justify-center xl:xl:items-center xl:max-w-screen h-screen bg-main">
      <div className="relative xl:flex xl:justify-center xl:items-center overflow-hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute bg-main top-0 left-0 h-full w-full object-cover m-0 p-0 z-10"
        >
          <source
            src="https://res.cloudinary.com/drid0qpba/video/upload/v1751112975/Contourmaps_ahfow2.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className="font-inter xl:text-[24rem] 2xl:text-[36rem] text-white font-bold m-0 p-0 leading-[0.8] mix-blend-multiply z-20 bg-main">
          TALHA
        </h1>
      </div>
      <h3 className="font-inter font-extralight  xl:text-[6rem] 2xl:text-[12rem] p-0 m-0 leading-none text-primary  tracking-[3.5rem] -mr-[3.5rem]">
        ABDUREHMAN
      </h3>
    </div>
  );
};

export default Hero;
