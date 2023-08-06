<template>
  <v-row
    justify="center"
    class="ma-auto"
  >
    <v-col>
      <h3 class="text-center">
        {{ $t("downloadCV.title") }}
      </h3>
    </v-col>
  </v-row>
  <v-row
    justify="center"
    class="ma-auto"
  >
    <v-col class="text-center">
      <v-btn
        variant="plain"
        href="files/cv_es.pdf"
        icon
        download
      >
        <v-icon
          size="50px"
          :icon="icons.mdiDownload"
        />
      </v-btn>
      <div>Español</div>
    </v-col>
    <v-col class="text-center">
      <v-btn
        variant="plain"
        href="files/cv_en.pdf"
        icon
        download
      >
        <v-icon
          size="50px"
          :icon="icons.mdiDownload"
        />
      </v-btn>
      <div>English</div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiDownload } from "@mdi/js"

export default {
  name: "DownloadCVComponent",
  data: () => ({
    icons: {
      mdiDownload
    }
  })
}
</script>

<style scoped>
</style>