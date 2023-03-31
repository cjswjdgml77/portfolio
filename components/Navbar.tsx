import Image from "next/image";
import React from "react";
import mylogo from "../public/logo.webp";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex">
      <Image src={mylogo} alt="my logo" width={60}></Image>
    </div>
  );
};

export default Navbar;
