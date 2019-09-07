<template>
  <div class="about">
    <div v-if="onAbout" class="wrap">
      <div class="text animated fadeInRight">
        <div v-if="model" class="model animated fadeIn">
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
      <div @click="goToProjects" class="project-btn animated zoomIn">
        <h3>projects</h3>

        <i class="arrow fas fa-arrow-down animated flash infinite"></i>
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
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },

  methods: {
    openModel() {
      this.model = true;
    },
    scrollListener() {
      if (scrollY >= this.pageTop) {
        this.onAbout = true;
        setTimeout(() => {
          if (window.innerWidth < 600) {
            this.$refs.line.style.width = 55 + "%";
          } else {
            this.$refs.line.style.width = 350 + "px";
          }
        }, 200);
      }
    },
    closeModel() {
      const close = document.querySelector(".model");
      close.classList.remove("fadeIn");
      close.classList.add("animated", "fadeOut");
      setTimeout(() => {
        close.classList.remove("fadeOut");
        close.classList.add("animated", "fadeIn");
        this.model = false;
      }, 500);
    },
    goToProjects() {
      this.$store.dispatch("pageScroll", 3);
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
  transition-delay: 1.2s;
}

.wrap {
  width: 90%;
  margin: 10px auto;
  min-height: 700px;
}


.close {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  border-radius: 50%;
  margin: 5px;
  top: 0;
  right: 0;
  font-size: 20px;
  cursor: pointer;
}
.text {
  position: relative;
  border: solid 1px #333;
  background-color: #003849;
  color: #fff;
  width: 50%;
  margin: auto;
  padding: 20px;
  outline: solid #00b7a1 1px;
  outline-offset: -15px;
}
.text h1 {
  font-weight: 600;
  font-size: 60px;

  margin: 20px 0 0 0;
  animation-delay: 0.4s;
}
.text h2 {
  letter-spacing: 1px;
  padding: 20px 0;
  animation-delay: 0.6s;
  font-size: 18px;
}
.model {
  width: 100%;
  height:100%;
  background-color: #003849;
  position: absolute;
  left:0;
  top:0;
  z-index: 1;
  animation-duration: 0.7s;
  padding: 40px;
  box-sizing: border-box;
}

.model p {
  color: #fff;
  letter-spacing: 0.2px;
  line-height: 30px;
  padding-top:40px;
}
.model h3 {
  color: #00b7a1;
  text-transform: uppercase;
}
.box {
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  margin: 70px auto 0 auto;
}

.btn {
  margin: 40px auto;
  animation-delay: 1.2s;
  background-color: transparent;
  color: #fff;
  border: solid 2px #00b7a1;
}
.btn:hover {
  background-color: #00b7a1;
  color: #fff;
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
.project-btn {
  width: 70px;
  height: 70px;
  margin: auto;
  color: #003849;
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 250px;
  right: 100px;
  cursor: pointer;
  padding: 25px;
  animation-delay: 2.2s;
}

.project-btn h3 {
  margin: 20px 0 0 0;
  font-size: 14px;
}
.arrow {
  color: #00b7a1;
  animation-duration: 5s;
  font-size: 25px;
  padding-top: 7px;
}
@media (max-width: 1024px) {
   .wrap {
    margin-top: 100px;
  }
 
  .text {
    width: 90%;
  }
   .project-btn {
    display:none;
  }
   .btn {
    margin: 50px auto;
  }
  .box {
    margin: 70px auto;
   
  }
}
@media (max-width: 600px) {
    .wrap {
      width:100%;
    }
  .text h1 {
    font-size: 30px;
    margin: 20px 0 10px 0;
  }
  .text h2 {
    font-size: 14px;
  }
  .box {
    position: relative;
    margin-bottom: 100px;
    z-index: -1;
  }
  .skill-box {
    margin: 30px 0;
  }
  .btn {
   color:#00b7a1;
  }
  .text {
    width: 100%;
    padding:0;
    margin:0;
    outline:none;
    background: white;
    color:#333;
    border:none;
  }
  .model {
    height:auto;
    z-index: 100;
  } 

}
@media (min-height: 800px) and (min-width: 1024px) {
  .btn {
    margin: 50px auto;
  }
  .box {
    margin: 100px auto 0 auto;
  }
  .wrap {
    margin-top: 100px;
  }
  .project-btn {
    right:200px;
  }
}
</style>