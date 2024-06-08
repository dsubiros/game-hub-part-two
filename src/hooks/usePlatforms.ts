import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platforms from "../data/platforms";
import ApiClient, { FetchResponse } from "../services/apiClient";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms
  });

// // const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });
// const usePlatforms = () => {
//   const controller = new AbortController();

//   return useQuery<FetchResponse<Platform>, Error>({
//     queryKey: CACHE_KEY_PLATFORMS,
//     queryFn: () =>
//       apiClient
//         .get<FetchResponse<Platform>>("/platforms/lists/parents", {
//           signal: controller.signal,
//         })
//         .then((res) => res.data),
//     staleTime: 24 * 60 * 60 * 1000,
//   });
// };

export default usePlatforms;
