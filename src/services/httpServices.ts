import { AxiosRequestConfig } from "axios";
import apiClient, { FetchResponse } from "./api-client";

export class HttpServices<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) =>
    apiClient
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
      // .then((res) => res.data.results);
}

export default HttpServices;
