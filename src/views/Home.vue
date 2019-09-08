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
      offset: 0,
      imagesForCaching: [
        "woi/woi-home.png",
        "woi/woi-main.png",
        "woi/woi-contact.png",
        "a-n-d/a&d-main.png",
        "a-n-d/a&d-angels.png",
        "a-n-d/a&d-abbadon.png",
        "vault/vault-home.png",
        "vault/vault-notes.png",
        "vault/vault-passwords.png",
        "memester/home.png",
        "memester/search.png",
        "memester/menu.png",
        "memester/image.png",
        "memester/tags.png",
        "fusion/fusion-front.png",
        "fusion/fusion-tracks.png",
        "fusion/fusion-info.png",
        "fusion/fusion-filter.png",
        "fusion/fusion-levels.png"
      ]
    };
  },
  created() {
    function preloadImages(array) {
      if (!preloadImages.list) {
        preloadImages.list = [];
      }
      var list = preloadImages.list;
      for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
          var index = list.indexOf(this);
          if (index !== -1) {
            list.splice(index, 1);
          }
        };
        list.push(img);
        img.src = array[i];
      }
    }
    preloadImages(this.imagesForCaching);
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
