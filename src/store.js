import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gravityOn: false,
    page: 0
  },
  mutations: {
  changeGravity(state, gravity) {
    state.gravityOn = gravity
  },
  choosePage(state, page) {
    state.page = page
  }
   
  },
  actions: {
    gravity({ commit }) {
      commit('changeGravity', true)
     },
     pageScroll({ commit }, page) {
      commit('choosePage', page)
     }
  },
 
  
});
