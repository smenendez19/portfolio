<template>
  <v-container fill-height>
    <v-row class="ma-auto">
      <v-col>
        <h3 class="text-start">
          {{ $t("about.title") }}
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-card
        class="pa-5 rounded-xl"
        width="90%"
        height="100%"
      >
        <v-row class="my-5">
          <v-col>
            <v-card-text>
              <p class="text-center">
                {{ $t("about.about_me") }}
              </p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutComponent"
}
</script>

<style scoped>
</style>