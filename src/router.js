import Vue from "vue";
import Router from "vue-router";
import Layout from "./layout";
import Index from "./views";
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
        }
      ]
    }
  ]
});
