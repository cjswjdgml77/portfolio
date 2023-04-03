import { Game } from "@/hooks/useGames";
import Image from "next/image";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <div className="flex flex-col items-center w-full rounded-2xl bg-darkSecondary overflow-hidden">
      <Image
        src={game.background_image}
        alt={game.name}
        width="500"
        height="300"
      />
      <div className="flex flex-col flex-1 w-full justify-center items-center gap-2 py-8">
        <p className="text-5xl sm:text-3xl text-darkTeritary text-center sm:p-4">
          {game.name}
        </p>
        <div className="flex w-full justify-around items-center">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
