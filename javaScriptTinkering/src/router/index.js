import { createRouter, createWebHistory } from 'vue-router';
import CalculatorComponent from '../views/CalculatorComponent.vue';
import LandingPageComponent from "../views/LandingPageComponent.vue";
import UserPageComponent from "../views/UserPageComponent.vue";
import CommentsPageComponent from "../views/CommentsPageComponent.vue";

const routes = [
  {
    path: '/calculator',
    name: 'Calculator',
    component: CalculatorComponent
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPageComponent
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPageComponent
  },
  {
    path: '/comments',
    name: 'CommentsPage',
    component: CommentsPageComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;