import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";

type Props = {};
//7ad26984614e4308baadfe754c1a00d6

const GameGrid = () => {
  const { data, error } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-5 sm:p-10">
      {error && <p>{error.message}</p>}
      {!error &&
        !data &&
        skeleton.map((skele) => <GameCardSkeleton key={skele} />)}
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default GameGrid;
