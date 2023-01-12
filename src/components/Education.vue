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
              {{ $t("education.title") }}
            </h3>
          </div>
        </v-col>
      </v-row>
      <div
        v-for="edu in education"
        :key="edu"
      >
        <v-row
          justify="center"
          align="center"
          class="ma-auto"
        >
          <v-col>
            <div v-if="edu.image_logo">
              <v-img
                contain
                class="rounded-lg mx-auto"
                width="200px"
                height="200px"
                :src="'assets/images/' + edu.image_logo"
              />
            </div>
            <v-card-text>
              <div class="text-center">
                <h3>{{ edu.university }}</h3>
              </div>
              <p class="text-center my-1">
                {{ edu.degree }}
              </p>
              <p class="text-center">
                {{ $t("education.since") }} 
                <strong>{{ edu.since }}</strong>
                {{ $t("education.until") }} 
                <strong>{{ edu.until }}</strong>
              </p>
              <v-divider class="my-5" />
              <p class="text-center my-5">
                {{ edu.description }}
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
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
              {{ $t("courses.title") }}
            </h3>
          </div>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        class="ma-auto"
      >
        <v-table>
          <thead>
            <tr>
              <th class="text-center">
                {{ $t("courses.fields.course") }}
              </th>
              <th class="text-center">
                {{ $t("courses.fields.company") }}
              </th>
              <th class="text-center">
                {{ $t("courses.fields.start_date") }}
              </th>
              <th class="text-center">
                {{ $t("courses.fields.end_date") }}
              </th>
              <th class="text-center">
                {{ $t("courses.fields.description") }}
              </th>
              <th class="text-center">
                {{ $t("courses.fields.certificate") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="course in courses"
              :key="course"
            >
              <td class="text-center">
                {{ course.course }}
              </td>
              <td class="text-center">
                {{ course.company }}
              </td>
              <td class="text-center">
                {{ course.since }}
              </td>
              <td class="text-center">
                {{ course.until }}
              </td>
              <td class="text-center">
                {{ course.description }}
              </td>
              <td
                v-if="course.url"
                class="text-center"
              >
                <a
                  :href="course.url"
                  target="_blank"
                >Link</a>
              </td>
              <td
                v-else
                class="text-center"
              >
                <p>unavaiable</p>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import educationDataES from "@/data/education_es.json";
import educationDataEN from "@/data/education_en.json";
import coursesDataES from "@/data/courses_es.json";
import coursesDataEN from "@/data/courses_en.json";

export default {
  name: "EducationComponent",
  data: () => ({
    education: null,
    courses: null,
    lang: "es",
  }),
  watch: {
    "$i18n.locale": function(newLang) {
      this.lang = newLang
      this.getDataJSON()
    }
  },
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) {
      this.lang = lang
    }
    this.getDataJSON();
  },
  methods: {
    async getDataJSON() {
      if (this.lang === "es") {
        this.education = educationDataES.education;
        this.courses = coursesDataES.courses;
      } else {
        this.education = educationDataEN.education;
        this.courses = coursesDataEN.courses;
      }
    },
  },
}
</script>

<style scoped>
</style>