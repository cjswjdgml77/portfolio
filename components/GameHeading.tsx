import { GameQuery } from "@/pages";
import React from "react";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games
  // Xbox Games
  // XBox Action Games
  return (
    <>
      <h1 className="text-darkSecondary dark:text-darkTeritary text-6xl sm:text-6xl">{`${
        gameQuery.platform?.name || ""
      } ${gameQuery.genre?.name || ""} Games`}</h1>
    </>
  );
};

export default GameHeading;
