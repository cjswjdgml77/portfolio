import axios from "axios";
import useSWR from "swr";
import { Genre } from "./useGenres";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const fetcher = (url: string) =>
  axios
    .get(url + "?key=7ad26984614e4308baadfe754c1a00d6")
    .then((res) => res.data);

const useData = (endPoint: string) => {
  return useSWR("https://api.rawg.io/api" + endPoint, fetcher);
};
export default useData;
