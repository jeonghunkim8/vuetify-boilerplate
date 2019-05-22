import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';

Vue.config.productionTip = false;


/** Vuetify 플러그인 설정 */
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
Vue.use(Vuetify, {
  iconfont: 'md',
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
