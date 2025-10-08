import { ApplicationContext } from "~/package/application/ApplicationContext";

export default defineNuxtPlugin(nuxtApp => {
    const customApplicationContext = new ApplicationContext();

    return {
        provide: {
            customContainer: customApplicationContext
        }
    }
});