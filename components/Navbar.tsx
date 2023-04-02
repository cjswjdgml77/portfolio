import Image from "next/image";
import React from "react";
import mylogo from "../public/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between pr-7">
      <Image src={mylogo} alt="my logo" width={60}></Image>
      <nav>
        <p className="dark:text-red-500">hello</p>
      </nav>
      <ColorModeSwitch />
    </div>
  );
};

export default Navbar;
