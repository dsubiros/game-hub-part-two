import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import ApiClient, {FetchResponse} from "../services/apiClient";

// const genreServices = new HttpServices<Genre>("/genres");
const apiClient = new ApiClient<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, results: genres as Genre[]},
  });
};

export default useGenres;
