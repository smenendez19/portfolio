<template>
  <v-container fill-height>
    <v-row>
      <v-card
        class="ma-1 rounded-xl"
      >
        <v-row
          justify="center"
          class="mx-5 my-5"
        >
          <v-col>
            <h3>{{ $t("about.title") }}</h3>
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
  name: "AboutComponent",
  setup() {
  },
  data: () => ({
  }),
  async created() {
  },
  methods: {
  },
}
</script>

<style scoped>
</style>