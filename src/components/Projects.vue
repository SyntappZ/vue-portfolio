<template>
  <div class="projects">
    <h1>{{ title }}</h1>
    <div class="project-wrap">
      <div class="project"  v-for="project in projects" :key="project.id" @mouseenter="hoverOn = true" @mouseleave="hoverOn = false">
        <img :src="project.img" alt="woi" />
        <div class="info">
          <div class="text-wrap" v-if="hoverOn">
            <h2 class="title animated fadeInDown fast">{{ project.title }}</h2>

            <div class="animated fadeInUp fast">
               <p>{{ project.subtext }}</p>
            <div class="more-btn">
              view more
              <i class="fas fa-arrow-right"></i>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      title: "Projects",
      hoverOn: false,
      projects: [
        {
          id: 1,
          title: 'world of information',
          subtext: 'Vue - Wiki/Imgur API',
          img: 'woi-home.png'
        },
          {
          id: 2,
          title: 'the vault',
          subtext: 'Vue/Vuetify - Firebase',
          img: 'vault-notes.png'
        },
          {
          id: 3,
          title: 'angels & demons',
          subtext: 'Vue - Wiki API',
          img: 'a&d-main.png'
        },
          {
          id: 4,
          title: 'fusion ninja',
          subtext: 'cordova/framwork7',
          img: 'fusion.png'
        }
      ]
    };
  },
  mounted() {
    let pageTop = document.querySelector(".projects").offsetTop;
    this.$store.dispatch("projectsPageHeight", pageTop);
    let aboutPage = this.$store.state.aboutPageHeight;
    window.addEventListener("scroll", () => {
      if (scrollY >= aboutPage) {
        pageTop = document.querySelector(".projects").offsetTop;
        this.$store.dispatch("projectsPageHeight", pageTop);
      }
    });
  },
  methods: {},
  computed: {}
};
</script>


<style scoped>
.projects {
  min-height: 100vh;

  padding-top: 80px;
  box-sizing: border-box;
  background: linear-gradient(0deg, #015169, #003849);

  color: #333;
}
.project-wrap {
  width: 80%;
  margin: auto;
 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
h2 {
  text-transform: uppercase;
}
.project {
  width: 47%;
  height: 300px;
  margin:15px 0;
  border: solid 1px #fff;
  position: relative;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.836);
  position: absolute;
  opacity: 0;
  transition: 1s ease;
  
}

.project:hover .info {
  opacity: 1;
}

h1 {
  font-weight: 600;
  font-size: 50px;
  color: #fff;
  padding: 0;
}
img {
  object-fit: cover;
  width: 100%;
  height: 300px;
  cursor: pointer;
  transition: 1s;
  position: absolute;
  left: 0;
  top: 0;
}


.more-btn {
  font-family: "Roboto Mono", monospace;
  width: 140px;
  cursor: pointer;
  border-radius: 3px;
  padding: 15px;
  margin: 30px auto;
  color: #fff;
  border: solid 2px #00b7a1;
  background: #00b7a1;
}
@media (max-width: 1024px) {
  .project-wrap {
    width: 100%;
  }
  .project {
    width: 100%;
  }
}
</style>