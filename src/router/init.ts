import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw[] = [
  // redirects
  { path: "/", redirect: "/top" },
  { path: "/top/0", redirect: "/top/1" },
  { path: "/new/0", redirect: "/new/1" },
  { path: "/show/0", redirect: "/show/1" },
  { path: "/ask/0", redirect: "/ask/1" },
  { path: "/job/0", redirect: "/job/1" },
  { path: "/users", redirect: "/top" },

  {
    component: () => import("../pages/Top.vue"),
    path: "/top",
    name: "Top",
  },
  {
    component: () => import("../pages/Top.vue"),
    path: "/top/:page",
    name: "Top/page",
  },

  {
    component: () => import("../pages/New.vue"),
    path: "/new",
    name: "New",
  },
  {
    component: () => import("../pages/New.vue"),
    path: "/new/:page",
    name: "New/page",
  },

  {
    component: () => import("../pages/Ask.vue"),
    path: "/ask",
    name: "Ask",
  },
  {
    component: () => import("../pages/Ask.vue"),
    path: "/ask/:page",
    name: "Ask/page",
  },

  {
    component: () => import("../pages/Show.vue"),
    path: "/show",
    name: "Show",
  },
  {
    component: () => import("../pages/Show.vue"),
    path: "/show/:page",
    name: "Show/page",
  },

  {
    component: () => import("../pages/Jobs.vue"),
    path: "/job",
    name: "Jobs",
  },
  {
    component: () => import("../pages/Jobs.vue"),
    path: "/job/:page",
    name: "Jobs/page",
  },

  {
    component: () => import("../pages/User.vue"),
    path: "/users/:id",
    name: "Users",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: router,
});
