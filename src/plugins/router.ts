import { createWebHistory, createRouter } from "vue-router";

import Index from "@/pages/index.vue";
import Settings from "@/pages/settings.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/settings/:id", component: Settings },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
