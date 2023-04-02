import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import ColorModeSwitch from "../components/ColorModeSwitch";

describe("Navbar", () => {
  it("render a navbar", () => {
    render(<Navbar />);
  });

  it("change theme color", () => {
    const { getByTestId } = render(<ColorModeSwitch />);
    const toggleBtn = getByTestId("change-mode");
    fireEvent.click(toggleBtn);
  });
});
