import { AxiosError, AxiosResponse, Method, ResponseType } from 'axios';
import { SyntheticEvent } from 'react';

declare global {
  type RequestResponse<T> = { response: AxiosResponse<T> | null };
  type RequestError = { error: AxiosError | null };
  type CoreRequest = {
    name: string;
    url: string;
    method: Method;
    headers: undefined;
    params: undefined;
    data: undefined;
    responseType?: ResponseType;
  };
  type ResponseReturn<Data> = RequestResponse<Data> & RequestError;
  type ContentType = 'application/json';
  type RequestHeaders = {
    Accept: string;
    'Content-Type': ContentType;
    Authorization?: string;
  };

  interface IEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
    relatedTarget: EventTarget | null;
  }
}

export {};
