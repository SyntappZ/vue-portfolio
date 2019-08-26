<template>
  <div class="projects" >
    <h1 v-if="onProjects" class="animated flipInX">{{ title }}</h1>
    <div class="project-wrap" v-if="onProjects">
      <div class="project"  v-for="project in projects" :key="project.id">
        <div class="img-wrap animated bounceInLeft" :class="project.delay">
           <img :src="project.img" alt="woi" />
        </div>
       
        <div class="info animated bounceInRight" :class="project.delay">
          <div class="text-wrap">
            <h2 class="title">{{ project.title }}</h2>

            <div class="animated">
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
       onProjects: false,
      projects: [
        {
          id: 1,
          title: 'world of information',
          subtext: 'Vue - Wiki/Imgur API',
          img: 'woi-home.png',
          delay: 'delay1'
        },
      
          {
          id: 2,
          title: 'angels & demons',
          subtext: 'Vue - Wiki API',
          img: 'a&d-main.png',
          delay: 'delay2'
        },
            {
          id: 3,
          title: 'the vault',
          subtext: 'Vue/Vuetify - Firebase',
          img: 'vault-notes.png',
          delay: 'delay3'
        },
          {
          id: 4,
          title: 'fusion ninja',
          subtext: 'cordova/framwork7',
          img: 'fusion.png',
          delay: 'delay4'
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
      if(scrollY >= pageTop) {
        this.onProjects = true;
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
  padding: 80px 0;
  box-sizing: border-box;
  background: linear-gradient(0deg, #015169, #003849);
  color: #333;
}
.project-wrap {
  width: 70%;
  margin: 100px auto;
}
h2 {
  text-align:center;
  text-transform: uppercase;
}
.project {
  width: 100%;
  display:flex;
  margin:20px auto;
  height:300px;
  
 transition: .3s ease;
}


.info {
  width:50%;
  background:rgb(255, 255, 255);
  display:flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
 
}


h1 {
  font-weight: 600;
  font-size: 50px;
  color: #fff;
  padding: 0;
}
.img-wrap {
  width:50%;
  
}
img {
  object-fit: cover;
  width: 100%;
  height: 300px;
   border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: .3s ease;
 
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

.delay1 {
  animation-delay: .4s;
}
.delay2 {
  animation-delay: .6s;
}
.delay3 {
  animation-delay: .8s;
}
.delay4 {
  animation-delay: 1s;
}
@media (min-height: 800px) {
  .project-wrap {
    width: 60%;
  }
  
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