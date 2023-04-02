import React from "react";
import useSWR from "swr";
import axios from "axios";
import gameFetcher from "@/hooks/useGames";
import GameCard from "./GameCard";
type Props = {};
//7ad26984614e4308baadfe754c1a00d6

const GameGrid = () => {
  const { data, error } = useSWR("https://api.rawg.io/api/games", gameFetcher);
  return (
    <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-5 sm:p-10">
      {error && <p>{error.message}</p>}
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default GameGrid;
