import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createI18n } from 'vue-i18n'

import messages from "@/data/translation.json"
import '@/assets/css/styles.css'

const lang = localStorage.getItem('lang')

console.log(lang)

const i18n = createI18n({
  locale: (lang || 'en'),
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
