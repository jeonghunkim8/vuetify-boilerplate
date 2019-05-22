import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import CountStore from './CountStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CountStore,
    
  },
});
