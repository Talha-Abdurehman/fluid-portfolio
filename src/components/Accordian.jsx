import React from "react";

const Accordian = ({ title, tech }) => {
  return (
    <div className="bg-primary text-text-main rounded-xl p-6 pb-7  w-full flex flex-col">
      <h1 className="font-grotesk text-text-main xl:text-4xl 2xl:text-6xl">
        {title}
      </h1>
      <div className="flex flex-col gap-3">
        {tech.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center border-b-2 border-text-main"
            >
              <h1 className="xl:text-lg pt-2 font-inter font-semibold">
                <span className="font-inter font-light">0{item.id}</span>{" "}
                {item.name}
              </h1>
              <div>{item.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
