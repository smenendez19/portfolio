import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createI18n } from 'vue-i18n'

import messages from "@/data/translation.json"
import '@/assets/css/styles.css'

const i18n = createI18n({
  locale: (localStorage.getItem('lang').toLowerCase() || 'en'),
  fallbackLocale: 'en',
  legacy: true,
  sync: true,
  messages
})

createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
