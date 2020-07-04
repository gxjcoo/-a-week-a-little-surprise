import Vue from "vue";
import Router from "vue-router";
import Layout from "./layout";
import Index from "./views";
import water from "./components/waterripple";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          component: Index,
          name: "index"
        },
        {
          path: "/a",
          component: water,
          name: "water"
        }
      ]
    }
  ]
});
