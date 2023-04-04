import type { AxiosError } from "axios";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenres";
import { Platform as UsePlatform } from "./usePlatforms";
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

const useGames = (
  genre: Genre | null,
  platform: UsePlatform | null
): { data: FetchResponse<Game>; error: AxiosError } =>
  useData("/games", genre, platform);
export default useGames;
