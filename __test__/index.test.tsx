import { render, screen } from "@testing-library/react";
import Home from "@/pages";

describe("Home", () => {
  it("render a home", () => {
    render(<Home />);
  });
});
