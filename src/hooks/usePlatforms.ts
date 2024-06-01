import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import HttpServices from "../services/httpServices";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  slug: string;
  name: string;
}

const platformServices = new HttpServices<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS , 
    queryFn: platformServices.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: platforms.length, results: platforms}
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
