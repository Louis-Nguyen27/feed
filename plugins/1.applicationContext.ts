import { ApplicationContext } from "~/package/application/ApplicationContext";

export default defineNuxtPlugin(nuxtApp => {
    const customApplicationContext = ApplicationContext.getInstance();
    console.log('Nuxt Plugin feed applicationContext');
    customApplicationContext.setServices();
    return {
        provide: {
            customApplicationContext: customApplicationContext
        }
    }
});