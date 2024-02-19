import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetails from './views/CardDetails.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

import { useAuth } from './composables/useAuth'
const {isAuthenticated} = useAuth()

const routes = [
  { path: '/company-directory2024/', name: 'Home', component: HomePage },
  { path: '/company-directory2024/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/company-directory2024/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/company-directory2024/login', name: 'LoginPage', component: LoginPage },
  { path: '/company-directory2024/settings', name: 'SettingsPage', component: SettingsPage, meta: {requiresAuth: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})

export default router