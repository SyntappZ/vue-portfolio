<template>
  <div class="project">
    <h1 class="name">syntappz</h1>
    <div class="bg">
       <canvas ref="canvas"></canvas>
    </div>
    <div class="top-flex">
      <div class="img-wrap">
        <img :src="mainImage">
      </div>
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="bottom-flex">

    </div>
    
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      type: '',
      title: '',
      about: '',
      making: '',
      features: [],
      techUsed: [],
      link: '',
      github: '',
      mainImage: '',
      images: [],
      canvas: null,
      context: null,
      fullAmount: 400,
      mobileAmount: 200,
      gravity: 0,
      friction: 0,


    };
  },
  mounted() {
    let pageData = this.$store.state.projectInfo
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

  let bgHeight = document.querySelector('.bg').offsetHeight;

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
  methods: {},
  computed: {}
};
</script>

<style scoped>
 .project {
   width:90%;
   margin:auto;
  
 }
 .name {
    color: #fff;
    font-family: "Audiowide", cursive;
    font-weight: 100;
    font-size:20px;
    margin-top: 20px;
    text-shadow: 0 0 5px #fff;
    
 }
  .bg {
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:60vh;
    background:#003849;
    z-index: -1;
  }
  .top-flex {
    width:100%;
    /* border:solid 1px black; */
    height:500px;
    margin-top: 100px;
    display:flex;
    justify-content:space-evenly;
    align-items: center;
  }
  .bottom-flex {
     width:100%;
    /* border:solid 1px black; */
    height:500px;
     display:flex;
    justify-content:space-between;
    
  }
  .img-wrap {
    width:60%;
    border:white solid 3px;
  }
  .img-wrap img {
    width:100%;
  }
  .title {
    color:white;
    font-family: "Audiowide", cursive;
    text-transform: uppercase;
    letter-spacing: 2px;
    
  }
  
</style>
