import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import CountStore from './CountStore';

Vue.use(Vuex);

//localStorate를 통해서 상태를 유지하는 경우
const vuexPersist = new VuexPersist({
  key: 'app',
  storage: localStorage,
  reducer: (state: any) => { 
    return {
      CountStore
    };
  },
});

export default new Vuex.Store({
  modules: {
    CountStore,
    
  },
  plugins: [vuexPersist.plugin],
});
