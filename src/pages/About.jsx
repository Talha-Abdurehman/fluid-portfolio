import React from "react";

const About = () => {
  return (
    <div className="container h-screen px-4 py-6 bg-black">
      <div className="flex items-center justify-center h-full gap-1">
        <div className="bg-primary h-full w-[15%] flex justify-start items-start leading-none p-0 m-0">
          <h1 className="font-grotesk text-black  transform rotate-90 origin-center text-7xl whitespace-nowrap">
            ABOUT ME
          </h1>
        </div>
        <div className="w-full bg-primary h-full flex justify-center items-center">
          <h1 className="text-black">WTH</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
