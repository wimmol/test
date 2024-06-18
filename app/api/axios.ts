import axios, { AxiosError } from 'axios';
import WebApp from '@twa-dev/sdk';

const defaultAxios = axios.create({
  baseURL: 'https://efobegdock.beget.app/api/v1',
  headers: {
    Authorization: WebApp.initData,
    'Content-Type': 'application/json',
  },
});

type MethodsType = 'get' | 'post' | 'put' | 'delete';

export interface AxiosRequestConfig<T> {
  url?: string;
  method?: MethodsType;
  data?: T | null;
  params?: Record<string, any>;
  headers?: any;
  responseType?: any;
  withAuth?: boolean;
}

export interface ErrorType {
  title: string;
  message: string | undefined;
  status: number | undefined;
  headers?: any;
}

export type IAxiosResponse<T> =
  | { error: ErrorType; data: null }
  | { data: T; error: null };

interface ErrorResponseType {
  error: {
    message: string;
    code: number;
  };
}

const wrappedAxiosRequest = async <ReqType, RespType>({
  url,
  method,
  data = null,
  headers = {},
  params = {},
  responseType,
}: AxiosRequestConfig<ReqType>) => {
  try {
    const response = await defaultAxios({
      url,
      method,
      data,
      headers,
      params,
      responseType,
    });

    const responseObj: IAxiosResponse<RespType> = {
      data: response.data,
      error: null,
    };
    return responseObj;
  } catch (error) {
    const handledError = errorHandler(error);
    const errorObj: IAxiosResponse<RespType> = {
      error: handledError,
      data: null,
    };
    return errorObj;
  }
};

const errorHandler = (error: any): ErrorType => {
  const typedError = error as AxiosError<ErrorResponseType>;

  return {
    title: typedError.message,
    message: typedError.response?.data?.error?.message,
    status: typedError.response?.status,
    headers: typedError.response?.headers,
  };
};

export { wrappedAxiosRequest };
