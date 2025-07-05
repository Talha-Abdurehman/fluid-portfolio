import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const NavbarItems = [
    { id: 1, section: "HIRE ME", secLink: "hire" },
    { id: 2, section: "RESUME", secLink: "resume" },
    { id: 3, section: "MENU", secLink: "menu" },
  ];

  return (
    <div className="bg-main flex justify-between items-center xl:py-6 max-sm:p-6  2xl:py-7 px-8 border-b-2 border-primary  max-sm:text-sm`">
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
