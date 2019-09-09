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
      imageArray: [
        "woi/woi-home.png",
         "woi/woi-main.png", 
         "woi/woi-contact.png"
      ],
        imagesForCaching: [
        "woi/woi-home.png",
        "woi/woi-main.png",
        "woi/woi-contact.png",
        "a-n-d/a&d-main.png",
        "a-n-d/a&d-angels.png",
        "a-n-d/a&d-abbadon.png",
        "vault/vault-home.png",
        "vault/vault-notes.png",
        "vault/vault-passwords.png",
        "memester/home.png",
        "memester/search.png",
        "memester/menu.png",
        "memester/image.png",
        "memester/tags.png",
        "fusion/fusion-front.png",
        "fusion/fusion-tracks.png",
        "fusion/fusion-info.png",
        "fusion/fusion-filter.png",
        "fusion/fusion-levels.png"
      ]

      
    }
  },
  async mounted() {
    await this.$imagePreload(this.imagesForCaching)
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
