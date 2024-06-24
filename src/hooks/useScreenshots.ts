import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAME } from "../constants";
import { Screenshot } from "../entities/Screenshot";
import ApiClient, { FetchResponse } from "../services/apiClient";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery<FetchResponse<Screenshot>>({
    queryKey: [CACHE_KEY_GAME, gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
