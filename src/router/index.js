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
    path: "/getstarted",
    name: "Get Started",
    component: () =>
      import(/*webpackChunkName:"comingsoon" */ "@/views/ComingSoon.vue"),
  },
  {
    path: "/aboutus",
    name: "About us",
    component: () =>
      import(/*webpackChunkName:"comingsoon" */ "@/views/ComingSoon.vue"),
  },
  {
    path: "/chat",
    name: "Chat Now",
    component: () =>
      import(/*webpackChunkName:"comingsoon" */ "@/views/ComingSoon.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/*webpackChunkName:"comingsoon" */ "@/views/ComingSoon.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/*webpackChunkName:"comingsoon" */ "@/views/ComingSoon.vue"),
  },
  {
    path: "/privacypolicy",
    name: "Privacy Policy",
    component: () =>
      import(/*webpackChunkName:"comingsoon" */ "@/views/ComingSoon.vue"),
  },
  {
    path: "/terms",
    name: "Terms of Use",
    component: () =>
      import(/*webpackChunkName:"comingsoon" */ "@/views/ComingSoon.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
