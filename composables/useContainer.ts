import type { ApplicationContext } from "~/package/application/ApplicationContext";

export const useContainer = () => {
    const { $customContainer } = useNuxtApp();
    return ($customContainer as ApplicationContext).getFeedMapper();
}