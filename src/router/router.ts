import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/Root.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "product",
        name: "Product",
        component: () => import("@/views/404.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/404.vue"),
      },
      {
        path: "blog",
        name: "blog",
        component: () => import("@/views/404.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("@/views/404.vue"),
      },
      {
        path: "*",
        component: () => import("@/views/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
