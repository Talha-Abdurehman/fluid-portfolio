import React from "react";
import Accordian from "../components/Accordian";

const Stack = () => {
  const titles = [
    { id: 1, title: "FRONT-END" },
    { id: 2, title: "BACK-END" },
  ];

  return (
    <div className="bg-main min-h-screen w-full xl:flex xl:flex-col px-4 py-12">
      <div className="xl:flex h-full xl:gap-4 xl:items-center  bg-main rounded-b-xl ">
        <h1 className="xl:text-7xl 2xl:text-9xl font-grotesk font-semibold text-primary py-4 whitespace-nowrap">
          TECH STACK
        </h1>
      </div>
      <div className=" w-full rounded-xl flex justify-between py-12 items-center gap-6">
        {titles.map((title) => {
          return <Accordian title={title.title} />;
        })}
      </div>
    </div>
  );
};

export default Stack;
