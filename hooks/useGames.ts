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
}

const useGames = (): { data: FetchResponse<Game>; error: AxiosError } =>
  useData("/games");
export default useGames;
