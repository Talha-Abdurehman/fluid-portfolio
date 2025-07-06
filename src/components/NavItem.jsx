import React, { useState } from "react";
import { NavLink } from "react-router";
import { ArrowUpRight } from "lucide-react";

const NavItem = ({ section, secLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex justify-center items-center xl:gap-2 border-2 ${
        isHovered ? "rounded-full border-primary" : "border-transparent"
      } transiton-all duration-300`}
    >
      <NavLink
        to={`/${secLink}`}
        className={({ isActive }) =>
          `border-b-2 ${
            isActive
              ? " border-primary rounded-none"
              : "border-transparent rounded-full "
          } ${
            isActive && isHovered ? "border-none" : ""
          } font-grotesk xl:text-lg 2xl:text-4xl max-sm:text-xs   max-sm:py-1 max-sm:px-1 xl:py-1 xl:px-2 text-primary  transition-all ease-in duration-200 `
        }
      >
        {section}
      </NavLink>
      <ArrowUpRight
        className={`${
          isHovered
            ? "rotate-45  bg-primary text-main rounded-full"
            : "text-primary bg-main"
        } transition-all duration-300 border-transparent p-1 xl:w-9 xl:h-9`}
      />
    </div>
  );
};

export default NavItem;
