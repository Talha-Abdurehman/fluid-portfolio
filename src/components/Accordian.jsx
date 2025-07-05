import React from "react";

const Accordian = ({ title }) => {
  return (
    <div className="bg-primary text-text-main rounded-xl p-4  w-full flex flex-col">
      <h1 className="font-grotesk text-text-main xl:text-4xl 2xl:text-6xl">
        {title}
      </h1>
      <div></div>
    </div>
  );
};

export default Accordian;
