<template>
  <div class="about">
    <div class="wrap">
      <div v-if="onText" class="text animated fadeInRight">
        <div v-if="model" class="model animated fadeIn">
          <div @click="closeModel" class="close">
            <i class="fas fa-times"></i>
          </div>
          <h3>About me</h3>

          <p>
            Hi im Martyn, i am a web developer and i got into coding in 2018.
            I have been using the framework Vue for the last few months and im
            really loving it, i cant wait to try Angular & React.
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

      <div v-if="onFullPage" class="box">
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
import { mapState } from "vuex";
export default {
  name: "about",
  data() {
    return {
      onText: false,
      onFullPage: false,
      model: false,
      addTimeout: false,
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
      if (scrollY >= this.pageTop - 489) {
        this.onText = true;
        setTimeout(() => {
          if (window.innerWidth < 600) {
            this.$refs.line.style.width = 55 + "%";
          } else {
            this.$refs.line.style.width = 300 + "px";
          }
        }, 200);
      }
      if (scrollY >= this.pageTop - 100) {
        if (this.addTimeout) {
          setTimeout(() => {
            this.onFullPage = true;
          }, 1000);
        } else {
          this.onFullPage = true;
        }
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
  },
  computed: {
    ...mapState(["welcomeButtonClicked"])
  },
  watch: {
    welcomeButtonClicked(click) {
      if (click) {
        this.addTimeout = true;
      }
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
 
  border-radius: 5px;
  color: #333;
  margin: 50px auto;
  padding: 20px;
}
.text h1 {
  font-weight: 600;
  font-size: 50px;
  margin: 20px 0 0 0;
  animation-delay: 0.4s;
}
.text h2 {
  letter-spacing: 1px;
  padding: 20px 0;
  animation-delay: 0.6s;
  font-size: 16px;
}
.model {
  width: 700px;
  height: 100%;
  background-color: #003849;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  z-index: 1;
  animation-duration: 0.7s;
  padding: 40px;
  box-sizing: border-box;
}

.model p {
  color: #fff;
  letter-spacing: 0.2px;
  line-height: 30px;
  padding-top: 40px;
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
  color: #00b7a1;
  border: solid 2px #00b7a1;
}
.btn:hover {
  background-color: #00b7a1;
  color: #fff;
}
.delay1 {
  animation-delay: 0s;
}
.delay2 {
  animation-delay: 0.2s;
}
.delay3 {
  animation-delay: 0.4s;
}
.delay4 {
  animation-delay: 0.6s;
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
    display: none;
  }
  .btn {
    margin: 50px auto;
  }
  .box {
    margin: 70px auto;
  }
  .model {
    width:100%;
  }
}
@media (max-width: 600px) {
  .wrap {
    width: 100%;
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
    color: #00b7a1;
  }
  .text {
    width: 100%;
    padding: 0;
    margin: 0;
    outline: none;
    background: white;
    color: #333;
    border: none;
  }
  .model {
    width:100%;
    height: auto;
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
    top: 530px;
  }
}
</style>
