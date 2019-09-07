<template>
  <div class="projects" name="projects">
  
   
    <div class="project-wrap animated fadeIn" v-if="onProjects">
        
       <h1 v-if="onProjects" class=" animated bounceInRight">{{ title }}</h1>
     <div class="project-line animated bounceInLeft"  v-if="onProjects"></div>
    
      <div class="project"  v-for="project in projects" :key="project.id">
        <div class="img-wrap animated bounceInLeft" :class="project.delay">
           <img :src="project.img" alt="woi" />
        </div>
       
        <div class="info animated bounceInRight" :class="project.delay">
          <div class="text-wrap">
            <h2 class="title">{{ project.title }}</h2>

            <div class="animated">
               <p>{{ project.subtext }}</p>
            <div class="more-btn"
            @click="sendProjectData(project.id, project.type)"
            >
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
      pageTop: 0,
      onProjects: false,
      projects: [
        {
          id: 0,
          type: 'web',
          title: 'world of information',
          subtext: 'Vue - Wiki/Imgur API',
          img: 'woi/woi-home.png',
          delay: 'delay1'
        },
      
          {
          id: 1,
          type: 'web',
          title: 'angels & demons',
          subtext: 'Vue - Wiki API',
          img: 'a-n-d/a&d-main.png',
          delay: 'delay2'
        },
            {
          id: 2,
          type: 'web',
          title: 'the vault',
          subtext: 'Vue/Vuetify - Firebase',
          img: 'vault/vault-home.png',
          delay: 'delay3'
        },
          {
          id: 3,
          type: 'android',
          title: 'memester',
          subtext: 'cordova/framework7',
          img: 'memester/memester-main.jpg',
          delay: 'delay4'
        },
          {
          id: 4,
          type: 'android',
          title: 'fusion ninja',
          subtext: 'cordova/framework7',
          img: 'fusion/fusion-main.png',
          delay: 'delay5'
        }
      ]
    };
  },
  mounted() {
    
   this.pageTop = document.querySelector(".projects").offsetTop;
   this.$store.dispatch("projectsPageHeight", this.pageTop);
    window.addEventListener("scroll", this.scrollListener)
   
  },
   beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener)
  },
  methods: {
    sendProjectData(id, type) {
      let proData = [id, type]
      this.$store.dispatch("projectData", proData);
      this.$router.push('/project')
    },
    scrollListener() {
      let aboutPage = this.$store.state.aboutPageHeight;
         
      if (scrollY >= aboutPage) {
       this.pageTop = document.querySelector(".projects").offsetTop;
       this.$store.dispatch("projectsPageHeight", this.pageTop);
      }
      if(scrollY >= this.pageTop) {
        this.onProjects = true;
      }
    
    }
  },
  computed: {}
};
</script>


<style scoped>
.projects {
  min-height: 100vh;
  padding: 110px 0 10px 0;
  box-sizing: border-box;
  background: #00495f;
  color: #333;
 
}
.project-wrap {
  width: 70%;
  margin: 50px auto;
  padding:30px;
  border:solid #00b7a1 1px;
   background: #003849;
  border-radius: 7px;
  
   
  
}
h2 {
  text-align:center;
  text-transform: uppercase;
}
.project {
  width: 100%;
  display:flex;
  margin:20px auto;
  min-height:300px;
  transition: .3s ease;
}


.info {
  width:50%;
  background:rgb(255, 255, 255);
  display:flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
 
}


 h1 {
  font-weight: 600;
  font-size: 50px;
  color: #fff;
  padding: 0;
  margin:10px;
}
.img-wrap {
  width:50%;
  
}
img {
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: .3s ease;
  display:block;
}
.project-line {
  width: 320px;
  height: 5px;
  
  background-color: #00b7a1;
  border-radius: 5px;
  margin:10px auto 50px;
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
.delay5 {
  animation-delay: 1.2s;
}
@media (min-height: 800px) and (min-width: 1024px) {
  .project-wrap {
    width: 60%;
  }
  
}
@media (max-width: 1024px) {
  .project-wrap {
    width:95%;
    
    box-sizing: border-box;
  }
  
  
  .info {
    width:100%;
   border-radius: 0;
  }
  .img-wrap {
    width:100%;
    
  }
  img {
   border-radius: 0;
   height:350px;
  }
  .project {
     flex-wrap:wrap;
     margin-bottom:50px;
  }
  @media (max-width: 600px) {
    h1 {
    font-size:30px;
  }
  h2 {
    font-size:18px;
  }
  p {
    font-size:14px;
  }
  img {
    height:200px;
  }
  .project-line {
    width:55%;
  }
   .project-wrap {
     margin:0;
    width:100%;
    border:none;
    padding:0;
    background-color:#00495f;
  }
  
  }
}
</style>