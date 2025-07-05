import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SocialLinks = ({ platform, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center border-text-main border-b-2"
    >
      <h1 className="text-lg  text-text-main pt-2">{platform}</h1>
      <div
        className={`${
          isHovered ? "rotate-45" : ""
        } transition-all duration-300`}
      >
        <ArrowUpRight color="white" />
      </div>
    </a>
  );
};

export default SocialLinks;
