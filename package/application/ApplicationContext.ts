import { FeedApi } from "../mapper/FeedApi";
import { FeedMapper } from "../mapper/FeedMapper";
import { HttpClient } from "../network/HttpClient";

export class ApplicationContext {
    private baseApiUrl: string = 'http:localhost:3000/api/';
    private httpClient: HttpClient;
    private feedApi: FeedApi;
    private feedMapper: FeedMapper;
    constructor() {
        this.httpClient = new HttpClient(this);
        this.feedApi = new FeedApi(this);
        this.feedMapper = new FeedMapper(this);
    }

    public getUrl(): string {
        return this.baseApiUrl;
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
    public setAccessToken(token: string) {
        this.httpClient.setAccessToken(token);
    }
}