<template>
  <v-container fill-height>
    <v-row class="ma-auto">
      <v-col>
        <h2 class="text-start">
          {{ $t("experience.title") }}
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
          <v-carousel-item v-for="exp in experience" :key="exp.position">
            <v-card
              outlined
              tile
              height="100%"
              class="text-center d-flex flex-column pb-8"
            >
              <v-row justify="center" class="ma-0 flex-grow-0 mt-5">
                <v-col cols="12" class="pa-0">
                  <v-img
                    v-if="exp.image_logo"
                    contain
                    class="mx-auto"
                    width="200px"
                    height="200px"
                    :src="'assets/images/' + exp.image_logo"
                    alt=""
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
                    <h3 class="mb-3">{{ exp.position }}</h3>
                    <p class="text-subtitle-1 mb-3">
                      <strong>{{ exp.since }}</strong>
                      <strong> - </strong>
                      <strong>{{ exp.until }}</strong>
                    </p>
                    <v-divider class="my-4" />
                    <div class="scrollable-content">
                      <p
                        v-html="exp.description"
                        class="experience-description"
                      ></p>
                    </div>
                  </v-card-text>
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
import experienceDataES from "@/data/experience_es.json";
import experienceDataEN from "@/data/experience_en.json";

export default {
  name: "ExperienceComponent",
  setup() {},
  data: () => ({
    experience: null,
    lang: "es",
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
      if (this.lang === "es") this.experience = experienceDataES.job_experience;
      else this.experience = experienceDataEN.job_experience;
    },
  },
};
</script>

<style scoped>
.experience-description {
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
  max-height: 200px;
  padding-right: 10px;
  margin-bottom: 20px;
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
