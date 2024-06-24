import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import ApiClient, { FetchResponse } from "../services/apiClient";
import { CACHE_KEY_TRAILERS } from "./../constants";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: [CACHE_KEY_TRAILERS, gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
