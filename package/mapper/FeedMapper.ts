import type { ApplicationContext } from "../application/ApplicationContext";
import type { FeedApi } from "./FeedApi";

export class FeedMapper {
    private feedApi: FeedApi;
    constructor(context: ApplicationContext) {
        this.feedApi = context.getFeedApi();
    }

    public async fetchGeneralFeed() {
        const response = await this.feedApi.getGeneralFeed();
        console.log('FeedMapper fetchGeneralFeed response:', response);
        return response;
    }
}