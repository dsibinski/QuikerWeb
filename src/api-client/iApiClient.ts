export interface IApiClient {
  get<TResponse>(url: string, parameters?: object): Promise<TResponse>;
  post<TResponse>(url: string, data?: object): Promise<TResponse>;
  delete<TResponse>(url: string): Promise<TResponse>;
}
