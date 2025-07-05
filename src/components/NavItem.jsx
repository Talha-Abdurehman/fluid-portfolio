import React from "react";
import { NavLink } from "react-router";

const NavItem = ({ section, secLink }) => {
  return (
    <div className="">
      <NavLink
        to={`/${secLink}`}
        className={({ isActive }) =>
          `${
            isActive
              ? "text-primary border-b-2 border-primary"
              : "bg-main text-primary"
          } font-grotesk xl:text-lg 2xl:text-4xl max-sm:text-sm border-2 border-primary py-2 px-4 rounded-full hover:bg-primary hover:text-main transition-all ease-in duration-200`
        }
      >
        {section}
      </NavLink>
    </div>
  );
};

export default NavItem;
