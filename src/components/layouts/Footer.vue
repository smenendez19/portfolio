<template>
  <v-footer padless>
    <v-col class="text-center">
      {{ new Date().getFullYear() }} — <strong>Santiago Menendez</strong>
      <p>
        {{ $t("footer.text") }}
      </p>
    </v-col>
  </v-footer>
</template>


<script>
export default {
  name: 'FooterComponent',
  data: () => ({
    lang : "ES"
  }),
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) this.lang = lang
  }
}
</script>

<style scoped>
</style>