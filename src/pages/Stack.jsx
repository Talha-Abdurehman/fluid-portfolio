import React from "react";
import Accordian from "../components/Accordian";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiShadcnui,
  SiMaterialdesign,
  SiSwagger,
  SiZod,
  SiPostman,
  SiAuth0,
  SiStripe,
  SiApollographql,
  SiGreensock,
  SiExpress,
  SiNodedotjs,
  SiSupabase,
  SiJsonwebtokens,
  SiDrizzle,
  SiMongoose,
  SiVite,
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
          icon: <SiReact className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />,
        },
        {
          id: 2,
          name: "Vite",
          icon: <SiVite className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />,
        },
        {
          id: 3,
          name: "Tailwindcss",
          icon: (
            <SiTailwindcss className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 4,
          name: "Framer Motion",
          icon: (
            <SiFramer className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 5,
          name: "GSAP",
          icon: (
            <SiGreensock className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 6,
          name: "Shadcn UI",
          icon: (
            <SiShadcnui className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
      ],
    },
    {
      id: 2,
      title: "API",
      tech: [
        {
          id: 1,
          name: "Swagger",
          icon: (
            <SiSwagger className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 2,
          name: "Postman",
          icon: (
            <SiPostman className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 3,
          name: "Apollo",
          icon: (
            <SiApollographql className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 4,
          name: "Zod",
          icon: <SiZod className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />,
        },
        {
          id: 5,
          name: "Stripe",
          icon: (
            <SiStripe className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 6,
          name: "Auth0",
          icon: <SiAuth0 className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />,
        },
      ],
    },
    {
      id: 3,
      title: "BACK-END",
      tech: [
        {
          id: 1,
          name: "Node JS",
          icon: (
            <SiNodedotjs className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 2,
          name: "Express",
          icon: (
            <SiExpress className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 3,
          name: "JWT && BCRYPT",
          icon: (
            <SiJsonwebtokens className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 4,
          name: "Drizzle ORM",
          icon: (
            <SiDrizzle className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 5,
          name: "Mongoose",
          icon: (
            <SiMongoose className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
        {
          id: 6,
          name: "Supabase",
          icon: (
            <SiSupabase className="p-1 max-sm:w-7 max-sm:h-7 xl:w-8 xl:h-8" />
          ),
        },
      ],
    },
  ];

  return (
    <div className="bg-main min-h-screen w-full xl:flex xl:flex-col px-4 py-12">
      <div className="max-sm:sticky top-17 block bg-main w-full h-full max-sm:py-2 py-8 ">
        <h1 className="max-sm:text-3xl xl:text-7xl 2xl:text-9xl font-grotesk text-primary font-semibold">
          TECH STACK
        </h1>
      </div>
      <div className=" w-full rounded-xl flex justify-between items-center xl:gap-12 max-sm:flex-col max-sm:gap-12 py-6 max-sm:py-2">
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
