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
  },
};

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#0c1844",
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
