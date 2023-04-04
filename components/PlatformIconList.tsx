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
    <div className="flex gap-2 items-center">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        if (Icon) return <Icon color="#999999" key={platform.id} />;
        return (
          <p className="text-[#999999]" key={platform.id}>
            {platform.slug}
          </p>
        );
      })}
    </div>
  );
};

export default PlatformIconList;
