<template>
  <div class="homePage">
    <navbar />
    <background class="home" />
    <about class="about" />
    <projects class="projects" />
  </div>
</template>

<script>
// @ is an alias to /src
import about from "@/components/About";
import projects from "@/components/Projects";
import background from "@/components/Background";
import navbar from "@/components/Navbar";
import { mapState } from "vuex";
import jump from "jump.js";

export default {
  name: "home",
  components: {
    background,
    projects,
    about,
    navbar
  },
  data() {
    return {
      offset: 0
    };
  },
  mounted() {
    this.$store.dispatch("pageChanged", "homePage");

  },
  methods: {
    scroll(page) {
      jump(page, {
        duration: 700,
        offset: this.offset
      });
    }
  },
  computed: {
    ...mapState(["page"])
  },

  watch: {
    page(page) {
      console.log(page)
      
      if (page == 1) {
        
        this.offset = 0;
        this.scroll(".home");
      }
      if (page == 2) {
        this.offset = 0;
        this.scroll(".about");
      }
      if (page == 3) {
        this.offset = 1;
        this.scroll(".projects");
      }
    }
  }
};
</script>

<style scoped>
</style>
