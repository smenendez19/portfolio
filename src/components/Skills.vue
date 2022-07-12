<template>
    <v-container>
        <v-card class="pa-5 rounded-xl" color="principal">
            <v-row justify="center" class="ma-auto">
                <v-col>
                    <p class="text-start">
                        <h3 v-if="lang === 'ES'">Habilidades y Tecnologias</h3>
                        <h3 v-else>Skills and Tech</h3>
                    </p>
                </v-col>
            </v-row>
            <v-row class="ma-5">
                <h4 v-if="lang === 'ES'">Lenguajes de Programacion</h4>
                <h4 v-else>Programming Languages</h4>
            </v-row>
            <v-row class="ma-5">
                <div class="d-flex align-content-start flex-wrap">
                    <v-card v-for="skill in skills.programming_languages" class="px-5 mx-1 my-2" outlined tile>
                        <p class="text-center">
                            <v-icon v-if="skill.icon" :icon="skill.icon"></v-icon>{{ skill.name }}
                        </p>
                    </v-card>
                </div>
            </v-row>
            <v-row class="ma-5">
                <h4>Web</h4>
            </v-row>
            <v-row class="ma-5">
                <div class="d-flex align-content-start flex-wrap">
                    <v-card v-for="skill in skills.web" class="px-5 mx-1 my-2" outlined tile>
                        <p class="text-center">
                            <v-icon v-if="skill.icon" :icon="skill.icon"></v-icon>{{ skill.name }}
                        </p>
                    </v-card>
                </div>
            </v-row>
            <v-row class="ma-5">
                <h4 v-if="lang === 'ES'">Bases de Datos</h4>
                <h4 v-else>Databases</h4>
            </v-row>
            <v-row class="ma-5">
                <div class="d-flex align-content-start flex-wrap">
                    <v-card v-for="skill in skills.databases" class="px-5 mx-1 my-2" outlined tile>
                        <p class="text-center">
                            <v-icon v-if="skill.icon" :icon="skill.icon"></v-icon>
                            {{ skill.name }}
                        </p>
                    </v-card>
                </div>
            </v-row>
            <v-row class="ma-5">
                <h4 v-if="lang === 'ES'">Tecnologias</h4>
                <h4 v-else>Technologies</h4>
            </v-row>
            <v-row class="ma-5">
                <div class="d-flex align-content-start flex-wrap">
                    <v-card v-for="skill in skills.tech" class="px-5 mx-1 my-2" outlined tile>
                        <p class="text-center">
                            <v-icon v-if="skill.icon" :icon="skill.icon"></v-icon>{{ skill.name }}
                        </p>
                    </v-card>
                </div>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import jsonData from "@/data/data.json"
import jsonDataEN from "@/data/data_en.json";

export default defineComponent({
    setup() {
    },
    name: "Skills",
    methods: {
    },
    data: () => ({
        skills: null,
        lang : "ES",
    }),
    methods: {
        async getDataJSON() {
            if (this.lang === "ES") {
                this.skills = jsonData.data.skill_component;
            } else {
                this.skills = jsonDataEN.data.skill_component;
            }
        },
    },
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