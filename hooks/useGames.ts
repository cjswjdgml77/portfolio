import axios from "axios";

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
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const gameFetcher = (url: string) =>
  axios
    .get<FetchGamesResponse>(url + "?key=7ad26984614e4308baadfe754c1a00d6")
    .then((res) => res.data);

export default gameFetcher;
