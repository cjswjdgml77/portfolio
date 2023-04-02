import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  platforms: Platform[];
};
interface platform {
  pc: IconType;
  playstation: IconType;
  xbox: IconType;
  nintendo: IconType;
  mac: IconType;
  linux: IconType;
  ios: IconType;
  web: IconType;
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <div className="flex">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return <Icon color="#999999" key={platform.id} />;
      })}
    </div>
  );
};

export default PlatformIconList;
