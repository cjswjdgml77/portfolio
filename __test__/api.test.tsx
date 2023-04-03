import GameGrid from "@/components/GameGrid";
import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import axios from "axios";
import GenreList from "@/components/GenreList";
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

const fakeGenres = [
  {
    id: 2,
    name: "action",
    image_background: "https://sefdsfds.com",
  },
];

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("GameGrid", () => {
  it("Fetches the game data", async () => {
    mockedAxios.get.mockResolvedValue({ data: { results: fakeGame } });

    render(<GameGrid />);

    await waitFor(() => {
      screen.getAllByText("matrix2");
      screen.getAllByText("matrix");
    });
  });
});

describe("Genre", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("Fetches the genre data", async () => {
    mockedAxios.get.mockResolvedValue({ data: { results: fakeGenres } });
    render(<GenreList />);
    await waitFor(() => {
      screen.getByText("action");
    });
  });
});
