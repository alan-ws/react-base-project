import axios, { AxiosRequestConfig } from 'axios';
import { handleNetworkError } from '../utilities/errorHandling';
import Cookies from 'js-cookie';

export type Endpoint<T> = {
  data: CoreRequest;
  fetch: () => () => Promise<ResponseReturn<T>>;
};

export const version = 'v2';
const baseURL = 'https://localhost/';

export const defaultHeaders: RequestHeaders = {
  Accept: 'application/ld+json',
  'Content-Type': 'application/json',
  'X-Client-Platform': 'Web',
  'X-Client-Name': 'Web',
  'X-Client-Version': '1.0.0',
};

export const request = async <ResponseData>(
  requestData: CoreRequest,
  jwtTokenOverride?: string,
): Promise<ResponseReturn<ResponseData>> => {
  const { url, method, data, params, headers: customHeaders, responseType } = requestData;
  const token = jwtTokenOverride || Cookies.get('token');
  const headers: RequestHeaders = {
    ...(customHeaders || defaultHeaders),
    'X-Header': sessionStorage.getItem('x-header'),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (method === 'PATCH') {
    headers['Content-Type'] = 'application/merge-patch+json';
  }

  const options: AxiosRequestConfig = {
    url,
    baseURL,
    method,
    data,
    params,
    headers,
    responseType: responseType || 'json',
  };

  return axios(options)
    .then((response) => ({ response, error: null }))
    .catch(async (error) => {
      handleNetworkError(error);

      return { response: null, error };
    });
};
