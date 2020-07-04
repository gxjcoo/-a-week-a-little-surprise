import Vue from "vue";
import iview from "iview";
import App from "./App.vue";
import router from "./router";
import http from "./axios";

Vue.config.productionTip = false;
Vue.use(iview);
Vue.prototype.$http = http;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
