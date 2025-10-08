import { useContainer } from "./useContainer";

export const useFeedService = () => {
    const feedMapper = useContainer();
    const getGeneralFeed = async () => {
        return await feedMapper.fetchGeneralFeed();
    }
    return { getGeneralFeed };
}