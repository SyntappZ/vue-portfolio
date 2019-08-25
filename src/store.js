import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gravityOn: false,
    page: 0,
    aboutPageHeight: '',
    projectsPageHeight: ''

  },
  mutations: {
  changeGravity(state, gravity) {
    state.gravityOn = gravity
  },
  choosePage(state, page) {
    state.page = page
  },
  aboutPage(state, height) {
    state.aboutPageHeight = height
  },
  projectsPage(state, height) {
    state.projectsPageHeight = height
  },
   
  },
  actions: {
    gravity({ commit }) {
      commit('changeGravity', true)
     },
     pageScroll({ commit }, page) {
      commit('choosePage', page)
     },
     aboutPageHeight({ commit }, height) {
      commit('aboutPage', height)
     },
     projectsPageHeight({ commit }, height) {
      commit('projectsPage', height)
    },
   

  },
 
  
});
