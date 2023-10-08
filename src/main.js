import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { usePinia } from './plugins/pinia'
import { loadFonts } from './plugins/webfontloader'
import router from './routers'


loadFonts()



createApp(App)
  .use(router)
  .use(vuetify)
  .use(usePinia)
  .mount('#app')
