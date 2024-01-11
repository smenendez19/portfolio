<template>
  <v-container fill-height>
    <v-row
      class="ma-auto"
    >
      <v-col>
        <h2 class="text-start">
          {{ $t("education.title") }}
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
          v-for="edu in education"
          :key="edu"
          class="my-5"
        >
          <v-col
            cols="3"
            align="center"
          >
            <v-img
              v-if="edu.image_logo"
              contain
              class="rounded-lg"
              width="150px"
              height="150px"
              :src="'assets/images/' + edu.image_logo"
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
                {{ edu.university }}
              </h4>
              <p class="text-center my-1">
                {{ edu.degree }}
              </p>
              <p class="text-center my-1">
                <strong>{{ edu.since }}</strong>
                <strong> - </strong>
                <strong>{{ edu.until }}</strong>
              </p>
              <v-divider class="my-5" />
              <p class="text-center my-5">
                {{ edu.description }}
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import educationDataES from "@/data/education_es.json"
import educationDataEN from "@/data/education_en.json"

export default {
  name: "EducationComponent",
  data: () => ({
    education: null,
    lang: "es",
  }),
  computed: {
  },
  watch: {
    "$i18n.locale": function (newLang) {
      this.lang = newLang
      this.getDataJSON()
    }
  },
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) this.lang = lang
    this.getDataJSON();
  },
  methods: {
    async getDataJSON() {
      if (this.lang === "es") {
        this.education = educationDataES.education
      } else {
        this.education = educationDataEN.education
      }
    },
  },
}
</script>

<style scoped>
</style>