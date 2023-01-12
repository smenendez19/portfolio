// Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  ssr: false,
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
}
)
