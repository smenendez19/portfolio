<template>
    <v-container fill-height>
        <v-card class="pa-5 rounded-xl" color="principal">
            <v-row justify="center" class="ma-auto">
                <v-col>
                    <p class="text-start">
                    <h3 v-if="lang === 'ES'">Educacion</h3>
                    <h3 v-else>Education</h3>
                    </p>
                </v-col>
            </v-row>
            <div v-for="edu in education">
                <v-row justify="center" align="center" class="ma-auto">
                    <v-col>
                        <div v-if="edu.image_logo">
                            <v-img contain class="rounded-lg mx-auto" width="200px" height="200px"
                                :src="'assets/images/' + edu.image_logo">
                            </v-img>
                        </div>
                        <v-card-text>
                            <p class="text-center">
                            <h3>{{ edu.university }}</h3>
                            </p>
                            <p class="text-center my-1">
                                {{ edu.degree }}
                            </p>
                            <p v-if="lang === 'ES'" class="text-center">
                                Desde {{ edu.since }} hasta {{ edu.until }}
                            </p>
                            <p v-else class="text-center">
                                Since {{ edu.since }} until {{ edu.until }}
                            </p>
                            <v-divider class="my-5" />
                            <p class="text-center my-5">
                                {{ edu.description }}
                            </p>
                        </v-card-text>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </v-container>
    <v-container fill-height>
        <v-card class="pa-5 rounded-xl" color="principal">
            <v-row justify="center" class="ma-auto">
                <v-col>
                    <p class="text-start">
                    <h3 v-if="lang === 'ES'">Cursos</h3>
                    <h3 v-else>Courses</h3>
                    </p>
                </v-col>
            </v-row>
            <v-row justify="center" class="ma-auto">
                <v-table>
                    <thead>
                        <tr v-if="lang === 'ES'">
                            <th class="text-center">
                                Curso
                            </th>
                            <th class="text-center">
                                Empresa
                            </th>
                            <th class="text-center">
                                Fecha de realizacion
                            </th>
                            <th class="text-center">
                                Fecha de vencimiento
                            </th>
                            <th class="text-center">
                                Descripcion
                            </th>
                            <th class="text-center">
                                URL Certificado
                            </th>
                        </tr>
                        <tr v-else>
                            <th class="text-center">
                                Course
                            </th>
                            <th class="text-center">
                                Company
                            </th>
                            <th class="text-center">
                                Start Date
                            </th>
                            <th class="text-center">
                                End Date
                            </th>
                            <th class="text-center">
                                Description
                            </th>
                            <th class="text-center">
                                Certificate URL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="course in courses">
                            <td class="text-center">
                                {{ course.course }}
                            </td>
                            <td class="text-center">
                                {{ course.company }}
                            </td>
                            <td class="text-center">
                                {{ course.since }}
                            </td>
                            <td class="text-center">
                                {{ course.until }}
                            </td>
                            <td class="text-center">
                                {{ course.description }}
                            </td>
                            <td class="text-center" v-if=course.url>
                                <a :href="course.url" target="_blank">Link</a>
                            </td>
                            <td class="text-center" v-else>
                                <p>unavaiable</p>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import jsonData from "@/data/data.json";
import jsonDataEN from "@/data/data_en.json";

export default defineComponent({
    setup() {
    },
    name: "Education",
    methods: {
        async getDataJSON() {
            if (this.lang === "ES") {
                this.education = jsonData.data.education_component.education;
                this.courses = jsonData.data.education_component.courses;
            } else {
                this.education = jsonDataEN.data.education_component.education;
                this.courses = jsonDataEN.data.education_component.courses;
            }
        },
    },
    data: () => ({
        education: null,
        courses: null,
        lang: "ES"
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