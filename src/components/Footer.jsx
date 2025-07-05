import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary h-screen py-4 px-6 rounded-t-xl flex flex-col justify-between items-center">
      <h1 className="text-text-main font-grotesk text-7xl font-semibold">
        LET'S ACHIEVE SOMETHING GREAT TOGETHER!
      </h1>

      <section className="w-full flex justify-between items-center xl:gap-6">
        <div className=" flex flex-col  w-full gap-2">
          <h1 className="font-grotesk text-text-main text-4xl font-semibold">
            CONTACT ME
          </h1>
          <div className="flex  justify-center items-center gap-1">
            <div className="bg-text-main rounded-full w-full p-6">
              <input
                type="text"
                className=" w-full h-full"
                placeholder="EMAIL"
              />
            </div>
            <div className="bg-text-main rounded-full w-auto px-8 py-6">
              <button className="text-text-main">hi</button>
            </div>
          </div>

          <div className="bg-text-main rounded-full p-6">
            <textarea
              className="w-full h-full"
              placeholder="MESSAGE"
            ></textarea>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <h1 className="font-grotesk text-text-main text-4xl font-semibold">
            SOCIALS
          </h1>
          <div className="w-full flex justify-between gap-3">
            <div className="flex flex-col gap-3 w-full">
              <h3 className="text-lg border-b-2 border-text-main text-text-main pt-2">
                LINKEDIN
              </h3>
              <h3 className="text-lg border-b-2 border-text-main text-text-main pt-2">
                FACEBOOK
              </h3>
              <h3 className="text-lg border-b-2 border-text-main text-text-main pt-2">
                INSTAGRAM
              </h3>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <h3 className="text-lg border-b-2 border-text-main text-text-main pt-2">
                TWITTER / X
              </h3>
              <h3 className="text-lg border-b-2 border-text-main text-text-main pt-2">
                YOUTUBE
              </h3>
              <h3 className="text-lg border-b-2 border-text-main text-text-main pt-2">
                BEHANCE
              </h3>
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
