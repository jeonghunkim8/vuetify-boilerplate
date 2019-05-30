import httpClient, { AxiosResponse, AxiosError, AxiosRequestConfig, AxiosPromise } from 'axios';
import { Logger } from '@/utils';
import { HttpStatus } from '@/types/enums/HttpStatus';

export interface HttpResponse<T = any> {
  data: T;
  status: HttpStatus;
}

const resultHandler = (promise: AxiosPromise<AxiosResponse>) => {
  return promise.then( (response: AxiosResponse) => {
      Logger.debug('response:', response);
      return {
        data: response.data,
        status: response.status,
      };
  });
};


export default class HttpHelper {

  public static config: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_BASE_API_URL, 
    timeout: 10 * 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  };

  public static get<T>(url: string, config = {...this.config}): Promise<HttpResponse<T>> {
    Logger.debug('httpGet url:', url);
    return resultHandler(httpClient.get(url, config));
  }

  public static post<T>(url: string, data: any, config = {...this.config}): Promise<HttpResponse<T>> {
    Logger.debug('httpPost url:', url);
    return resultHandler(httpClient.post(url, data, config));
  }

}
