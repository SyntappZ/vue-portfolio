import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gravityOn: false
  },
  mutations: {
  changeGravity(state, gravity) {
    state.gravityOn = gravity
    
  }
   
  },
  actions: {
    gravity({ commit }) {
      commit('changeGravity', true)
     },
  },
  getters: {
    gravityOn: state => state.gravityOn,
  },
  
});
