<template>
  <div id="app">
    <router-view />
    <pageFooter />
  </div>
</template>

<script>

import pageFooter from './components/pageFooter'
export default {
  components: {
   pageFooter
  },
  data() {
    return {
      
    }
  },
  mounted() {
     
     
  },
  computed: {
  
  },

}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: auto;
 
}
#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

.btn {
  
  font-family: "Roboto Mono", monospace;
  padding: 15px;
  animation-delay: .5s;
  border:solid 2px #fff; 
  width:140px;
  transition: .2s ease-in-out;
  cursor: pointer;
  border-radius: 3px;
}


.btn p {
  margin: 0;
  padding: 0;
}
</style>
