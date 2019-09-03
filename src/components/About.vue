<template>
  <div class="about">
    <div v-if="model" class="model animated lightSpeedIn">
      <div @click="closeModel" class="close">
        <i class="fas fa-times"></i>
      </div>
      <h3>About me</h3>

      <p>
        Hi im Martyn, i am a web developer and i got into coding in 2018.
        I have been using the framework Vue for the last few months and im
        really loving it, i cant wait to try react.
        I've had many different jobs in the past but i feel now is the time for me
        start my journey as a real web developer.
      </p>
    </div>
    <div v-if="onAbout" class="wrap">
      <div class="text">
        <h1 class="animated fadeInLeft ease">About Me</h1>
        <div ref="line" class="line"></div>
        <h2 class="animated fadeInLeft ease">I am a self taught web developer</h2>
        <div @click="openModel" class="btn animated bounceIn ease">
          <p>
            Read More
            <i class="fas fa-arrow-right"></i>
          </p>
        </div>
      </div>
      <div class="box">
        <div v-for="(icon, i) in icons" :key="i" class="skill-box">
          <div class="icon-wrap animated flipInY" :class="icon.delay">
            <i :class="icon.icon"></i>
          </div>

          <h4 class="animated fadeIn" :class="icon.delay">{{ icon.title }}</h4>
          <p class="animated fadeIn" :class="icon.delay">{{ icon.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      onAbout: false,
      model: false,
      pageTop: 0,
      icons: [
        {
          icon: "fas fa-mobile-alt",
          title: "responsive",
          text: "My projects work on devices big or small.",
          delay: "delay1"
        },
        {
          icon: "fab fa-vuejs",
          title: "vue",
          text: "Vue is a great framework, i love it.",
          delay: "delay2"
        },
        {
          icon: "fas fa-cogs",
          title: "api's",
          text: "I love working with api's and data.",
          delay: "delay3"
        },
        {
          icon: "fab fa-android",
          title: "android",
          text: "I also create apps using cordova.",
          delay: "delay4"
        }
      ]
    };
  },
  mounted() {
    this.pageTop = document.querySelector(".about").offsetTop;
    this.$store.dispatch("aboutPageHeight", this.pageTop);

    window.addEventListener("scroll", () => {
      if (scrollY >= this.pageTop) {
        this.onAbout = true;
        setTimeout(() => {
          if (window.innerWidth < 600) {
            this.$refs.line.style.width = 100 + "%";
          } else {
            this.$refs.line.style.width = 350 + "px";
          }
        }, 200);
      }
    });
  },
  created() {},

  methods: {
    openModel() {
      this.model = true;
    },
    closeModel() {
      const close = document.querySelector(".model");
      close.classList.remove("lightSpeedIn");
      close.classList.add("animated", "fadeOut");
      setTimeout(() => {
        close.classList.remove("fadeOut");
        close.classList.add("animated", "lightSpeedIn");
        this.model = false;
      }, 500);
    }
  }
};
</script>


<style scoped>
.about {
  min-height: 100vh;
  padding-top: 80px;
  box-sizing: border-box;
  color: #333;
  letter-spacing: 2px;
  position: relative;
}
.line {
  width: 0;
  height: 5px;
  background-color: #00b7a1;
  border-radius: 5px;
  transition: 0.8s ease;
  margin: auto;
  transition-delay: 1s;
}

.wrap {
  width: 90%;
  margin: 10px auto;
  min-height: 700px;
}

.model {
  width: 50%;
  height: 300px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: solid #333 1px;
  border-radius: 5px;
  z-index: 11;
  animation-duration: 0.7s;
  padding: 40px;
  box-sizing: border-box;
}

.model p {
  color: rgb(100, 100, 100);
  letter-spacing: 0.2px;
}
.model h3 {
  color: #00b7a1;
  text-transform: uppercase;
}
.close {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;

  border-radius: 50%;
  margin: 5px;
  top: 0;
  right: 0;
  font-size: 20px;
  cursor: pointer;
}
.text h1 {
  font-weight: 600;
  font-size: 60px;

  margin: 20px 0 0 0;
  animation-delay: 0.2s;
}
.text h2 {
  letter-spacing: 1px;
  padding: 20px 0;
  animation-delay: 0.4s;
  font-size: 18px;
}
.box {
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  margin: 100px auto 0 auto;
}

.btn {
  border: solid 2px #333;
  margin: 60px auto;
  animation-delay: 1.5s;
  background-color: #00b7a1;
  color: #fff;
  border: #fff solid 2px;
}
.btn:hover {
  background-color: #fff;
  color: #00b7a1;
  border: #00b7a1 solid 2px;
}
.delay1 {
  animation-delay: 1.2s;
}
.delay2 {
  animation-delay: 1.4s;
}
.delay3 {
  animation-delay: 1.6s;
}
.delay4 {
  animation-delay: 1.8s;
}

h3 {
  padding: 0;
}

.skill-box {
  width: 200px;
}
.skill-box h4 {
  color: rgb(100, 100, 100);
  font-family: "Audiowide", cursive;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 900;
  margin: 0;
}
.skill-box p {
  color: rgb(100, 100, 100);
  padding: 0;
  letter-spacing: 0;
  font-size: 15px;
}

.icon-wrap {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #00b7a1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
}
.icon-wrap i {
  font-size: 40px;
  color: #fff;
}
@media (max-width: 1024px) {
  .model {
    width: 100%;
    height: auto;
    border: none;
    top: 1px;
  }
}
@media (min-height: 800px) {
 .btn {
    margin: 100px auto;
    
 }
 .box {
   margin: 200px auto 0 auto;
 }
  
}
</style>