import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'bar (it"s in index.js)',
    likes: 0,
    timeout: 1000, //по умолчанию -секунда
    popups: 0,
  },
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
});
