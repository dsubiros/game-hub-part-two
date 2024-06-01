import { FetchResponse } from "../hooks/useData";
import apiClient from "./api-client";

export class HttpServices<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () =>
    apiClient
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
      // .then((res) => res.data.results);
}

export default HttpServices;
