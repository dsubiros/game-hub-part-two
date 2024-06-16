import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAME } from "../constants";
import ApiClient from "../services/apiClient";
import { Game } from "./useGames";

const apiClient = new ApiClient<Game>("/games/:id");

const useGame = (id: string | number) => {
  // const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useQuery<Game, Error>({
    queryKey: [CACHE_KEY_GAME, id],
    queryFn: () => apiClient.get(id),
    staleTime: ms("24h"),
  });
};

export default useGame;
