<template>
  <div class="home">
    <background class="bg" />
    <about />
   <projects />
  </div>
</template>

<script>
// @ is an alias to /src
import about from '@/components/About'
import projects from '@/components/Projects'
import background from '@/components/Background'

export default {
  name: 'home',
  components: {
    background,
    projects,
    about
  }
}
</script>

<style scoped>
  .bg {
    
  
  
  transition: .5s;

  }
</style>
