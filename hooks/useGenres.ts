import axios from "axios";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const GenreFetcher = (url: string) =>
  axios
    .get<FetchGenreResponse>(url + "?key=7ad26984614e4308baadfe754c1a00d6")
    .then((res) => res.data);

export default GenreFetcher;
