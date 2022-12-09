<template>
  <v-container>
    <v-row
      justify="center"
      class="ma-auto"
    >
      <v-col v-if="lang === 'ES'">
        <h3 class="text-center">
          Contacto y Redes
        </h3>
      </v-col>
      <v-col v-else>
        <h3 class="text-center">
          Contact and Social
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
import { defineComponent } from 'vue';
import { mdiGithub, mdiCircleOffOutline, mdiLinkedin, mdiEmail } from '@mdi/js';
import jsonData from "@/data/data.json";
import jsonDataEN from "@/data/data_en.json";

export default defineComponent({
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
    lang : "ES",
    icons: {
      mdiGithub
    }
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
        this.contacts = jsonData.data.contact_component.contacts;
      } else {
        this.contacts = jsonDataEN.data.contact_component.contacts;
      }
    },
  },
})
</script>

<style>
</style>