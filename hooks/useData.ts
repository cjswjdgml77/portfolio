import axios from "axios";
import useSWR from "swr";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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

const useData = (
  endPoint: string,
  genre?: Genre | null,
  platform?: Platform | null
) => {
  if (genre) endPoint += "?genres=" + genre.id + "&";
  if (platform) endPoint += "?platforms=" + platform.id + "&";
  else endPoint = endPoint + "?";
  return useSWR("https://api.rawg.io/api" + endPoint, fetcher);
};
export default useData;
