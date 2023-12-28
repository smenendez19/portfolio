<template>
  <v-app>
    <MenuNavComponent />
    <v-main id="main">
      <v-container>
        <v-lazy
          id="main"
          :options="{ threshold: 1.0 }"
          transition="fade-in-transition"
        >
          <div>
            <AvatarLinksComponent />
          </div>
        </v-lazy>
        <v-lazy
          id="about"
          :options="{ threshold: 1.0 }"
          transition="fade-in-transition"
        >
          <div>
            <AboutComponent />
          </div>
        </v-lazy>
        <v-divider />
        <v-lazy
          id="experience"
          :options="{ threshold: 1.0 }"
          transition="fade-in-transition"
        >
          <div>
            <ExperienceComponent />
          </div>
        </v-lazy>
        <v-divider />
        <v-lazy
          id="education"
          :options="{ threshold: 1.0 }"
          transition="slide-x-transition"
        >
          <div>
            <EducationComponent />
          </div>
        </v-lazy>
        <v-divider />
        <v-lazy
          id="courses"
          :options="{ threshold: 1.0 }"
          transition="slide-x-transition"
        >
          <div>
            <CoursesComponent />
          </div>
        </v-lazy>
        <v-divider />
        <v-lazy
          id="skills"
          :options="{ threshold: 1.0 }"
          transition="slide-x-transition"
        >
          <div>
            <SkillsComponent />
          </div>
        </v-lazy>
        <v-divider />
        <v-lazy
          id="projects"
          :options="{ threshold: 1.0 }"
          transition="fade-in-transition"
        >
          <div>
            <ProjectsComponent />
          </div>
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