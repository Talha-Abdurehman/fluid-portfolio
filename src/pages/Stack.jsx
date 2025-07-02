import React from "react";
import Accordian from "../components/Accordian";

const Stack = () => {
  const titles = [
    { id: 1, title: "FRONT-END" },
    { id: 2, title: "BACK-END" },
    { id: 3, title: "DATABASES" },
  ];

  return (
    <div className="bg-main min-h-screen w-full xl:flex xl:xl:flex-col px-4 py-12">
      <div className="xl:flex h-full xl:gap-4 xl:items-center  bg-main rounded-b-xl ">
        <h1 className="xl:text-7xl 2xl:text-9xl font-grotesk font-semibold text-primary py-4 whitespace-nowrap">
          TECH STACK
        </h1>
      </div>
      <div className="bg-primary w-full h-[100%] rounded-xl flex justify-center py-12 items-center"></div>
    </div>
  );
};

export default Stack;
