<template>
    <v-container fill-height>
        <v-row justify="center" class="my-5">
            <h1 class="text-center">{{ about.welcome }}</h1>
        </v-row>
        <v-card class="pa-5 rounded-xl" color="principal" height="500px">
            <v-row justify="center" class="mx-5 my-5">
                <v-col>
                    <p v-if="lang === 'ES'" class="text-start">
                        <h3>Acerca de mi...</h3>
                    </p>
                    <p v-else>
                        <h3>About me...</h3>
                    </p>
                </v-col>
            </v-row>
            <v-row justify="center" align="center" class="mx-5 my-5">
                <v-col>
                    <v-img contain class="rounded-circle mx-auto" :src="'assets/images/avatar_image.png'"
                        width="250px"></v-img>
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

export default defineComponent({
    name: "About",
    data: () => ({
        lang : "ES",
        about: null
    }),
    methods: {
        async getDataJSON() {
            if (this.lang === "ES") {
                this.about = jsonData.data.about_component;
            } else {
                this.about = jsonDataEN.data.about_component;
            }
        },
    },
    async created() {
        const lang = localStorage.getItem('lang')
        if (lang) {
            this.lang = lang
        }
        this.getDataJSON();
    }
})
</script>

<style>
</style>