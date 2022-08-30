import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: () => import('../vues/pages/AccueilSolutions.vue')
  },
  {
    path: '/mon-entreprise',
    name: 'mon-entreprise',
    component: () => import('../vues/pages/MonEntreprise.vue')
  },
  {
    path: '/mes-projets',
    name: 'mes-projets',
    component: () => import('../vues/pages/MesProjets.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
