import type { ApplicationContext } from "../application/ApplicationContext";
import type { HttpClient } from "../network/HttpClient";

export class FeedApi {
    private httpClient: HttpClient;
    constructor(context: ApplicationContext) {
        this.httpClient = context.getHttpClient();
    }

    public getGeneralFeed() {
        return this.httpClient.get<any>('', {}, true, false);
    }
}