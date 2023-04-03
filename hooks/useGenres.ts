import type { AxiosError } from "axios";
import useData, { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
}
const useGenres = (): { data: FetchResponse<Genre>; error: AxiosError } =>
  useData("/genres");
export default useGenres;
