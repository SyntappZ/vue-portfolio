<template>
  <div class="welcome">
    <div v-if="onWelcome" class="welcome-text">
      <h1 class="animated bounceIn">SYNTAPPZ</h1>
      <h2 class="animated fadeInDown ">welcome to my portfolio</h2>

      <h3 class="animated 	bounceInRight">Web Developer</h3>

      <div @click="scrollDown" class="btn animated 	bounceInLeft">
        <p>About Me <i class="fas fa-arrow-right"></i></p>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
  components: {},
  data() {
    return {
      onWelcome: true
    };
  },
  created() {
       window.addEventListener('scroll', () => {
      
        if(scrollY < 800) {
         this.onWelcome = true;
        }else{
          this.onWelcome = false;
        }
    
      })
  },
  methods: {
    scrollDown() {
        this.$store.dispatch("gravity");
        const element =  document.querySelector('.welcome-text')
        element.classList.add('animated', 'hinge')
    }
  }
};
</script>


<style scoped>
.welcome {
  font-family: "Audiowide", cursive;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  color: #fff;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.welcome-text {
  height: 500px;
  animation-delay: .5s;
}

h1 {
  font-size: 80px;
  text-shadow: 0 0 10px #fff;
  margin: 0;
}
h2 {
  margin: 0;
}

h3 {
  animation-delay: .5s;
  font-family: "Roboto Mono", monospace;
  font-weight: 100;
}

i{
  transition: .2s;
  padding-left:5px;
}
.btn:hover i {
  transform: rotate(90deg)
}
.btn:hover {
  background-color:#fff;
  color:rgb(5, 107, 133);
  box-shadow: 0 0 5px #fff;
}
@media (max-width: 1024px) {
  .welcome {
    align-items: center;
  }
}
@media (max-width: 600px) {

h1 {
  font-size: 45px;
  
}
h2 {
  font-size: 16px;
  padding:20px 0 50px 0;
}
}
</style>
