<template>
  <v-container>
    <v-row class="ma-auto">
      <v-col>
        <h2 class="text-start">
          {{ $t("skills.title") }}
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-card class="pa-5 rounded-xl elevation-24">
        <v-row class="ma-5">
          <h4>
            {{ $t("skills.types.programming_languages") }}
          </h4>
        </v-row>
        <v-row class="ma-5" justify="center">
          <div class="d-flex justify-center flex-wrap">
            <v-card
              v-for="skill in skills.programming_languages"
              :key="skill"
              class="px-5 mx-1 my-2 elevation-24"
              outlined
              tile
              :color="getThemeColor() === 'dark' ? '#FFFFFF' : '#363636'"
            >
              <p class="text-center">
                <v-icon v-if="skill.icon" :icon="getIcon(skill.icon)" />{{
                  skill.name
                }}
              </p>
            </v-card>
          </div>
        </v-row>
        <v-row class="ma-5">
          <h4>{{ $t("skills.types.web") }}</h4>
        </v-row>
        <v-row class="ma-5" justify="center">
          <div class="d-flex justify-center flex-wrap">
            <v-card
              v-for="skill in skills.web"
              :key="skill"
              class="px-5 mx-1 my-2 elevation-24"
              outlined
              tile
              :color="getThemeColor() === 'dark' ? '#FFFFFF' : '#363636'"
            >
              <p class="text-center">
                <v-icon v-if="skill.icon" :icon="getIcon(skill.icon)" />{{
                  skill.name
                }}
              </p>
            </v-card>
          </div>
        </v-row>
        <v-row class="ma-5">
          <h4>
            {{ $t("skills.types.databases") }}
          </h4>
        </v-row>
        <v-row class="ma-5" justify="center">
          <div class="d-flex justify-center flex-wrap">
            <v-card
              v-for="skill in skills.databases"
              :key="skill"
              class="px-5 mx-1 my-2 elevation-24"
              outlined
              tile
              :color="getThemeColor() === 'dark' ? '#FFFFFF' : '#363636'"
            >
              <p class="text-center">
                <v-icon v-if="skill.icon" :icon="getIcon(skill.icon)" />
                {{ skill.name }}
              </p>
            </v-card>
          </div>
        </v-row>
        <v-row class="ma-5">
          <h4>
            {{ $t("skills.types.other") }}
          </h4>
        </v-row>
        <v-row class="ma-5" justify="center">
          <div class="d-flex justify-center flex-wrap">
            <v-card
              v-for="skill in skills.tech"
              :key="skill"
              class="px-5 mx-1 my-2 elevation-24"
              outlined
              tile
              :color="getThemeColor() === 'dark' ? '#FFFFFF' : '#363636'"
            >
              <p class="text-center">
                <v-icon v-if="skill.icon" :icon="getIcon(skill.icon)" />{{
                  skill.name
                }}
              </p>
            </v-card>
          </div>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import skillsData from "@/data/skills.json";
import {
  mdiLanguagePython,
  mdiCircleOffOutline,
  mdiLanguageJavascript,
  mdiLanguageGo,
  mdiLanguageJava,
  mdiConsole,
  mdiVuejs,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiDatabaseSearch,
  mdiGoogleCloud,
  mdiAws,
  mdiDocker,
  mdiKubernetes,
  mdiGit,
  mdiGithub,
  mdiMicrosoftOffice,
  mdiTerraform,
  mdiMicrosoftWindows,
  mdiLinux,
  mdiApple,
  mdiApi,
} from "@mdi/js";

export default {
  name: "SkillsComponent",
  setup() {
    const getIcon = (type) => {
      switch (type) {
        case "github":
          return mdiGithub;
        case "python":
          return mdiLanguagePython;
        case "javascript":
          return mdiLanguageJavascript;
        case "go":
          return mdiLanguageGo;
        case "java":
          return mdiLanguageJava;
        case "console":
          return mdiConsole;
        case "vue":
          return mdiVuejs;
        case "css":
          return mdiLanguageCss3;
        case "html":
          return mdiLanguageHtml5;
        case "database":
          return mdiDatabaseSearch;
        case "gcp":
          return mdiGoogleCloud;
        case "aws":
          return mdiAws;
        case "docker":
          return mdiDocker;
        case "kubernetes":
          return mdiKubernetes;
        case "git":
          return mdiGit;
        case "office":
          return mdiMicrosoftOffice;
        case "terraform":
          return mdiTerraform;
        case "microsoft-windows":
          return mdiMicrosoftWindows;
        case "linux":
          return mdiLinux;
        case "apple":
          return mdiApple;
        case "api":
          return mdiApi;
        default:
          return mdiCircleOffOutline;
      }
    };
    return {
      getIcon,
      getThemeColor: () => {
        const themeValue = localStorage.getItem("theme");
        if (themeValue) {
          if (themeValue === "dark") {
            return "light";
          } else {
            return "dark";
          }
        }
      },
    };
  },
  data: () => ({
    skills: null,
    lang: "es",
  }),
  async created() {
    const lang = localStorage.getItem("lang");
    if (lang) this.lang = lang;
    this.getDataJSON();
  },
  methods: {
    async getDataJSON() {
      this.skills = skillsData;
    },
  },
};
</script>

<style scoped></style>
