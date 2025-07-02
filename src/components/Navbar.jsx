import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const NavbarItems = [
    { id: 1, section: "ABOUT", secLink: "about" },
    { id: 2, section: "PROJECTS", secLink: "projects" },
    { id: 3, section: "CONTACT", secLink: "contact" },
  ];

  return (
    <div className="bg-main flex justify-between items-center xl:py-6 max-sm:py-6 2xl:py-7 px-8 border-b-2 border-primary  max-sm:text-sm`">
      <NavItem secLink={""} section={"HOME"} />
      <div className="flex justify-between items-center max-sm:gap-2 xl:gap-3 2xl:gap-5">
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
