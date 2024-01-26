import React from "react";
import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight"; // Fix the casing of the import

const Navbar = () => {
  return (
    <div className="bg-blue-600 md:px-6 md:py-3 px-5 py-2 gap-5">
      <div className="flex items-center justify-between md:w-11/12 mx-auto font-ui">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
