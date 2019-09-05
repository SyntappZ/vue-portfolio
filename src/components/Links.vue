<template>
  <div class="links">
      
   
      <div class="links-wrap">
         
         <div class="img-wrap"  v-for="(icon, i) in icons" :key="i">
              <div class="icon-wrap">
                  <img :src="icon.icon" alt="">
              </div>
              <p>{{ icon.text }}</p>
          </div>
      </div> 
  
    
   
  </div>
</template>

<script>
export default {
  name: "links",
  
  data() {
    return {
      icons: [
          {
              icon: 'icons/codewars.svg',
              text: 'codewars'
          },
          {
              icon: 'icons/github.svg',
              text: 'github'
          },
          {
              icon: 'icons/gmail.svg',
              text: 'email'
          },
          {
              icon: 'icons/googleplay.svg',
              text: 'playstore'
          },
          {
              icon: 'icons/sololearn.png',
              text: 'sololearn'
          },
      ]
    };
  },
  created() {
    
  },
  methods: {
  
  }
};
</script>


<style scoped>
.links {
   width: 100vw;
    height: 200px;
    
}
.links-wrap {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    margin:auto;
}
.img-wrap {
     display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}

.icon-wrap {
    width: 50px;
    text-align: center;
   

}
.icon-wrap img {
    width:100%;
    filter: contrast(0)
}

@media (max-width: 1024px) {
}
@media (max-width: 600px) {


}
</style>
