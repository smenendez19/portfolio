<template>
  <v-container fill-height>
    <v-row
      class="ma-auto"
    >
      <v-col>
        <h2 class="text-start">
          {{ $t("experience.title") }}
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-card
        class="pa-5 rounded-xl elevation-24"
        width="90%"
        height="100%"
      >
        <v-row
          v-for="exp in experience"
          :key="exp"
          class="my-5"
        >
          <v-col
            cols="3"
            align="center"
          >
            <v-img
              v-if="exp.image_logo"
              contain
              class="rounded-lg"
              width="150px"
              height="150px"
              :src="'assets/images/' + exp.image_logo"
              alt=""
            />
          </v-col>
          <v-divider
            vertical
            class="mx-5"
          />
          <v-col>
            <v-card-text>
              <h4 class="text-center my-1">
                {{ exp.position }}
              </h4>
              <p class="text-center my-1">
                <strong>{{ exp.since }}</strong> 
                <strong> - </strong>
                <strong>{{ exp.until }}</strong>
              </p>
              <v-divider class="my-5" />
              <p class="text-center my-5">
                {{ exp.description }}
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import experienceDataES from "@/data/experience_es.json"
import experienceDataEN from "@/data/experience_en.json"


export default {
  name: "ExperienceComponent",
  setup() {
  },
  data: () => ({
    experience: null,
    lang : "es"
  }),
  watch: {
    "$i18n.locale": function(newLang) {
      this.lang = newLang
      this.getDataJSON()
    }
  },
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) this.lang = lang
    this.getDataJSON()
  },
  methods: {
    async getDataJSON() {
      if (this.lang === "es") 
        this.experience = experienceDataES.job_experience
      else
        this.experience = experienceDataEN.job_experience
    },
  },
}
</script>

<style scoped>
</style>