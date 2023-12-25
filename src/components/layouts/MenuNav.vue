<template>
  <v-app-bar
    height="50"
  >
    <v-app-bar-nav-icon
      class="d-flex d-sm-none d-md-none d-lg-none d-xl-none"
      @click="drawer=true"
    />
    <v-row
      justify="start"
    >
      <v-col
        cols="12"
        class=""
      >
        <v-btn href="/portfolio/">
          <h3>Portfolio</h3>
        </v-btn>
      </v-col>
    </v-row>
    <v-tabs
      v-model="tab"
      class="d-none d-sm-flex"
      center-active
      dark
      show-arrows
      hide-slider
    >
      <v-tab @click="goToComponent('main')">
        {{ $t("menu.about") }}
      </v-tab>
      <v-tab @click="goToComponent('experience')">
        {{ $t("menu.experience") }}
      </v-tab>
      <v-tab @click="goToComponent('education')">
        {{ $t("menu.education") }}
      </v-tab>
      <v-tab @click="goToComponent('courses')">
        {{ $t("menu.courses") }}
      </v-tab>
      <v-tab @click="goToComponent('skills')">
        {{ $t("menu.skills") }}
      </v-tab>
      <v-tab @click="goToComponent('projects')">
        {{ $t("menu.projects") }}
      </v-tab>
      <v-tab @click="goToComponent('download')">
        {{ $t("menu.download") }}
      </v-tab>
    </v-tabs>
    <v-spacer />
    <v-btn
      class="mr-2"
      @click="toggleTheme"
    >
      <v-icon :icon="icons.mdiBrightness6" />
    </v-btn>
    <v-btn @click="changeLang">
      <v-avatar
        class="mr-2"
        size="24"
        tile
      >
        <img
          v-if="lang === 'es'"
          :src="icons.flagArg"
        >
        <img
          v-else
          :src="icons.flagUSA"
        >
      </v-avatar>
      <div class="mr-2">
        {{ lang }}
      </div>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list
      density="compact"
      nav
    >
      <div>
        <div
          v-for="(item, i) in items"
          :key="item"
        >
          <v-list-item @click="goToComponent(components[i])">
            {{ item.charAt(0).toUpperCase() + item.slice(1) }}
          </v-list-item>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useTheme } from 'vuetify'
import { mdiBrightness6 } from '@mdi/js';
import flagArg from "@/assets/icons/flags/argentina.png"
import flagUSA from "@/assets/icons/flags/usa.png"

export default {
  name: "MenuNavComponent",
  setup() {
    const theme = useTheme()
    const themeValue = localStorage.getItem('theme')
    if (themeValue) {
      if (themeValue === 'dark') {
        theme.global.name.value =  'dark'
      }
      else if (themeValue === 'light') {
        theme.global.name.value =  'light'
      }
    }
    else theme.global.name.value =  'dark'
    return {
      theme,
      toggleTheme: () => {
        const themeValue = localStorage.getItem('theme')
        if (themeValue) {
          if (themeValue === 'dark') {
            localStorage.setItem('theme', 'light')
            theme.global.name.value =  'light'
          }
          else {
            localStorage.setItem('theme', 'dark')
            theme.global.name.value =  'dark'
          }
        }
        else {
          localStorage.setItem('theme', 'dark')
        }
      }
    }
  },
  data: () => ({
    lang: "es",
    drawer: false,
    tab : null,
    icons: {
      mdiBrightness6,
      flagArg,
      flagUSA
    },
    components: [
      "about",
      "experience",
      "education",
      "courses",
      "skills",
      "projects",
      "contact",
      "download"
    ]
  }),
  computed: {
    items() {
      return [
        this.$t("menu.about"),
        this.$t("menu.experience"),
        this.$t("menu.education"),
        this.$t("menu.courses"),
        this.$t("menu.skills"),
        this.$t("menu.projects"),
        this.$t("menu.contact"),
        this.$t("menu.download"),
      ]
    }
  },
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) {
      this.lang = lang
    }
    else {
      this.lang = "es"
      localStorage.setItem('lang', this.lang)
    }
  },
  methods: {
    async goToComponent(componentId) {
      document.getElementById(componentId.toLowerCase()).scrollIntoView({ behavior: "smooth" })
      if (this.drawer) this.drawer = false
    },
    async changeLang() {
      const lang = this.lang === 'es' ? 'en' : 'es'
      this.lang = lang
      this.$i18n.locale = lang.toLowerCase()
      localStorage.setItem('lang', this.lang)
    }
  }
}
</script>

<style scoped>
.fixed-bar {
    position: sticky;
    top: 6em;
    z-index: 2;
}
</style>