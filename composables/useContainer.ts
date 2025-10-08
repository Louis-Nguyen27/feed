import type { ApplicationContext } from "~/package/application/ApplicationContext";

export const useContainer = () => {
    const { $customApplicationContext } = useNuxtApp();
    return ($customApplicationContext as ApplicationContext).getFeedMapper();
}