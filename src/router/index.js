import { createRouter, createWebHistory } from 'vue-router';

import CompanyPage from '@/views/Company/CompanyPage.vue';
import ProfilePage from '@/views/Profile/ProfilePage.vue';
import VacanciePage from '@/views/Vacancie/VacanciePage.vue';

const routes = [
  { path: '/', component: CompanyPage, name: 'CompanyPage', children: [
    { path: "profile", component: ProfilePage, name: "ProfilePage" },
    { path: "vacancies", component: VacanciePage, name: "VacanciePage" }
  ]}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router