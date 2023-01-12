<template>
  <v-container>
    <v-row
      justify="center"
      class="ma-auto"
    >
      <v-col>
        <h3 class="text-center">
          {{ $t("contact.title") }}
        </h3>
      </v-col>
    </v-row>
    <v-row
      v-for="contact in contacts"
      :key="contact"
      class="ma-5"
      justify="center"
    >
      <p class="text-start">
        <v-icon :icon="getIcon(contact.type)" /> <a
          :href="contact.url"
          target="_blank"
        >{{ contact.url_text }}</a>
      </p>
    </v-row>
  </v-container>
</template>

<script>
import { mdiGithub, mdiCircleOffOutline, mdiLinkedin, mdiEmail } from '@mdi/js';
import contactData from "@/data/contacts.json";

export default {
  name: "ContactComponent",
  setup() {
    function getIcon(type) {
      if (type === "github") return mdiGithub
      else if (type === "linkedin") return mdiLinkedin
      else if (type === "email") return mdiEmail
      return mdiCircleOffOutline
    }
    return {
      getIcon
    }
  },
  data: () => ({
    contacts : null,
    lang : "es",
    icons: {
      mdiGithub
    }
  }),
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) this.lang = lang
    this.getDataJSON();
  },
  methods: {
    async getDataJSON() {
      this.contacts = contactData.contacts
    },
  },
}
</script>

<style scoped>
</style>