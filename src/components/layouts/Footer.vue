<template>
  <v-container fluid>
    <v-footer padless>
      <v-col class="text-center">
        {{ new Date().getFullYear() }} — <strong>Santiago Menendez</strong>
        <p v-if="lang === 'ES'">
          Proyecto armado con Vue y Vuetify
        </p>
        <p v-else>
          Project builded with Vue and Vuetify
        </p>
      </v-col>
    </v-footer>
  </v-container>
</template>


<script>
export default ({
  name: 'FooterComponent',
  components: {
  },
  data: () => ({
    lang : "ES"
  }),
  async created() {
    const lang = localStorage.getItem('lang')
    if (lang) {
      this.lang = lang
    }
  }
})
</script>