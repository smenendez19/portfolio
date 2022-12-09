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
            <h3 v-if="lang === 'ES'">
              Expeciencia Laboral
            </h3>
            <h3 v-else>
              Job Experience
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
              <p
                v-if="lang === 'ES'"
                class="text-center"
              >
                Desde {{ exp.since }} hasta {{ exp.until }}
              </p>
              <p
                v-else
                class="text-center"
              >
                Since {{ exp.since }} until {{ exp.until }}
              </p>
              <v-divider class="my-5" />
              <p class="text-center my-5 mx-15 w-200">
                {{ exp.description }}
              </p>
              <div
                v-if="exp.projects"
                class="text-center my-5"
              >
                <h4>Proyectos</h4>
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
import { defineComponent } from 'vue';
import jsonData from "@/data/data.json"
import jsonDataEN from "@/data/data_en.json";


export default defineComponent({
  name: "ExperienceComponent",
  setup() {
  },
  data: () => ({
    experience: null,
    lang : "ES"
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
        this.experience = jsonData.data.experience_component.job_experience;
      } else {
        this.experience = jsonDataEN.data.experience_component.job_experience;
      }
    },
  },
})
</script>

<style>
</style>