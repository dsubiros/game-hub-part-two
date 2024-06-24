import axios, { AxiosRequestConfig } from "axios";
import { Game } from "../entities/Game";
import { Trailer } from "../entities/Trailer";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "287fb05a407d45eb994ed52daed60eae",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<Game>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  // getGameMovies = (id: number | string) =>
  //   axiosInstance
  //     .get<FetchResponse<T>>(`${this.endpoint}/${id}/movies`)
  //     .then((res) => res.data);
}

export default ApiClient;
