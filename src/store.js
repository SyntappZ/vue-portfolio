import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gravityOn: false,
    page: 0,
    currentPageOn: "homePage",
    aboutPageHeight: "",
    projectsPageHeight: "",
    projectInfo: sessionStorage.getItem("info")
      ? JSON.parse(sessionStorage.getItem("info"))
      : []
  },
  mutations: {
    changeGravity(state) {
      state.gravityOn = true;
    },
    choosePage(state, page) {
      state.page = page;
      setTimeout(() => {
        state.page = 0
      }, 1000);
    },
    aboutPage(state, height) {
      state.aboutPageHeight = height;
    },
    projectsPage(state, height) {
      state.projectsPageHeight = height;
    },
    pageChanged(state, page) {
      state.currentPageOn = page;
    },
    getProjectData(state, data) {
      let id = data[0];
      let type = data[1];

      let projects = [
        {
          type: type,
          title: "world of information",
          about: "woi is wiki snippet search application.",
          making:
            "I learnt a good bit about using apis and axios making this project,\
             i had to make quite a few changes to the page from my original plan,\
              it was originally going to have google maps in too but turns out you need\
               to give them bank details to use the api so i used wiki api and imgur api instead,\
                i did try unsplash api first for images but it wasnt very good and even tho imgur is not\
                 that great either it was the better of the two, \
                 some of the images wont make much sense as the backup images are random for now i will maybe make a\
                  better search algorithm in the future, i know this project didnt need vuex but i wanted to give it a try\
                  so i could get familiar with it. EDIT: I have now implemented a better image search from wiki so now they\
                   make more sense and not that many have to use the backup images from imgur.",
          features: [
            "fully responsive",
            "wiki search with desctiption & images",
            "links to wiki page",
            "change the search amount"
          ],
          techUsed: [
            "html/css",
            "javascript",
            "vue/vuex",
            "axios",
            "materialize css",
            "wiki API",
            "imgur API"
          ],
          link: "https://world-of-information.netlify.com",
          github: "https://github.com/SyntappZ/world-of-information",
          mainImage: "woi/woi-home.png",
          images: ["woi/woi-main.png", "woi/woi-contact.png"]
        },

        {
          type: type,
          title: "angels and demons",
          about:
            "I made this site because im a big fan of the supernatural series and thought it would be good to get some information on what the\
           angel and demon characters are actually based on.",
          making:
            "Making this site was fun, i got into the wiki api a lot deeper than my last project and starting to understand axios a bit better.\
             Im still a bit sketchy on vuex i feel i could of used it better than i did, atleast i used the api in the store this time. angels \
             and demons pages fully working now, the pictures still need work.",
          features: [
            "fully responsive",
            "angels information",
            "demons information",
            "links to other sources"
          ],
          techUsed: [
            "html/css",
            "javascript",
            "vue/vuex",
            "axios",
            "vuetify",
            "wiki API"
          ],
          link: "https://angels-and-demons.netlify.com",
          github: "https://github.com/SyntappZ/angels-and-demons",
          mainImage: "a-n-d/a&d-main.png",
          images: ["a-n-d/a&d-angels.png", "a-n-d/a&d-abbadon.png"]
        },

        {
          type: type,
          title: "The vault",
          about:
            "the vault is a password manager made with vue and vuetify it can store passwords or notes, you can add,\
           delete, edit and favorite passwords and notes, the password manager has a strength indicator and a generator so you can always\
            have a stong password stored you can filter between strengths or favorites, the notes has a word counter and a favorites filter too.",
          testing: "TESTING LOGIN - email: test@test.com - password: Test1234",
          making:
            "making this project took longer than expected due to learning vue, vuetify and firebase all at once. i learnt a lot making this project \
            and was very fun to make, i feel i have i nice grasp on vue now and will definitely be alble to build my next projects faster, i resently \
            found out about vuex which would of helped me in this project a lot. this was also my first project connecting to a back end even tho its only\
             firebase i still leant a lot about connecting to the back end and getting/adding/modifying data, thanks for taking a look at my code.",
          features: [
            "fully responsive",
            "store/edit or delete your passwords/notes",
            "password strength indicator",
            "favorites",
            "strength/favorites filter"
          ],
          techUsed: ["html/css", "javascript", "vue", "vuetify", "firebase"],
          link: "https://the-vault.ml/",
          github: "https://github.com/SyntappZ/the-vault",
          mainImage: "vault/vault-home.png",
          images: ["vault/vault-notes.png", "vault/vault-passwords.png"]
        },

        {
          type: type,
          title: "memester",
          about:
            "memester is a meme search and share app for android, this has better functionality then the meme-apk\
          with lazyLoad images with masonary layout and has related tags images too and pressing the tag will load more images of that tag name and save images to favorites.",
          making:
            "Originaly i wanted to make this app download the images to the mobile but i just cant find good way of doing this at the moment, \
            i finally got download working by drawing the images to a canvas then downloading the canvas but this only works in browser and not apk\
             so i tried adding file transfer plugin for cordova but still not working so adding a download feature will have to wait.\
             Instead i decided to make it into a meme sharing app with the cordova social sharing plugin, i learnt how to impliment lazyload and masonary layout into apps\
             also learnt more about using api data.",
          features: [
            "search images",
            "related tag images",
            "tag search",
            "share to all social media",
            "add to favorites"
          ],
          techUsed: [
            "html/css",
            "javascript",
            "vue/vuex",
            "framework7",
            "cordova",
            "axios",
            "imgur API"
          ],
          link:
            "https://play.google.com/store/apps/details?id=syntappz.memester.fm7&gl=GB",
          github: "https://github.com/SyntappZ/memester",
          mainImage: "memester/memester-main.jpg",
          images: [
            "memester/home.png",
            "memester/search.png",
            "memester/menu.png",
            "memester/image.png",
            "memester/tags.png"
          ]
        },

        {
          type: type,
          title: "fusion ninja",
          about:
            "fusion ninjs is an android app for searching user created tracks in a game called trials fusion.",
          making:
            "i made this app for a game called trials fusion, it allows people to search for other peoples ninja tracks so they can play them, \
            there is already a website that does this called https://fusion.ninja-central.com but its not very responsive on mobile and makes it hard to use,\
             all information for the app comes from the website i used a web scrapper with node.js to get the track details and converted into an object this app\
              was made using vue, framework7 and cordova it was fun making this app as i am a fan of the game it helped me understand how to use vue,\
               framework7 and cordova together and i also learned about virtual lists making this app.",
          features: [
            "search by trackname, creator or ninja level",
            "quick search",
            "virtual lists for quick loading"
          ],
          techUsed: [
            "html/css",
            "javascript",
            "vue",
            "framwork7",
            "cordova",
            "node/cheerio"
          ],
          link:
            "https://play.google.com/store/apps/details?id=io.syntappz.fusion&gl=GB",
          github: "https://github.com/SyntappZ/trials-fusion-ninja-app",
          mainImage: "fusion/fusion-main.png",
          images: [
            "fusion/fusion-front.png",
            "fusion/fusion-tracks.png",
            "fusion/fusion-info.png",
            "fusion/fusion-filter.png",
            "fusion/fusion-levels.png"
          ]
        }
      ];

      state.projectInfo = projects[id];
      sessionStorage.setItem("info", JSON.stringify(projects[id]));
    }
  },
  actions: {
    gravity({ commit }) {
      commit("changeGravity");
    },
    pageScroll({ commit }, page) {
      commit("choosePage", page);
    },
    aboutPageHeight({ commit }, height) {
      commit("aboutPage", height);
    },
    projectsPageHeight({ commit }, height) {
      commit("projectsPage", height);
    },
    projectData({ commit }, data) {
      commit("getProjectData", data);
    },
    pageChanged({ commit }, page) {
      commit("pageChanged", page);
    }
  },
  getters: {}
});
