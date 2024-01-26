import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { IApiClient } from "./iApiClient";

class AxiosHttpClient implements IApiClient {
  private instance: AxiosInstance | null = null;

  private get axiosClient(): AxiosInstance {
    return this.instance ?? this.initAxiosClient();
  }

  initAxiosClient() {
    return axios.create();
  }

  get<TResponse>(url: string, parameters?: object): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      this.axiosClient
        .get<TResponse, AxiosResponse<TResponse>>(url, {
          params: parameters,
        })
        .then((result) => {
          resolve(result.data);
        })
        .catch((error: Error | AxiosError) => {
          handleAxiosHttpError(error, reject);
        });
    });
  }

  post<TResponse>(url: string, data?: object): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      this.axiosClient
        .post<TResponse, AxiosResponse<TResponse>>(url, data, {})
        .then((result) => {
          resolve(result.data);
        })
        .catch((error: Error | AxiosError) => {
          handleAxiosHttpError(error, reject);
        });
    });
  }

  delete<TResponse>(url: string): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
      this.axiosClient
        .delete<TResponse, AxiosResponse<TResponse>>(url, {})
        .then((result) => {
          resolve(result.data);
        })
        .catch((error: Error | AxiosError) => {
          handleAxiosHttpError(error, reject);
        });
    });
  }
}

const handleAxiosHttpError = (error: Error | AxiosError, reject: (reason?: unknown) => void) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      if (axiosError.response.status === 404) {
        console.error("Resource not found");
        reject(axiosError.response);
      }
      if (axiosError.response.status === 413) {
        console.error("Request's content is too large");
        reject(axiosError.response);
      } else {
        console.error("Unexpected server error");
        reject(axiosError.response);
      }
    } else if (axiosError.request) {
      // no response
      reject(axiosError);
    } else {
      reject(`Axios request error: ${axiosError.message}`);
    }
  } else {
    reject(error);
  }
};

export const httpClient: IApiClient = new AxiosHttpClient();
