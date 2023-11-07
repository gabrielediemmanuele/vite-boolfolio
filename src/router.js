import { createRouter, createWebHistory } from "vue-router";

/* importare le pagine  */
/* import HomePage from './pages/HomePage.vue';  */

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/portfolio",
      name: "projects",
      component: Portfolio,
    },
    {
      path: "/",
      name: "portfolio:id",
      component: Project,
    },
  ],
});

export { router };
