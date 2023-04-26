import { AxiosError } from "axios";
import useData from "./useData";
import { FetchResponse } from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = (): { data: FetchResponse<Platform>; error: AxiosError } =>
  useData("/platforms/lists/parents", {
    genre: null,
    platform: null,
    searchText: null,
    sortOrder: null,
  });

export default usePlatforms;
