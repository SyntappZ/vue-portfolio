<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      
    }
  },
  created() {
     
     
  },
  computed: {
    
  }
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
  margin: 100px auto;
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
