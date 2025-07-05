import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  const firstBatch = [
    { id: 1, platform: "LINKEDIN", link: "#" },
    { id: 2, platform: "YOUTUBE", link: "#" },
    { id: 3, platform: "INSTAGRAM", link: "#" },
  ];

  const LastBatch = [
    { id: 1, platform: "FACEBOOK", link: "#" },
    { id: 2, platform: "BEHANCE", link: "#" },
    { id: 3, platform: "DRIBBLE", link: "#" },
  ];
  return (
    <div className="bg-primary max-sm:h-auto xl:h-screen max-sm:min-h-screen py-4 px-6 rounded-t-xl flex flex-col justify-between items-center max-sm:justify-start max-sm:gap-12">
      <h1 className="text-text-main max-sm:text-3xl xl:text-7xl 2xl:text-9xl font-grotesk font-semibold">
        LET'S ACHIEVE SOMETHING GREAT TOGETHER!
      </h1>

      <section className="w-full flex max-sm:flex-col max-sm:max-h-screen   justify-between items-center max-sm:gap-6 xl:gap-16 max-sm:overflow-scroll">
        <div className=" flex flex-col  w-full gap-2">
          <h1 className="font-grotesk text-text-main max-sm:text-2xl xl:text-4xl font-semibold">
            CONTACT ME
          </h1>

          <div className="flex  justify-center items-center gap-1">
            <div className="bg-text-main rounded-full w-full xl:p-6 max-sm:p-3">
              <input
                type="text"
                className=" w-full h-full focus:outline-none placeholder:text-primary"
                placeholder="EMAIL"
              />
            </div>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`bg-text-main rounded-full w-auto max-sm:p-3 xl:px-3 xl:py-3 cursor-pointer`}
            >
              <div
                className={`${
                  hovered ? "rotate-45" : ""
                } transition-all duration-300`}
              >
                <ArrowUpRight
                  color="#dd0000"
                  size={50}
                  className="max-sm:w-6 max-sm:h-6"
                />
              </div>
            </div>
          </div>

          <div className="bg-text-main rounded-full xl:p-6 max-sm:p-0">
            <textarea
              className="max-sm:px-4 max-sm:py-2 focus:outline-none placeholder:text-primary"
              placeholder="MESSAGE"
            ></textarea>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <h1 className="font-grotesk text-text-main max-sm:text-2xl xl:text-4xl font-semibold">
            SOCIALS
          </h1>
          <div className="w-full flex justify-between gap-3">
            {/* First 3 Links */}
            <div className="flex flex-col gap-3 w-full">
              {firstBatch.map((item) => {
                return (
                  <SocialLinks
                    platform={item.platform}
                    key={item.id}
                    link={item.link}
                  />
                );
              })}
            </div>
            {/* Last 3 Links */}
            <div className="flex flex-col gap-3 w-full">
              {LastBatch.map((item) => {
                return (
                  <SocialLinks
                    platform={item.platform}
                    key={item.id}
                    link={item.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div>
        <h1 className="text-text-main font-inter xl:text-lg">
          DESIGNED && DEVELOPED BY TALHA WITH 🤍
        </h1>
      </div>
    </div>
  );
};

export default Footer;
