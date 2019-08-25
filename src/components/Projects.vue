<template>
  <div class="projects">

  </div>
</template>

<script>
export default {
  name: 'projects',
 data() {
   return {
    
   }
 },
 mounted() {
 let pageTop = document.querySelector('.projects')
  console.log()
    

  
   
  // this.$store.dispatch('projectsPageHeight', this.pageTop)
    
 },
 computed: {
  
 },

}
</script>


<style scoped>
  .projects {
    min-height:100vh;
    padding: 80px;
    box-sizing: border-box;
    background: linear-gradient(0deg, #015169, #003849);
    color: #00b7a1;
    
  }
  h1 {
    font-weight: 100;
    font-size: 40px;
  
  }
 
</style>