import { FeedApi } from "../mapper/FeedApi";
import { FeedMapper } from "../mapper/FeedMapper";
import { HttpClient } from "../network/HttpClient";

export class ApplicationContext {
    private static instance: ApplicationContext;
    private httpClient: HttpClient;
    private feedApi: FeedApi;
    private feedMapper: FeedMapper;
    private baseUrl: string = 'http://localhost:3000/api';
    constructor() {

    }
    public static getInstance(): ApplicationContext {
        if (!ApplicationContext.instance) {
            ApplicationContext.instance = new ApplicationContext();
        }
        return ApplicationContext.instance;
    }
    public setServices() {
        this.httpClient = new HttpClient(this);
        this.feedApi = new FeedApi(this);
        this.feedMapper = new FeedMapper(this);
    }
    public getBaseUrl(): string {
        return this.baseUrl;
    }
    public getHttpClient(): HttpClient {
        return this.httpClient;
    }
    public getFeedApi(): FeedApi {
        return this.feedApi;
    }
    public getFeedMapper(): FeedMapper {
        return this.feedMapper;
    }
}
