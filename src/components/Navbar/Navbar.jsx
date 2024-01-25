import React from "react";
import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight"; // Fix the casing of the import

const Navbar = () => {
  return (
    <div className="bg-blue-600 px-6 py-3">
      <div className="flex items-center justify-between w-10/12 mx-auto font-ui">
        <NavbarLeft />
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
