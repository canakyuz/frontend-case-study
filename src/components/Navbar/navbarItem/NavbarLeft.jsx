import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const NavbarLeft = () => {
  const navigate = useNavigate();


  const handleLogoClick = () => {
    navigate('/'); // '/' rotası home.jsx sayfasını temsil ediyor, isteğe bağlı olarak rotayı değiştirebilirsiniz
  };

  return (
    <div className="flex flex-row items-center gap-5 w-6/12 justify-between">
      <div className="md:text-3xl text-xl font-semibold text-white cursor-pointer" onClick={handleLogoClick}>Eteration</div>
      {/* Search */}
      <Search />
    </div>
  );
};

export default NavbarLeft;
