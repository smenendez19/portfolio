import { createRouter, createWebHistory } from 'vue-router'
import StartPortfolioComponent from "@/components/StartPortfolio.vue"

const routes = [
  // Start
  {
    path: '/portfolio/',
    name: 'StartPortfolio',
    component: StartPortfolioComponent,
    meta: {
      title: "Santiago Menendez - Portfolio"
    }
  }
]

const history = createWebHistory();

const router = createRouter({
  history,
  routes
})

export default router