import GenreList from "@/components/GenreList";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;
const fakeGenres = [
  {
    id: 2,
    name: "shooting",
    image_background: "https://sefdsfds.com",
  },
];
describe("GenreList", () => {
  it("render genre list with mock data", async () => {
    mockAxios.get.mockResolvedValue({ data: { results: fakeGenres } });
    render(<GenreList selectedGenre={null} setGenre={() => {}} />);
    await waitFor(() => {
      screen.getByText("shooting");
    });
  });
});
