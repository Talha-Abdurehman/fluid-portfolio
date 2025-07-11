import React from "react";
import Lottie from "lottie-react";
import { QuoteIcon, Globe } from "lucide-react";
import Flag from "react-world-flags";

const About = () => {
  return (
    <div className="sm:min-h-screen px-2 xl:py-12 2xl:py-24 bg-main text-primary">
      <div className="xl:flex h-full xl:gap-4">
        <div className="block h-full sm:sticky top-20 pt-6 ">
          <div className="h-full xl:flex justify-start items-start leading-none  m-0">
            <h1 className="font-grotesk text-primary max-sm:text-3xl xl:text-7xl 2xl:text-9xl font-semibold whitespace-nowrap">
              ABOUT ME
            </h1>
          </div>
        </div>
        <div className="w-full pt-6 max-sm:pt-2">
          <div className="relative bg-primary sm:h-screen xl:flex xl:xl:flex-col xl:justify-center px-12 py-6 xl:items-center rounded-xl">
            <h1 className="text-text-main xl:text-4xl 2xl:text-6xl text-center">
              <span className="inline-block ">
                <QuoteIcon
                  fill="#eaeaea"
                  size={44}
                  className="scale-x-[-1] max-sm:w-4 max-sm:h-4"
                />
              </span>{" "}
              Based in Pakistan{" "}
              <span className="inline-block p-0 max-sm:h-7 max-sm:w-7 ">
                <Flag
                  code="PK"
                  className=""
                  style={{ height: 44, width: 44, margin: 0, padding: 0 }}
                />
              </span>
              , I'm a MERN stack engineer who builds more than websites, I craft
              experiences && interactions. My work fuses aesthetically pleasing
              animations, swiss-brutalist design and clean architecture to
              challenge the ordinary.{" "}
              <span className="inline-block">
                <QuoteIcon
                  fill="#eaeaea"
                  size={44}
                  className="max-sm:w-4 max-sm:h-4"
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
