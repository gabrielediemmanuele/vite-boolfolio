import { createRouter, createWebHistory } from "vue-router";

/* importare le pagine  */
import HomePage from "./pages/HomePage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import PortfolioTypePage from "./pages/PortfolioTypePage.vue";

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
    {
      path: "/portfolio/type/:type_id",
      name: "portfolio-type",
      component: PortfolioTypePage,
    },
    {
      path: "/portfolio/:id",
      name: "project-detail",
      component: ProjectPage,
    },
  ],
});

export { router };
