import React from "react";
import { BiUser, BiBriefcase } from "react-icons/bi";
import { useSelector } from "react-redux";

const NavbarRight = () => {
  const cardItems = useSelector((state) => state.card.cardItems);

  const calculateTotalPrice = () => {
    // Her bir öğenin fiyatını adet ile çarp ve toplam fiyatı hesapla
    const totalPrice = cardItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    return totalPrice.toLocaleString('tr-TR'); // Türk Lirası formatına çevirme
  };
  return (
    <div className="flex flex-row gap-6 text-white">
      <div className="flex flex-row gap-2">
        <BiBriefcase className="text-2xl" />
        <p className="hidden md:flex font-light">
          {calculateTotalPrice()} ₺
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <BiUser className="text-2xl" />
        <p className="hidden md:flex">
          Bekircan
        </p>
      </div>
    </div>
  );
};

export default NavbarRight;
