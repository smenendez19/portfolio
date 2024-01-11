<template>
  <v-app>
    <MenuNavComponent />
    <v-main id="main">
      <v-container>
        <v-lazy
          :options="{ threshold: 0.5 }"
          transition="fade-in-transition"
        >
          <AvatarLinksComponent />
        </v-lazy>
        <v-lazy
          id="about"
          :options="{ threshold: 0.5 }"
          transition="fade-in-transition"
        >
          <AboutComponent />
        </v-lazy>
        <v-lazy
          id="experience"
          :options="{ threshold: 0.5 }"
          transition="fade-in-transition"
        >
          <ExperienceComponent />
        </v-lazy>
        <v-lazy
          id="education"
          :options="{ threshold: 0.5 }"
          transition="slide-x-transition"
        >
          <EducationComponent />
        </v-lazy>
        <v-lazy
          id="courses"
          :options="{ threshold: 0.5 }"
          transition="slide-x-transition"
        >
          <CoursesComponent />
        </v-lazy>
        <v-lazy
          id="skills"
          :options="{ threshold: 0.5 }"
          transition="slide-x-transition"
        >
          <SkillsComponent />
        </v-lazy>
        <v-lazy
          id="projects"
          :options="{ threshold: 0.5 }"
          transition="fade-in-transition"
        >
          <ProjectsComponent />
        </v-lazy>
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import MenuNavComponent from '@/components/layouts/MenuNav.vue'
import FooterComponent from '@/components/layouts/Footer.vue'
import AboutComponent from '@/components/About.vue'
import EducationComponent from '@/components/Education.vue'
import ExperienceComponent from '@/components/Experience.vue'
import SkillsComponent from '@/components/Skills.vue'
import ProjectsComponent from '@/components/Projects.vue'
import AvatarLinksComponent from '@/components/AvatarLinks.vue'
import CoursesComponent from '@/components/Courses.vue'

export default {
  name: 'PortfolioComponent',
  components: {
    AvatarLinksComponent,
    MenuNavComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    CoursesComponent
  },
  data: () => ({
  }),
  async mounted() {
    document.title = this.$route.meta.title;
  },
  methods: {
  },
}
</script>

<style scoped>
</style>