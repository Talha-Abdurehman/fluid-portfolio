import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const NavbarItems = [
    { id: 1, section: "ABOUT", secLink: "about" },
    { id: 2, section: "PROJECTS", secLink: "projects" },
    { id: 3, section: "CONTACT", secLink: "contact" },
  ];

  return (
    <div className="bg-black flex justify-between items-center py-6 px-4 ">
      <NavItem secLink={"home"} section={"HOME"} />
      <div className="flex justify-between items-center gap-3">
        {NavbarItems.map((item) => {
          return (
            <NavItem
              key={item.id}
              secLink={item.secLink}
              section={item.section}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
