import React from "react";
import logo from "../../../public/dilekdukkani-yellowx.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full py-2 flex justify-between items-center bg-gray-800 text-white px-8 text-md font-sans italic">
      <p>Dilek Dukkani © 2023</p>
      <Image src={logo} height={50} width={150} alt="Dilek Dükkanı" />
    </div>
  );
};

export default Footer;
