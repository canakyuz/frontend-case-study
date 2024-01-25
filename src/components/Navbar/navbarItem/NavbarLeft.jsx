import React from "react";
import { BiSearch } from "react-icons/bi";

const NavbarLeft = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="text-3xl font-semibold text-white">Eteration</div>
      {/* Search Bar */}
      <div className="flex items-center border ml-32 py-2 px-4 rounded-md border-gray-300 bg-white">
        <BiSearch className="text-xl mr-3 accent-white opacity-30" />
        <input className="outline-none" type="text" placeholder="Search" />
      </div>
    </div>
    /* Add Search Bar */
  );
};

export default NavbarLeft;
