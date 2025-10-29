// Icons
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";

const customLightTheme = {
  dark: false,
  colors: {
    background: "#FEFBD8",
    surface: "#EECEB9",
    primary: '#BB9AB1',
    'on-background': '#000000',
    'on-surface': '#000000',
  },
};

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#0c1844",
    'on-background': '#FFFFFF',
    'on-surface': '#FFFFFF',
  },
};

export default createVuetify({
  ssr: false,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: customLightTheme,
      dark: customDarkTheme
    }
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
