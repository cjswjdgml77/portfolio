import Image from "next/image";
import React from "react";
import mylogo from "../public/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  search: (searchText: string) => void;
};

const Navbar = ({ search }: Props) => {
  return (
    <div className="flex items-center justify-between pr-7 py-2">
      <Image src={mylogo} alt="my logo" width={60}></Image>
      <SearchInput search={search} />
      <ColorModeSwitch />
    </div>
  );
};

export default Navbar;
