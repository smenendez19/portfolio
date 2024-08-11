<template>
  <v-container fill-height>
    <v-row class="ma-auto">
      <v-col>
        <h2 class="text-start">
          {{ $t("projects.title") }}
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="project in projects" :key="project" align="center">
        <v-card
          :title="project.name"
          outlined
          tile
          max-width="500px"
          height="100%"
          class="d-flex flex-column"
        >
          <v-row>
            <v-col>
              <v-card-text>
                <v-row>
                  <v-img
                    :src="'assets/images/' + project.image"
                    class="grey darken-4"
                    width="500px"
                    height="200px"
                  />
                </v-row>
                <v-row>
                  <p class="text-center ma-5">
                    {{ project.description }}
                  </p>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col align="end" align-self="end" class="border">
              <v-btn variant="text" :href="project.url_github" target="_blank">
                {{ $t("projects.url_title") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projectsDataES from "@/data/projects_es.json";
import projectsDataEN from "@/data/projects_en.json";
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "ProjectsComponent",
  setup() {},
  data: () => ({
    projects: null,
    lang: "es",
    icons: {
      mdiOpenInNew,
    },
  }),
  watch: {
    "$i18n.locale": function (newLang) {
      this.lang = newLang;
      this.getDataJSON();
    },
  },
  async created() {
    const lang = localStorage.getItem("lang");
    if (lang) this.lang = lang;
    this.getDataJSON();
  },
  methods: {
    async getDataJSON() {
      if (this.lang === "es") this.projects = projectsDataES.projects;
      else this.projects = projectsDataEN.projects;
    },
  },
};
</script>

<style scoped></style>
