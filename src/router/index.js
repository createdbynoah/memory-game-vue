import { createRouter, createWebHistory } from 'vue-router';
import CardLayout from '../components/cards/CardLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardLayout,
    },
  ],
});

export default router;
