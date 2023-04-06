import type { AxiosError } from "axios";
import useData, { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = (): { data: FetchResponse<Genre>; error: AxiosError } =>
  useData("/genres", { genre: null, platform: null, sortOrder: null });
export default useGenres;
