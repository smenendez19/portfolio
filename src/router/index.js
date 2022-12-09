import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Start
  {
    path: '/portfolio/',
    name: 'StartPortfolio',
    component: import("@/components/StartPortfolio.vue"),
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