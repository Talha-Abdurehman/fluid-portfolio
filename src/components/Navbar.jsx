import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const NavbarItems = [
    { id: 1, section: "ABOUT", secLink: "about" },
    { id: 2, section: "PROJECTS", secLink: "projects" },
    { id: 3, section: "CONTACT", secLink: "contact" },
  ];

  return (
    <div className="bg-main xl:flex justify-between xl:items-center py-6 px-8 ">
      <NavItem secLink={""} section={"HOME"} />
      <div className="xl:flex justify-between xl:items-center gap-3">
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
