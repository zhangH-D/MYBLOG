import { createRouter, createWebHashHistory } from "vue-router";

const home = () => import("../view/Home.vue");
const login = () => import("../view/login/Login.vue");

const routes = [
  { path: "/", name: "Home", component: home },
  { path: "/login", name: "Login", component: login },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
