import { createPinia } from 'pinia'
import {markRaw} from "vue";
import router from "../routers"

// add a property named `secret` to every store that is created
// after this plugin is installed this could be in a different file


const pinia = createPinia()
// give the plugin to pinia
// pinia.use()

pinia.use(({ store }) => {
    store.router = markRaw(router)
});

export const usePinia = pinia
