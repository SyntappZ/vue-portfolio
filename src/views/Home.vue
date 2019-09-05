<template>
  <div class="homePage">
     <navbar />
    <background class="home" />
    <about class="about"/>
    <projects class="projects" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import about from "@/components/About";
import projects from "@/components/Projects";
import background from "@/components/Background";
import navbar from "@/components/Navbar";

import { mapState } from 'vuex';
import jump from "jump.js";

export default {
  
  name: "home",
  components: {
    background,
    projects,
    about,
    navbar,
    
    
  },
  data() {
    return {
      
    }
  },
  mounted() {
  let aboutPage = document.querySelector('.about')
  this.$store.dispatch('pageChanged', 'homePage') 
 
  },
  methods: {
    scroll(page) {
       jump(page, {
         duration: 700
       })
    },

   
  },
    computed: {
       ...mapState(['page']),

     
    },
  
   watch: {
  
    page(newValue, oldValue) {
      if(newValue == 0) {
      this.scroll('.home')
      }
      if(newValue == 1) {
      this.scroll('.about')
      
      }
      if(newValue == 2) {
        this.scroll('.projects')
     
      }
     
    },
  
   }
};
</script>

<style scoped>

</style>
