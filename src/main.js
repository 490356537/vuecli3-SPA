import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/*import './plugins/iview.js'*/
import 'vant/lib/index.css';

import Vant from 'vant';
Vue.use(Vant);
import { Button } from 'vant'
Vue.use( Button);

import 'lib-flexible'
import '@/assets/css/style.less'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach(function (to, from, next) {
  store.commit('inout_router', to.name==from.meta.out?'out':'in');
  next();
})
