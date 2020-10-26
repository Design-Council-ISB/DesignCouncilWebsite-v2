import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: function() {
      return import(/* webpackChunkName: "team" */ "../views/Team.vue");
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: function() {
      return import(/* webpackChunkName: "projects" */ "../views/Projects.vue");
    },
  },
  {
    path: "*",
    name: "Error",
    component: function() {
      return import(/* webpackChunkName: "error" */ "../views/404.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
