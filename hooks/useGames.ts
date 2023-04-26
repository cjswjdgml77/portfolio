import { GameQuery } from "@/pages";
import type { AxiosError } from "axios";
import useData, { FetchResponse } from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (
  gameQuery: GameQuery
): { data: FetchResponse<Game>; error: AxiosError } =>
  useData("/games", gameQuery);
export default useGames;
