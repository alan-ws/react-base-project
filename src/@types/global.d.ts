import { AxiosError, AxiosResponse, Method } from 'axios';

declare global {
  type RequestResponse<T> = { response: AxiosResponse<T> | null };
  type RequestError = { error: AxiosError | null };
  type CoreRequest = {
    name: string;
    url: string;
    method: Method;
    headers?: any;
    params?: any;
    data?: any;
    responseType?: ResponseType;
  };
  type ResponseReturn<Data> = RequestResponse<Data> & RequestError;
  type RequestHeaders = any;
}

export {};
