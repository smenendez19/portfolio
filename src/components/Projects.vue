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
      <v-col>
        <v-carousel
          height="600"
          cycle
          hide-delimiter-background
          show-arrows="hover"
          class="rounded-xl"
        >
          <v-carousel-item v-for="project in projects" :key="project.name">
            <v-card
              :title="project.name"
              outlined
              tile
              height="100%"
              class="text-center d-flex flex-column pb-8"
            >
              <v-row justify="center" class="ma-0 flex-grow-0">
                <v-col cols="12" class="pa-0">
                  <v-img
                    :src="'assets/images/' + project.image"
                    class="grey darken-4"
                    height="300px"
                    contain
                  />
                </v-col>
              </v-row>
              <v-row justify="center" class="ma-0 flex-grow-1 overflow-hidden">
                <v-col
                  cols="12"
                  md="10"
                  lg="8"
                  class="d-flex flex-column align-center"
                >
                  <v-card-text class="text-center description-container">
                    <div class="scrollable-content">
                      <p class="text-center project-description">
                        {{ project.description }}
                      </p>
                    </div>
                  </v-card-text>
                  <v-btn
                    variant="outlined"
                    :href="project.url_github"
                    target="_blank"
                    class="mt-3"
                  >
                    <template #prepend>
                      <v-icon :icon="icons.mdiOpenInNew"></v-icon>
                    </template>
                    {{ $t("projects.url_title") }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-carousel-item>
        </v-carousel>
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

<style scoped>
.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
}

.description-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
}

.scrollable-content {
  overflow-y: auto;
  max-height: 150px;
  padding-right: 10px;
  margin-bottom: 15px;
}

.scrollable-content::-webkit-scrollbar {
  width: 8px;
}

.scrollable-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5);
}

/* Animación de deslizamiento para el carousel */
:deep(.v-carousel__controls) {
  z-index: 10;
}

:deep(.v-window__container) {
  position: relative;
  overflow: hidden;
}

:deep(.v-window-item) {
  transition:
    transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  will-change: transform, opacity;
}

:deep(.v-carousel-item) {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
</style>
