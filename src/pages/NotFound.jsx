import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-amber-500 relative flex flex-col p-4 justify-center items-center">
      <video
        loop
        muted
        playsInline
        autoPlay
        className="object-cover h-full w-full z-10 absolute"
      >
        <source
          src="https://res.cloudinary.com/drid0qpba/video/upload/v1751112975/Contourmaps_ahfow2.mp4"
          type="video/mp4"
        />
      </video>
      <div className="z-10 bg-black w-full h-2/3 flex flex-col justify-center items-center gap-2">
        <h1 className="font-grotesk text-primary text-7xl">ERROR 404</h1>
        <h3 className="font-inter text-primary font-extralight tracking-widest text-3xl">
          NOT FOUND!
        </h3>
        <Link
          to={"/"}
          className=" my-4 cursor-pointer bg-primary py-2 px-8 font-inter font-semibold text-black hover:outline-2 hover:outline-primary hover:bg-black hover:text-primary"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
