<template>
  <v-container fill-height>
    <v-row class="ma-auto">
      <v-col>
        <h2 class="text-start">
          {{ $t("courses.title") }}
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-auto rounded-xl">
      <v-data-table
        v-model:items-per-page="datatable.itemsPerPage"
        v-model:sort-by="datatable.sortBy"
        :headers="getDataTableHeaders"
        :items="courses"
        item-value="course"
        dense
        multi-sort
        no-data-text="No data"
        class="elevation-24"
      >
        <template #[`item.url`]="{ item }">
          <v-btn
            class="rounded-xl"
            variant="text"
            :href="item.url"
            target="blank"
          >
            Link
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import coursesDataES from "@/data/courses_es.json";
import coursesDataEN from "@/data/courses_en.json";

export default {
  name: "CoursesComponent",
  data: () => ({
    education: null,
    courses: null,
    lang: "es",
    datatable: {
      itemsPerPage: 10,
      sortBy: [{ key: "since", order: "desc" }],
    },
  }),
  computed: {
    getDataTableHeaders() {
      return [
        {
          title: this.$t("courses.fields.course"),
          align: "start",
          sortable: true,
          key: "course",
          width: "20%",
        },
        {
          title: this.$t("courses.fields.company"),
          align: "start",
          sortable: true,
          key: "company",
          width: "10%",
        },
        {
          title: this.$t("courses.fields.start_date"),
          align: "start",
          sortable: true,
          key: "since",
          width: "15%",
        },
        {
          title: this.$t("courses.fields.description"),
          align: "start",
          sortable: true,
          key: "description",
          width: "30%",
        },
        {
          title: this.$t("courses.fields.certificate"),
          align: "center",
          sortable: true,
          key: "url",
          width: "20%",
        },
      ];
    },
  },
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
      if (this.lang === "es") {
        this.courses = coursesDataES.courses;
      } else {
        this.courses = coursesDataEN.courses;
      }
    },
  },
};
</script>

<style scoped></style>
