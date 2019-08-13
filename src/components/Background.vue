<template>
  <div class="background">
    <canvas ref="canvas"></canvas>
    <welcome />
  </div>
</template>


<script>
import welcome from "@/components/Welcome";
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
      mobileAmount: 200
    };
  },
  mounted() {
    let canvas = this.canvas,
      c = this.context;
    canvas = this.$refs.canvas;

    canvas.width = window.innerWidth -17;
    canvas.height = window.innerHeight -3;
    c = canvas.getContext("2d");

    window.addEventListener("resize", function() {
      canvas.width = window.innerWidth -17;
      canvas.height = window.innerHeight -3;
      init();
    });

    let gravity = 0;
    let friction = 0;

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.color = "#888";

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
          if (friction != 0) {
            this.dy = -this.dy * friction;
          } else {
            this.dy = -this.dy;
          }
        } else {
          gravity === 1 ? (this.dy += gravity) : null;
        }

        if (friction === 0) {
          this.x += this.dx;
        }

        this.y += this.dy;

        this.draw();
      };
    }

    let circleArray = [];

    function init(dx, dy) {
      let amount = 40;
        if(window.innerWidth < 600){
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
   
}

</style>