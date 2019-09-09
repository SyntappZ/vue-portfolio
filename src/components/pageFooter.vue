<template>
  <div class="pageFooter">
      <div class="wrap" :class="pageOn">
        <div class="icon-wrap">
          <div class="icon">
            <a href="https://github.com/SyntappZ" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div class="icon">
            <a href="https://github.com/SyntappZ/vue-portfolio" target="_blank">
              <i class="fas fa-code"></i>
            </a>
          </div>
          <div class="icon">
            <a href="https://www.codewars.com/users/SyntappZ" target="_blank">
              <i class="fab fa-node-js"></i>
            </a>
          </div>
          <div class="icon">
            <a href="mailto:syntappz@gmail.com" target="_blank">
              <i class="fas fa-at"></i>
            </a>
          </div>
        
      </div>
    </div>
  
    <div class="auth" :class="pageOn">
      <p>Syntappz&copy; 2019</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  
  name: "pageFooter",

  data() {
    return {
      pageOn: 'homePage'
    };
  },
  methods: {},
   watch: {
    currentPageOn(page) {
      if(page) {
         this.pageOn = page;
      }
     
    }
  },
  computed: {
      ...mapState(['currentPageOn']),
  }
};
</script>


<style scoped>
.pageFooter {
  width: 100%;
  background-color: #003849;
  letter-spacing: 1px;
 
}

.auth {
  position: relative;
  bottom: 0;
  width: 100%;
  padding:18px 0;
  text-align: center;
  color:#fff;
  background: #00b7a1;
}
.auth p {
  padding:0;
  margin:0;
}
.homePage {
   border-top: solid #00b7a1 1px;
   color:#000;
}
.wrap {
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.icon-wrap {
  display: flex;
  width: 500px;
  justify-content: space-around;
}
.icon {
  border:#015e53 1px solid;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #003849;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
}
.icon:hover {
  background-color: #01495f;
  transform: scale(0.9);
  border:#00b7a1 1px solid;
 
}
.icon a {
  color: #00b7a1;
}

.link {
  padding: 0 6vw;
  color: white;
  letter-spacing: 2px;
}
.link:hover {
  font-weight: 600;
  text-shadow: 0 0 20px #fff;
}



@media (max-width: 600px) {
  .icon-wrap {
    width: 100%;
  }
  .link {
    padding: 0 20px;
  }
  
}
@media (min-height: 800px) and (min-width: 1024px) {
 .icon-wrap {
   width:700px;
 }
}

</style>