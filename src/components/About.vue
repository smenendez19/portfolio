<template>
  <v-card class="pa-5 rounded-xl elevation-24 h-100">
    <v-row class="ma-auto mb-3">
      <v-col>
        <h2 class="text-start">
          {{ $t("about.title") }}
        </h2>
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col>
        <v-card-text>
          <p class="text-center about-text">
            {{ $t("about.about_me") }}
          </p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
.about-text {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
