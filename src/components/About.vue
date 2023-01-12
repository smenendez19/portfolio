<template>
  <v-container fill-height>
    <v-row
      justify="center"
      class="my-5"
    >
      <h1 class="text-center">
        {{ $t("about.welcome") }}
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
          <h3>{{ $t("about.title") }}</h3>
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
              {{ $t("about.about_me") }}
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import avatarImage from "/assets/images/avatar_image.png"

export default {
  name: "AboutComponent",
  data: () => ({
    images: {
      avatarImage
    }
  }),
  async created() {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>