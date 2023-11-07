import { createRouter, createWebHistory } from "vue-router";

/* importare le pagine  */
import HomePage from "./pages/HomePage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";

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
      name: "portfolio",
      component: PortfolioPage,
    },
  ],
});

export { router };
