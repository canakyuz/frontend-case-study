import React from "react";
import { BiUser, BiBriefcase } from "react-icons/bi";

const NavbarRight = () => {
  return (
    <div className="flex flex-row gap-6 text-white">
      <div className="flex flex-row gap-2">
        <BiBriefcase className="text-2xl" />
        Total Price
      </div>
      <div className="flex flex-row gap-2">
        <BiUser className="text-2xl" />
        Bekircan
      </div>
    </div>
  );
};

export default NavbarRight;
