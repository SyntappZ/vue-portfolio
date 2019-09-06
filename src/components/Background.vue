<template>
  <div class="background">
    <canvas ref="canvas"></canvas>
    <welcome />
  </div>
</template>


<script>
import welcome from "@/components/Welcome";
import { mapState } from "vuex";
export default {
  name: "background",
  components: {
    welcome
  },
  data() {
    return {
      canvas: null,
      context: null,
      fullAmount: 400,
      mobileAmount: 200,
      gravity: 0,
      friction: 0
    };
  },
  mounted() {
    
    let vm = this;
    let canvas = vm.canvas,
      c = vm.context;
    canvas = vm.$refs.canvas;

    canvas.width = window.innerWidth - 17;
    canvas.height = window.innerHeight - 5;
    c = canvas.getContext("2d");

    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth - 17;
      canvas.height = window.innerHeight - 5;
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

      this.color = "#eee";

      this.draw = function() {
        c.beginPath();
        c.shadowColor = "#fff";

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
      let amount = 40;
      if (window.innerWidth < 600) {
        amount = 20;
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
 

  computed: mapState(["gravityOn"]),

  watch: {
    gravityOn(newValue) {
      if (newValue) {
        this.gravity = 1;
        this.friction = 0.5;
      }
    }
  }
};
</script>


<style scoped>
.background {
  height: 100vh;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  background: linear-gradient(0deg, #015169, #003849);
  overflow: hidden;
}
</style>