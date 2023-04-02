import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
type Props = {};

const ColorModeSwitch = (props: Props) => {
  const [darkMode, isDarkMode] = useState(false);
  const themeHandler = () => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.darkmode = true;
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.darkmode = false;
    }
    isDarkMode(!darkMode);
  };
  useEffect(() => {
    console.log(localStorage.darkmode);
    if (localStorage.darkmode === "false") {
      document.documentElement.classList.remove("dark");
      isDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      isDarkMode(true);
    }
  }, []);
  return (
    <div className="flex overflow-hidden min-w-[130px] justify-between">
      <span
        className={`font-bold ${
          !darkMode && "text-darkTeritary"
        } transition-colors duration-500`}
        onClick={() => {
          if (!darkMode) themeHandler();
        }}
      >
        DARK
      </span>
      {darkMode ? (
        <FaMoon
          className={`switch-animation text-gray-300 transition-colors duration-500`}
          fontSize={"1.5rem"}
          data-testid="change-mode"
          onClick={themeHandler}
        />
      ) : (
        <BsFillSunFill
          className="switch-animation"
          data-testid="change-mode"
          fontSize={"1.5rem"}
          onClick={themeHandler}
        />
      )}
      <span
        className={`font-bold ${
          darkMode && "text-darkTeritary"
        } transition-colors duration-500`}
        onClick={() => {
          if (darkMode) themeHandler();
        }}
      >
        LIGHT
      </span>
    </div>
  );
};

export default ColorModeSwitch;
