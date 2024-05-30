import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const controller = new AbortController();

  const query = useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres", {
          signal: controller.signal,
          // ...requestConfig
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

  // return useData<Genre>("/genres");
  return query;
};

export default useGenres;
