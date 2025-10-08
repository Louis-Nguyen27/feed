import type { AxiosInstance } from "axios";
import axios from "axios";
import qs from "qs";
import type { ApplicationContext } from "../application/ApplicationContext";

export class HttpClient {
    private httpClient: AxiosInstance;
    private accessToken: string = '';

    constructor(context: ApplicationContext){
        this.httpClient = axios.create({
            baseURL: context.getUrl(),
            timeout: 10000,
            headers: {'Content-Type': 'application/json'}
        })
        this.setInterceptors();
    }

    public setInterceptors() {
        this.httpClient.interceptors.request.use(config => {
            // Add request interceptors here
            return config;
        }, error => {
            return Promise.reject(error);
        });
        this.httpClient.interceptors.response.use(response => {
            // Add response interceptors here
            return response;
        }, error => {
            return Promise.reject(error);
        });
    }

    public setAccessToken(token: string) {
        this.accessToken = token;
    }

    public getHttpClient(): AxiosInstance {
        return this.httpClient;
    }

    public get<T>(url: string, params?: any, includeToken: boolean = true, useInterceptor: boolean = true): Promise<T> {
        const headers = this.createHeaders(false, 'en', includeToken, useInterceptor);
        const paramsSerializer = {
            serialize: (params: any) => { return qs.stringify(params, {arrayFormat: 'repeat'}); }
        }
        return this.httpClient.get(url, {params, headers, paramsSerializer});
    }
    public post<T, R>(url: string, data: R, includeToken: boolean = true, useInterceptor: boolean = true): Promise<T> {
        const headers = this.createHeaders(false, 'en', includeToken, useInterceptor);
        return this.httpClient.post(url, data, {headers});
    }

    public formDataContentType: string = 'multipart/form-data';
    public applicationContentType: string = 'application/json';

    public createHeaders(isFormDataType: boolean = false, lang: string = 'en', includeToken: boolean = true, useInterceptor: boolean = true): {[key: string]: string} {
        const headers: {[key: string]: string} = {
            'Content-Type': isFormDataType ? this.formDataContentType : this.applicationContentType,
            'LANG': lang as string,
            'Use-Interceptor': useInterceptor ? "true" : "false"
        };
        if (includeToken && this.accessToken !== '') {
            headers.authorization = `Bearer ${this.accessToken}`;
        }
        return headers;
    }
}