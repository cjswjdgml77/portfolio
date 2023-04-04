import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import PlatformSelector from "@/components/PlatformSelector";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakePlatforms = [{ id: 1, name: "playstation", slug: "playstation" }];

describe("PlatformSelector", () => {
  it("Select Platform", async () => {
    mockedAxios.get.mockResolvedValue({
      data: { results: fakePlatforms },
    });

    render(<PlatformSelector setPlatform={() => {}} />);
    const button: HTMLInputElement = screen.getByRole("button");
    const list = screen.getByRole("listbox");

    expect(list.classList.contains("invisible")).toEqual(true);

    fireEvent.click(button);
    const listVisible = screen.getByRole("listbox");

    expect(button.checked).toBeTruthy();

    await waitFor(() => {
      const option = screen.getByRole("option");
      fireEvent.click(option);
      expect(button.checked).toBeFalsy();
    });
  });
});
