<template>
  <v-container fill-height>
    <v-row
      justify="center"
      align="center"
    >
      <v-card
        elevation="20"
      >
        <v-row
          class="mx-5 my-5"
        >
          <v-col>
            <v-row>
              <v-col>
                <v-img
                  contain
                  class="rounded-circle mx-auto"
                  :src="images.avatarImage"
                  width="150px"
                />
              </v-col>
            </v-row>
            <v-row
              justify="center"
            >
              <h2>Santiago Ezequiel Menendez</h2>
            </v-row>
            <v-row
              justify="center"
            >
              <div
                v-for="contact in contacts"
                :key="contact"
                class="mx-1"
              >
                <v-icon :icon="getIcon(contact.type)" />
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mdiGithub, mdiCircleOffOutline, mdiLinkedin, mdiEmail } from '@mdi/js';
import contactData from "@/data/contacts.json";
import avatarImage from "/assets/images/avatar_image.png"

export default {
  name: "AvatarLinksComponent",
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
    images: {
      avatarImage
    },
    contacts : null,
    lang : "es",
    icons: {
      mdiGithub
    }
  }),
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) this.lang = lang
    this.getDataJSON()
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