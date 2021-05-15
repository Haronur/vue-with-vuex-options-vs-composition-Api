import { createRouter, createWebHashHistory } from "vue-router";
import OCounter from "../views/OCounter.vue";

const routes = [
  {
    path: "/",
    name: "OCounter",
    component: OCounter,
  },
  {
    path: "/cCounter",
    name: "CCounter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CCounter.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
