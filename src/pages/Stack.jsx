import React from "react";

const Stack = () => {
  return (
    <div className="bg-main min-h-screen w-full xl:flex xl:xl:flex-col px-4 py-12">
      <div className="xl:flex h-full xl:gap-4 xl:items-center  bg-main rounded-b-xl ">
        <h1 className="xl:text-7xl 2xl:text-9xl font-grotesk font-semibold text-primary py-4 whitespace-nowrap">
          TECH STACK
        </h1>
      </div>
      <div className="bg-primary max-w-full h-screen rounded-xl">
        <div className="xl:flex xl:xl:flex-col"></div>
      </div>
    </div>
  );
};

export default Stack;
