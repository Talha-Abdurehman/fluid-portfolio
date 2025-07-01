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
          } font-grotesk text-lg`
        }
      >
        {section}
      </NavLink>
    </div>
  );
};

export default NavItem;
