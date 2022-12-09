<template>
  <v-app>
    <MenuNavComponent />
    <v-main id="main">
      <v-container>
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
        <v-divider />
        <v-lazy
          id="contact"
          :options="{ threshold: 1.0 }"
          transition="fade-in-transition"
        >
          <div>
            <ContactLinksComponent />
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
import ContactLinksComponent from '@/components/ContactLinks.vue'
import EducationComponent from '@/components/Education.vue'
import ExperienceComponent from '@/components/Experience.vue'
import SkillsComponent from '@/components/Skills.vue'
import ProjectsComponent from '@/components/Projects.vue'

export default {
  name: 'PortfolioComponent',
  components: {
    MenuNavComponent,
    FooterComponent,
    AboutComponent,
    ContactLinksComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
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
