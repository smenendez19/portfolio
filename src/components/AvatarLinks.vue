<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-card elevation="24">
        <v-row class="mx-5 my-5">
          <v-col>
            <v-row>
              <v-col>
                <v-img
                  contain
                  class="rounded-circle mx-auto"
                  :src="images.avatarImage"
                  width="150px"
                  alt=""
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col>
                <h2>Santiago Ezequiel Menendez</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
              <div v-for="contact in contacts" :key="contact" class="mx-1">
                <v-tooltip :text="contact.text" location="bottom">
                  <template #activator="{ props }">
                    <v-btn
                      :id="contact.type"
                      v-bind="props"
                      variant="plain"
                      :href="contact.url"
                      target="_blank"
                      :ripple="false"
                    >
                      <template #default>
                        <v-row>
                          <v-icon :icon="getIcon(contact.type)" size="30" />
                        </v-row>
                      </template>
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
              <v-tooltip :text="cv.download_text" location="bottom">
                <template #activator="{ props }">
                  <v-btn
                    id="download-cv"
                    v-bind="props"
                    variant="plain"
                    :href="cv.url"
                    download
                    :ripple="false"
                  >
                    <template #default>
                      <v-icon :icon="icons.mdiDownload" size="30" />
                    </template>
                  </v-btn>
                </template>
              </v-tooltip>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiGithub,
  mdiCircleOffOutline,
  mdiLinkedin,
  mdiEmail,
  mdiDownload,
} from "@mdi/js";
import contactData from "@/data/contacts.json";
import cvDataEs from "@/data/cv_es.json";
import cvDataEn from "@/data/cv_en.json";
import avatarImage from "/assets/images/avatar_image.png";

export default {
  name: "AvatarLinksComponent",
  setup() {
    const getIcon = (type) => {
      switch (type) {
        case "github":
          return mdiGithub;
        case "linkedin":
          return mdiLinkedin;
        case "email":
          return mdiEmail;
        default:
          return mdiCircleOffOutline;
      }
    };
    return {
      getIcon,
    };
  },
  data: () => ({
    images: {
      avatarImage,
    },
    contacts: null,
    cv: null,
    lang: "es",
    icons: {
      mdiGithub,
      mdiDownload,
    },
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
      this.contacts = contactData.contacts;
      if (this.lang === "es") this.cv = cvDataEs.cv;
      else this.cv = cvDataEn.cv;
    },
  },
};
</script>

<style scoped></style>
