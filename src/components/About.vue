<template>
  <v-container fill-height>
    <v-row
      justify="center"
      class="my-5"
    >
      <h1 class="text-center">
        {{ about.welcome }}
      </h1>
    </v-row>
    <v-card
      class="pa-5 rounded-xl"
      color="principal"
      height="500px"
    >
      <v-row
        justify="center"
        class="mx-5 my-5"
      >
        <v-col>
          <div
            v-if="lang === 'ES'"
            class="text-start"
          >
            <h3>Acerca de mi...</h3>
          </div>
          <div v-else>
            <h3>About me...</h3>
          </div>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        align="center"
        class="mx-5 my-5"
      >
        <v-col>
          <v-img
            contain
            class="rounded-circle mx-auto"
            :src="images.avatarImage"
            width="250px"
          />
          <v-card-text>
            <p class="text-center">
              {{ about.about_me }}
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import jsonData from "@/data/data.json"
import jsonDataEN from "@/data/data_en.json"
import avatarImage from "@/assets/images/avatar_image.png"

export default defineComponent({
  name: "AboutComponent",
  data: () => ({
    lang: "ES",
    about: null,
    images: {
      avatarImage
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
        this.about = jsonData.data.about_component;
      } else {
        this.about = jsonDataEN.data.about_component;
      }
    },
  }
})
</script>

<style>

</style>