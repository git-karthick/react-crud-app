import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

const apiInstance = axios.create({
  baseURL: "https://reqres.in/api",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return apiInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = <D, R = T>(data: D, config: AxiosRequestConfig = {}): Promise<R> => {
    return apiInstance
      .post<R>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}

export default APIClient;
