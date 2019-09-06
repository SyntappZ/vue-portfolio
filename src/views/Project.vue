<template>
  <div>
    <div class="project">
      <div class="backBtn animated fadeInLeft" @click="backToProjects">
        <i class="fas fa-arrow-circle-left"></i>
      </div>
      <h1 class="name animated fadeInDown">syntappz</h1>
      <div class="bg">
        <canvas ref="canvas"></canvas>
      </div>
      <div class="top-flex">
        <div class="main-img-wrap animated jackInTheBox">
          <img :src="mainImage" />
        </div>
        <h2 class="title animated fadeInRight">{{ title }}</h2>
      </div>

      <div class="bottom-flex">
        <div class="left-box animated fadeInLeft">
          <div v-if="type == 'android'" class="android-img-box">
            <div class="android-img" v-for="(img, i) in images" :key="i">
              <img :src="img" />
            </div>
          </div>
          <div v-else class="img-box">
            <div class="img" v-for="(img, i) in images" :key="i">
              <img :src="img" />
            </div>
          </div>

          <div class="about">
            <h2>What is {{ title }}</h2>
            <P>{{ about }}</P>
            <p>
              <b>{{ testing }}</b>
            </p>
          </div>
          <hr>

          <div class="making">
            <h2>Making this project</h2>
            <p>{{ making }}</p>
          </div>
          <hr>
          <div class="links-wrap">
            <h2 class="linkTitle">{{ site }} & Github</h2>
            <div class="links">
              <a :href="link" target="_blank">
                <div class="btn">{{ site }}</div>
              </a>
              <a :href="github" target="_blank">
                <div class="btn">github</div>
              </a>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-box animated fadeInRight">
            <div class="features">
              <h2>Features</h2>
              <ul v-for="(feature, i) in features" :key="i">
                <li>{{ feature }}</li>
              </ul>
            </div>

            <div class="tech">
              <h2>Technology</h2>
              <ul v-for="(tech, i) in techUsed" :key="i">
                <li>{{ tech }}</li>
              </ul>
            </div>
          </div>
          <div class="toTop" @click="toTop">
            <i class="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import jump from "jump.js";
// import links from '@/components/Links'
export default {
  components: {
    // links
  },
  data() {
    return {
      type: "",
      title: "",
      about: "",
      making: "",
      features: [],
      techUsed: [],
      link: "",
      github: "",
      mainImage: "",
      images: [],
      canvas: null,
      context: null,
      fullAmount: 400,
      mobileAmount: 200,
      gravity: 0,
      friction: 0,
      testing: null,
      site: "Website"
    };
  },
  mounted() {
    this.$store.dispatch("pageChanged", "project");
    let pageData = this.$store.state.projectInfo;
    this.type = pageData.type;
    this.title = pageData.title;
    this.about = pageData.about;
    this.making = pageData.making;
    this.features = pageData.features;
    this.techUsed = pageData.techUsed;
    this.link = pageData.link;
    this.github = pageData.github;
    this.mainImage = pageData.mainImage;
    this.images = pageData.images;
    this.testing = pageData.testing;
    pageData.type === "android"
      ? (this.site = "Playstore")
      : (this.site = "Website");

    let bgHeight = document.querySelector(".bg").offsetHeight;

    let vm = this;
    let canvas = vm.canvas,
      c = vm.context;
    canvas = vm.$refs.canvas;

    canvas.width = window.innerWidth - 17;
    canvas.height = bgHeight;
    c = canvas.getContext("2d");

    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth - 17;
      canvas.height = bgHeight;
      init();
    });

    if (vm.gravityOn) {
      vm.gravity = 1;
      vm.friction = 0.5;
    }

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.color = "#00b7a1";

      this.draw = function() {
        c.beginPath();
        c.shadowColor = "#00b7a1";

        c.shadowBlur = 18;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        c.fillStyle = this.color;
        c.fill();
      };
      this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          if (vm.friction != 0) {
            this.dy = -this.dy * vm.friction;
          } else {
            this.dy = -this.dy;
          }
        } else {
          vm.gravity === 1 ? (this.dy += vm.gravity) : null;
        }

        if (vm.friction === 0) {
          this.x += this.dx;
        }

        this.y += this.dy;

        this.draw();
      };
    }

    let circleArray = [];

    function init(dx, dy) {
      let amount = 60;
      if (window.innerWidth < 600) {
        amount = 40;
      }

      circleArray = [];
      for (let i = 0; i < amount; i++) {
        let radius = Math.random() * 2 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5;
        let dy = Math.random() - 0.5;

        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    init();
    animate();
  },
  methods: {
    backToProjects() {
      this.$router.go(-1);
    },
    toTop() {
        jump('.project', { duration: 700 });
    }
  },
  computed: {
    ...mapState(["currentPageOn"])
  }
};
</script>

<style scoped>
.project {
  width: 90%;
  margin: auto;
  min-height: 1000px;
}
a {
  text-decoration: none;
}
.backBtn {
  color: white;
  font-size: 40px;
  position: absolute;
  top: 50px;
  transition: 0.2s;
  cursor: pointer;
}
.backBtn:hover {
  color: #dddddd;
}
.name {
  color: #fff;
  font-family: "Audiowide", cursive;
  font-weight: 100;
  font-size: 20px;
  margin-top: 20px;
  text-shadow: 0 0 5px #fff;
}
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 60vh;
  background: #003849;
  z-index: -1;
}
.top-flex {
  width: 100%;
  min-height: 500px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.main-img-wrap {
  width: 850px;
  animation-delay: 0.4s;
}
.main-img-wrap img {
  width: 100%;
  box-shadow: 1px 3px 16px #333;
}
.title {
  color: white;
  font-family: "Audiowide", cursive;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding:10px 0;
  border-bottom: solid 2px #00b7a1;
}

.img-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 70px 0;
}
.android-img-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 70px 0;
}
.android-img {
  width: 18%;
}
.img {
  width: 45%;
  
  cursor: zoom-in;
  
}


.img img,
.android-img img {
  width: 100%;
  box-shadow: 1px 1px 10px #333;
  transition: 0.4s ease;
}

/* .img img:hover {
    transform: scale(3);
    box-shadow: 5px 5px 100px #333;
    
   
  } */

.bottom-flex {
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.left-box {
  width: 850px;
  min-height: 500px;
}
.right {
  width: 300px;
  position: relative;
  
}
.right-box {
  width: 300px;
  text-align: left;
  height: 650px;
  color: #fff;
  background-color:#003849;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  outline: solid #00b7a1 1px;
  outline-offset: -15px;
  padding: 30px;
  box-shadow: 1px 1px 10px rgb(173, 173, 173);
}
.right-box h2 {
   color: #00b7a1;
}
.toTop {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: #fff;
  background: #003849;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: auto;
  cursor: pointer;
  position: absolute;
  bottom: 70px;
  right: 10px;
  box-shadow: 1px 1px 10px rgb(173, 173, 173);
  transition: .3s ease;


}
.toTop:hover {
  background: #01556e;
}

.making,
.about {
  text-align: left;
  
}
.making h2,
.about h2 {
  text-transform: capitalize;
 
}
.linkTitle {
  text-align: left;
}
.links-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 70px auto;
}
.links {
  width: 500px;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}
hr {
  border:solid 1px #e7e7e7;
  margin:80px 0;
}
.btn {
  background: #003849;
  color: #fff;
  margin: 0;
  height: 52px;
  padding: 0;
  line-height: 52px;
  width: 170px;
  transition: .3s ease;
  border:0;
  box-shadow: 1px 1px 10px rgb(173, 173, 173);
}
.btn:hover {
  background: #01556e;
}


@media (max-width: 1024px) {
  .img {
    width: 100%;
  }
}

@media (min-height: 800px) {
  .bottom-flex {
    margin-top: 100px;
    align-content: space-around;
  }
  .links {
    width: 700px;
  }
  .img {
    height: 300px;
  }
  .img img {
    height: 300px;
  }
  .main-img-wrap,
  .left-box {
    width: 1200px;
  }
}
</style>
