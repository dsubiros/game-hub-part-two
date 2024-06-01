import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import HttpServices from "../services/httpServices";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; 
}

const gameServices = new HttpServices<Game>("/games");

const useGames = (gameQuery: GameQuery) => { 
  const params = {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  };

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () => gameServices.getAll({ params }),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGames;
