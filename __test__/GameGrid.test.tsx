import GameGrid from "@/components/GameGrid";
import { GameQuery } from "@/pages";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const fakeGame = [
  {
    id: 1,
    background_image: "https://ss",
    name: "matrix",
    metacritic: 58,
    parent_platforms: [
      {
        platform: {
          id: 2,
          name: "nintenDo",
          slug: "nintendo",
        },
      },
    ],
  },
  {
    id: 2,
    background_image: "https://ss",
    name: "matrix2",
    metacritic: 58,
    parent_platforms: [
      {
        platform: {
          id: 2,
          name: "nintenDo",
          slug: "nintendo",
        },
      },
    ],
  },
];
describe("GameGrid", () => {
  it("Fetches the game data", async () => {
    mockedAxios.get.mockResolvedValue({ data: { results: fakeGame } });

    render(<GameGrid gameQuery={{} as GameQuery} />);

    await waitFor(() => {
      screen.getAllByText("matrix2");
      screen.getAllByText("matrix");
    });
  });
});
