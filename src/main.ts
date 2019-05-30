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
  theme: { //기본 color 설정 가능
    // primary: colors.purple,
    // secondary: colors.grey.darken1,
    // accent: colors.shades.black,
    // error: colors.red.accent3
  }
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
