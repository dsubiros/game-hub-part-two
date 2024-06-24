import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAME } from "../constants";
import ApiClient from "../services/apiClient";
// TODO:  Should move Game interface to a common place
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: [CACHE_KEY_GAME, slug],
    queryFn: () => apiClient.get(slug),
    // staleTime: ms("24h"),
  });

export default useGame;
