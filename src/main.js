import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import FlagIcon from 'vue-flag-icon'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(FlagIcon)
  .mount('#app')
