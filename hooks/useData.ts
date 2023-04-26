import { GameQuery } from "@/pages";
import axios from "axios";
import useSWR from "swr";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export const controller = new AbortController();

const fetcher = (url: string) =>
  axios
    .get(url + "key=7ad26984614e4308baadfe754c1a00d6", {
      signal: controller.signal,
    })
    .then((res) => res.data);

const useData = (endPoint: string, gameQuery: GameQuery) => {
  if (gameQuery?.genre) endPoint += "?genres=" + gameQuery.genre.id + "&";
  if (gameQuery?.sortOrder)
    endPoint += "?ordering=" + gameQuery.sortOrder + "&";
  if (gameQuery?.platform)
    endPoint += "?platforms=" + gameQuery.platform.id + "&";
  if (gameQuery?.searchText)
    endPoint += "?search=" + gameQuery.searchText + "&";
  else if (!gameQuery.genre && !gameQuery.platform && !gameQuery.sortOrder)
    endPoint = endPoint + "?";
  return useSWR("https://api.rawg.io/api" + endPoint, fetcher);
};
export default useData;
