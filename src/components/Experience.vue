<template>
  <v-container fill-height>
    <v-card
      class="pa-5 rounded-xl"
    >
      <v-row
        class="ma-auto"
      >
        <v-col>
          <div class="text-start">
            <h3>
              {{ $t("experience.title") }}
            </h3>
          </div>
        </v-col>
      </v-row>
      <div
        v-for="exp in experience"
        :key="exp"
        class="my-5"
      >
        <v-row>
          <v-col
            cols="3"
            align="center"
          >
            <div v-if="exp.image_logo">
              <v-img
                contain
                class="rounded-lg mx-auto"
                width="150px"
                height="150px"
                :src="'assets/images/' + exp.image_logo"
              />
            </div>
          </v-col>
          <v-divider
            vertical
            class="mx-5"
          />
          <v-col>
            <v-card-text>
              <div class="text-center my-1">
                <h4>{{ exp.position }}</h4>
              </div>
              <p class="text-center">
                <strong>{{ exp.since }}</strong> 
                <strong> - </strong>
                <strong>{{ exp.until }}</strong>
              </p>
              <v-divider class="my-5" />
              <p class="text-center my-5 mx-15 w-200">
                {{ exp.description }}
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-card>
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