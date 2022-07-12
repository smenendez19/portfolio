<template>
    <v-container>
        <v-row justify="center" class="ma-auto">
            <v-col v-if="lang === 'ES'">
                <h3 class="text-center">Contacto y Redes</h3>
            </v-col>
            <v-col v-else>
                <h3 class="text-center">Contact and Social</h3>
            </v-col>
        </v-row>
        <v-row class="ma-5" justify="center" v-for="contact in contacts">
            <p class="text-start">
                <v-icon :icon="contact.icon"></v-icon> <a :href="contact.url" target="_blank">{{ contact.url_text }}</a>
            </p>
        </v-row>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import jsonData from "@/data/data.json";
import jsonDataEN from "@/data/data_en.json";

export default defineComponent({
    setup() {
    },
    name: "Contact",
    methods: {
        async getDataJSON() {
            if (this.lang === "ES") {
                this.contacts = jsonData.data.contact_component.contacts;
            } else {
                this.contacts = jsonDataEN.data.contact_component.contacts;
            }
        },
    },
    data: () => ({
        contacts : null,
        lang : "ES"
    }),
    async created() {
        const lang = localStorage.getItem('lang')
        if (lang) {
            this.lang = lang
        }
        this.getDataJSON();
    },
})
</script>

<style>
</style>