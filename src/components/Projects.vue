<template>
  <v-container>
    <v-card
      class="pa-5 rounded-xl"
    >
      <v-row
        justify="center"
        class="ma-auto"
      >
        <v-col>
          <div class="text-start">
            <h3>
              {{ $t("projects.title") }}
            </h3>
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-5">
        <div class="d-flex flex-wrap justify-center ma-auto">
          <v-row justify="center">
            <v-card
              v-for="project in projects"
              :key="project"
              class="px-5 mx-1 my-2"
              outlined
              tile
              width="500px"
            >
              <v-img
                :src="'assets/images/' + project.image"
                class="grey darken-4"
                width="500px"
                height="200px"
              />
              <div class="text-center ma-auto">
                <h4>{{ project.name }}</h4>
              </div>
              <p class="text-center ma-5">
                {{ project.description }}
              </p>
              <v-divider />
              <p class="text-end">
                <a
                  class="text-end"
                  :href="project.url_github"
                  target="_blank"
                >
                  <div>
                    {{ $t("projects.url_title") }}
                  </div>
                </a>
              </p>
            </v-card>
          </v-row>
        </div>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import projectsDataES from "@/data/projects_es.json"
import projectsDataEN from "@/data/projects_en.json"
import { mdiOpenInNew } from '@mdi/js'

export default {
  name: "ProjectsComponent",
  setup() {
  },
  data: () => ({
    projects: null,
    lang: "es",
    icons: {
      mdiOpenInNew
    }
  }),
  watch: {
    "$i18n.locale": function(newLang) {
      this.lang = newLang
      this.getDataJSON()
    }
  },
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang)
      this.lang = lang
    this.getDataJSON()
  },
  methods: {
    async getDataJSON() {
      if (this.lang === "es")
        this.projects = projectsDataES.projects
      else
        this.projects = projectsDataEN.projects
    },
  },
}
</script>

<style scoped>
</style>