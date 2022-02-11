import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/Home";
import Search from "@/views/Search";
import NotFound from "@/views/NotFound";
import Total from "@/views/Total";
import Sales from "@/views/sales";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
    alias: ["/Home"],
  },
  {
    path: '*',
    name: "NotFound",
    component: NotFound,
  },
  {
    path: '/Search',
    name: "Search",
    component: Search,
    alias: ["/Search"],
  },
  {
    path: '/sales',
    name: "Sales",
    component: Sales,
    alias: ["/Sales"],
  },
  {
    path: '/total',
    name: "Total",
    component: Total,
    alias: ["/totals"],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router