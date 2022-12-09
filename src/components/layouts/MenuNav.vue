<template>
  <v-app-bar
    app
    :elevate-on-scroll="true"
  >
    <v-app-bar-nav-icon
      class="d-flex d-sm-none d-md-none"
      @click="drawer=true"
    />
    <v-app-bar-title>Santiago Menendez</v-app-bar-title>
    <v-row
      class="d-none d-sm-flex"
      justify="start"
    >
      <v-tabs
        v-if="lang === 'ES'"
        v-model="tab"
      >
        <v-tab @click="goToComponent('about')">
          Acerca de Mi
        </v-tab>
        <v-tab @click="goToComponent('experience')">
          Experiencia
        </v-tab>
        <v-tab @click="goToComponent('education')">
          Educacion y Cursos
        </v-tab>
        <v-tab @click="goToComponent('skills')">
          Skills
        </v-tab>
        <v-tab @click="goToComponent('projects')">
          Proyectos
        </v-tab>
        <v-tab @click="goToComponent('contact')">
          Contacto
        </v-tab>
      </v-tabs>
      <v-tabs v-else>
        <v-tab @click="goToComponent('about')">
          About me
        </v-tab>
        <v-tab @click="goToComponent('experience')">
          Experience
        </v-tab>
        <v-tab @click="goToComponent('education')">
          Education and Courses
        </v-tab>
        <v-tab @click="goToComponent('skills')">
          Skills
        </v-tab>
        <v-tab @click="goToComponent('projects')">
          Projects
        </v-tab>
        <v-tab @click="goToComponent('contact')">
          Contact
        </v-tab>
      </v-tabs>
    </v-row>
    <v-btn @click="toggleTheme">
      <v-icon>mdi-brightness-6</v-icon>
    </v-btn>
    <v-btn @click="changeLang">
      <flag :iso="flag" />
      {{ lang }}
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
      <div v-if="lang === 'ES'">
        <div
          v-for="(item, i) in items_es"
          :key="item"
        >
          <v-list-item @click="goToComponent(items_en[i])">
            {{ item.charAt(0).toUpperCase() + item.slice(1) }}
          </v-list-item>
        </div>
      </div>
      <div v-else>
        <div
          v-for="item in items_en"
          :key="item"
        >
          <v-list-item @click="goToComponent(item)">
            {{ item.charAt(0).toUpperCase() + item.slice(1) }}
          </v-list-item>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';
import { useTheme } from 'vuetify'

export default defineComponent({
  name: "MenuNavComponent",
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  data: () => ({
    flag: "ar",
    lang: "ES",
    drawer: false,
    items_en: [
      'about', 'experience', 'education', 'skills', 'projects', 'contact'
    ],
    items_es: [
      "Sobre Mi", "Experiencia", "Educacion", "Skills", "Proyectos", "Contacto"
    ],
    tab : null
  }),
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) {
      this.lang = lang
    }
    else {
      this.lang = "ES"
      localStorage.setItem('lang', this.lang)
    }
    this.flag = lang === "ES" ? "ar" : "us"
  },
  methods: {
    async goToComponent(componentId) {
      document.getElementById(componentId).scrollIntoView({ behavior: "smooth" });
      if (this.drawer) this.drawer = false;
    },
    async changeLang() {
      const lang = this.lang === 'ES' ? 'EN' : 'ES'
      this.lang = lang
      localStorage.setItem('lang', this.lang)
      this.flag = this.lang === 'EN' ? "us" : "ar"
      window.location.reload()
    }
  }
})
</script>

<style>
.fixed-bar {
    position: sticky;
    top: 6em;
    z-index: 2;
}
</style>