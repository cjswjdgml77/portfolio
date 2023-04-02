import React from "react";
import useSWR from "swr";
import axios from "axios";
type Props = {};
//7ad26984614e4308baadfe754c1a00d6
interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const fetcher = (url: string) =>
  axios
    .get<FetchGamesResponse>(url + "?key=7ad26984614e4308baadfe754c1a00d6")
    .then((res) => res.data);
const GameGrid = (props: Props) => {
  const { data, error } = useSWR("https://api.rawg.io/api/games", fetcher);
  return (
    <ul>
      {error && <p>{error.message}</p>}
      {data?.results.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
