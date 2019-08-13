<template>
  <div class="home">
    <background />
   <projects />
  </div>
</template>

<script>
// @ is an alias to /src

import projects from '@/components/Projects'
import background from '@/components/Background'

export default {
  name: 'home',
  components: {
    background,
    projects
  }
}
</script>

<style scoped>
  
</style>
