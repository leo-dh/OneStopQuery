<template>
  <div id="app">
    <navbar-item />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <footer-item />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: {
    "navbar-item": NavBar,
    "footer-item": Footer,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["toggleMobile"]),
    getWindowWidth() {
      let mobile = window.innerWidth <= 900;
      this.toggleMobile(mobile);
    },
  },
  created() {
    this.getWindowWidth();
    addEventListener("resize", this.getWindowWidth);
  },
  destroyed() {
    removeEventListener("resize", this.getWindowWidth);
  },
  watch: {
    "$store.state.menuOpen": function() {
      if (this.$store.state.menuOpen) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap");
@import url("./assets/styles/variables.css");

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* Components */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
}
.menuOpen {
  height: 100%;
  overflow: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
}
#app navbar-item {
  grid-area: header;
}

#app .main {
  grid-area: main;
}

#app footer-item {
  grid-area: footer;
}
</style>
