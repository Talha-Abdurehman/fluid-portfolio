import React from "react";
import Accordian from "../components/Accordian";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiMaterialdesign,
} from "react-icons/si";

const Stack = () => {
  const titles = [
    {
      id: 1,
      title: "FRONT-END",
      tech: [
        {
          id: 1,
          name: "React JS",
          icon: <SiReact className="p-1 xl:w-8 xl:h-8" />,
        },
        {
          id: 2,
          name: "Tailwindcss",
          icon: <SiTailwindcss className="p-1 xl:w-8 xl:h-8" />,
        },
        {
          id: 3,
          name: "Framer Motion",
          icon: <SiFramer className="p-1 xl:w-8 xl:h-8" />,
        },
        { id: 4, name: "GSAP" },
        {
          id: 5,
          name: "Shadcn UI",
          icon: <SiShadcnui className="p-1 xl:w-8 xl:h-8" />,
        },
        {
          id: 6,
          name: "Material UI",
          icon: <SiMaterialdesign className="p-1 xl:w-8 xl:h-8" />,
        },
      ],
    },
    {
      id: 2,
      title: "API",
      tech: [
        { id: 1, name: "React JS", icon: <SiReact /> },
        { id: 2, name: "Tailwindcss" },
        { id: 3, name: "Framer Motion" },
        { id: 4, name: "GSAP" },
        { id: 5, name: "Shadcn UI" },
        { id: 6, name: "Material UI" },
      ],
    },
    {
      id: 3,
      title: "BACK-END",
      tech: [
        { id: 1, name: "React JS", icon: <SiReact /> },
        { id: 2, name: "Tailwindcss" },
        { id: 3, name: "Framer Motion" },
        { id: 4, name: "GSAP" },
        { id: 5, name: "Shadcn UI" },
        { id: 6, name: "Material UI" },
      ],
    },
  ];

  return (
    <div className="bg-main min-h-screen w-full xl:flex xl:flex-col px-4 py-12">
      <div className="xl:flex h-full xl:gap-4 xl:items-center  bg-main rounded-b-xl ">
        <h1 className="xl:text-7xl 2xl:text-9xl font-grotesk font-semibold text-primary py-4 whitespace-nowrap">
          TECH STACK
        </h1>
      </div>
      <div className=" w-full rounded-xl flex justify-between py-12 items-center xl:gap-12 max-sm:flex-col max-sm:gap-12">
        {titles.map((title) => {
          return (
            <Accordian key={title.id} title={title.title} tech={title.tech} />
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
