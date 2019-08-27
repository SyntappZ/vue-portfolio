<template>
  <div v-if="notHome" class="navbar animated fadeInDown">
    <div class="wrap">
      <p class="link" @click="page(0)">Home</p>
      <p class="link" :class="about" @click="page(1)">About</p>
      <p class="link" :class="projects" @click="page(2)">Projects</p>
      <p class="link" :class="contact" @click="page(3)">Contact</p>
    </div>
    <h3 :class="projects">Syntappz</h3>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      notHome: false,
      about: "",
      projects: "",
      contact: "",
      pageOn: this.$route.name,
    };
  },
  methods: {
    page(page) {
      this.$store.dispatch("pageScroll", page);
    }
  },
  mounted() {
    
    setTimeout(() => {
      let nav, links, glow;
      let aboutPage = this.$store.state.aboutPageHeight;
      let projectsPage = this.$store.state.projectsPageHeight;
     
      
      window.addEventListener("scroll", () => {
       
        if (scrollY >= aboutPage) {
          this.notHome = true;
          nav = document.querySelector(".navbar");
          links = document.querySelectorAll(".link");
          projectsPage = this.$store.state.projectsPageHeight;
        } else {
          this.notHome = false;
        }

        if (scrollY >= aboutPage && scrollY < projectsPage) {
          this.about = "thick";
          this.projects = "";
          nav.style.background = "#fff";
          nav.style.color = "#003849";
          links.forEach(x => (x.style.color = "#003849"));
          projectsPage = this.$store.state.projectsPageHeight;
        }
        if (scrollY >= projectsPage) {
          this.about = "";
          this.projects = "thick";
          nav.style.background = "#003849";
          nav.style.color = "#fff";

          links.forEach(x => (x.style.color = "#fff"));
        }
      });
    }, 100);
  },
  watch: {
    pageOn(newVal, oldVal) {
      console.log(newVal)
    }
  }
};
</script>


<style scoped>
.navbar {
  min-height: 60px;
  position: fixed;
  z-index: 10;
  background: rgb(255, 255, 255);
  width: 100%;
  color: #003849;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  transition: 0.3s ease-in-out;
}
.wrap {
  display: flex;
}

.link {
  color: #003849;
  text-decoration: none;
  padding: 0 20px;
  letter-spacing: 2px;
  cursor: pointer;
}

.thick {
  font-weight: 900;
}

h3 {
  font-family: "Audiowide", cursive;
  letter-spacing: 2px;
}
@media (max-width: 600px) {
  .wrap {
    direction: row-reverse;
  }
  .link {
    padding: 0 5px;
    letter-spacing: 2px;
  }
}
</style>