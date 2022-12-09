<template>
  <v-container>
    <v-card
      class="pa-5 rounded-xl"
      color="principal"
    >
      <v-row
        justify="center"
        class="ma-auto"
      >
        <v-col>
          <div class="text-start">
            <h3 v-if="lang === 'ES'">
              Proyectos personales
            </h3>
            <h3 v-else>
              Personal Projects
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
                  <div v-if="lang === 'ES'">
                    Accede al repositorio
                  </div>
                  <div v-else>
                    Access to the repository
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
import { defineComponent } from 'vue';
import jsonData from "@/data/data.json"
import jsonDataEN from "@/data/data_en.json";

export default defineComponent({
  name: "ProjectsComponent",
  setup() {
  },
  data: () => ({
    projects: null,
    lang: "ES"
  }),
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) {
      this.lang = lang
    }
    this.getDataJSON();
  },
  methods: {
    async getDataJSON() {
      if (this.lang === "ES") {
        this.projects = jsonData.data.project_component.projects;
      } else {
        this.projects = jsonDataEN.data.project_component.projects;
      }
    },
  },
})
</script>

<style>
</style>