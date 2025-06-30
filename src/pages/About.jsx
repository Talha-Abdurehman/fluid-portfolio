import React from "react";
import { QuoteIcon } from "lucide-react";
import Flag from "react-world-flags";

const About = () => {
  return (
    <div className="min-h-screen px-2 py-12 bg-black text-primary">
      <div className="flex h-full gap-4">
        <div className="block h-full sticky top-20">
          <div className="h-full flex justify-start items-start leading-none  m-0">
            <h1 className="font-grotesk text-primary  text-7xl font-semibold whitespace-nowrap">
              ABOUT ME
            </h1>
          </div>
        </div>
        <div className="w-full">
          <div className=" bg-primary h-screen flex flex-col justify-center px-4 py-6 items-center rounded-xl">
            <h1 className="text-black text-4xl text-center">
              <span className="inline-block transform ">
                <QuoteIcon
                  color="#000000"
                  fill="#000000"
                  size={34}
                  className="scale-x-[-1]"
                />
              </span>{" "}
              Based in Pakistan{" "}
              <span className="inline-block m-0 p-0">
                <Flag
                  code="PK"
                  style={{ height: 34, width: 34, margin: 0, padding: 0 }}
                />
              </span>
              , I'm a MERN stack engineer who builds more than websites, I craft
              experiences && interactions. My work fuses aesthetically pleasing
              animations, swiss-brutalist design and clean architecture to
              challenge the ordinary.{" "}
              <span className="inline-block">
                <QuoteIcon color="#000000" fill="#000000" size={34} />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
