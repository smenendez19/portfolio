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
        <v-data-table
          v-model:items-per-page="datatable.itemsPerPage"
          v-model:sort-by="datatable.sortBy"
          :headers="getDataTableHeaders"
          :items="courses"
          item-value="course"
          dense
          multi-sort
          no-data-text="No data"
        >
          <template #item="{ item }">
            <tr>
              <td>
                {{ item.columns.course }}
              </td>
              <td>
                {{ item.columns.company }}
              </td>
              <td>
                {{ item.columns.since }}
              </td>
              <td>
                {{ item.columns.until }}
              </td>
              <td>
                {{ item.columns.description }}
              </td>
              <td
                v-if="item.columns.url"
                class="text-center"
              >
                <a
                  :href="item.columns.url"
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
          </template>
        </v-data-table>
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
    datatable: {
      itemsPerPage: 10,
      sortBy: [{ key: 'since', order: 'desc' }],
    }
  }),
  computed: {
    getDataTableHeaders() {
      return [
        {
          title: this.$t("courses.fields.course"),
          align: "center",
          sortable: true,
          key: "course"
        },
        {
          title: this.$t("courses.fields.company"),
          align: "center",
          sortable: true,
          key: "company"
        },
        {
          title: this.$t("courses.fields.start_date"),
          align: "center",
          sortable: true,
          key: "since"
        },
        {
          title: this.$t("courses.fields.end_date"),
          align: "center",
          sortable: true,
          key: "until"
        },
        {
          title: this.$t("courses.fields.description"),
          align: "center",
          sortable: true,
          key: "description"
        },
        {
          title: this.$t("courses.fields.certificate"),
          align: "center",
          sortable: true,
          key: "url"
        }
      ]
    }
  },
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