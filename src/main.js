import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import FlagIcon from 'vue-flag-icon'

import '@/assets/css/styles.css'

createApp(App)
  .use(router)
  .use(vuetify)
  .use(FlagIcon)
  .mount('#app')
