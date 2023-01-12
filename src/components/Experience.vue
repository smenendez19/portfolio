<template>
  <v-container fill-height>
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
            <h3>
              {{ $t("experience.title") }}
            </h3>
          </div>
        </v-col>
      </v-row>
      <div
        v-for="exp in experience"
        :key="exp"
      >
        <v-row
          justify="center"
          align="center"
          class="ma-auto"
        >
          <v-col>
            <div v-if="exp.image_logo">
              <v-img
                contain
                class="rounded-lg mx-auto"
                width="200px"
                height="200px"
                :src="'assets/images/' + exp.image_logo"
              />
            </div>
            <v-card-text>
              <div class="text-center my-1">
                <h4>{{ exp.position }}</h4>
              </div>
              <p class="text-center">
                {{ $t("experience.since") }} 
                <strong>{{ exp.since }}</strong> 
                {{ $t("experience.until") }} 
                <strong>{{ exp.until }}</strong>
              </p>
              <v-divider class="my-5" />
              <p class="text-center my-5 mx-15 w-200">
                {{ exp.description }}
              </p>
              <div
                v-if="exp.projects"
                class="text-center my-5"
              >
                <h4>{{ $t("experience.projects") }} </h4>
                <v-row
                  justify="center"
                  class="ma-auto"
                >
                  <v-table>
                    <tbody>
                      <tr
                        v-for="pr in exp.projects"
                        :key="pr"
                      >
                        <td>{{ pr.name }}</td>
                        <td>{{ pr.description }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-row>
              </div>
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