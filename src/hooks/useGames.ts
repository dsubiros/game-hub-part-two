import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constants";
import ApiClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const params: any = {
    genres: gameQuery.genreId,
    parent_platforms: gameQuery.platformId,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  };

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
