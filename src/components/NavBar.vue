<template>
  <header>
    <div class="container">
      <router-link
        :to="`/${routes[0].path}`"
        id="logo"
        @click.native="$store.state.menuOpen ? toggleMenuOpen() : null"
        >OneStopQuery</router-link
      >
      <img
        :src="
          $store.state.menuOpen
            ? require('../assets/icons/SVG/cross.svg')
            : require('../assets/icons/SVG/menu.svg')
        "
        alt="menu icon"
        id="menu"
        @click="toggleMenuOpen"
        v-if="$store.state.mobile"
      />
      <transition name="fade">
        <div
          class="overlay"
          v-if="$store.state.menuOpen"
          @click="toggleMenuOpen()"
        ></div>
      </transition>
      <transition name="slide">
        <ul v-if="!$store.state.mobile || $store.state.menuOpen">
          <li v-for="route in routes" :key="route.id">
            <router-link
              :to="`/${route.path}`"
              @click.native="$store.state.mobile ? toggleMenuOpen() : null"
            >
              <img
                :src="require(`@/assets/${route.imagepath}`)"
                :alt="`icon of ${route.name}`"
              />
              {{ route.name }}</router-link
            >
          </li>
          <li>
            <router-link
              :to="`/${loginRoute.path}`"
              :tag="$store.state.mobile ? 'a' : 'button'"
              @click.native="$store.state.mobile ? toggleMenuOpen() : null"
              class="navlogin"
            >
              <img
                :src="require(`@/assets/${loginRoute.imagepath}`)"
                :alt="`icon of ${loginRoute.name}`"
                v-if="$store.state.mobile"
              />
              {{ loginRoute.name }}
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["toggleMenuOpen"]),
  },
  computed: {
    ...mapState({
      routes: (state) => state.routes,
      loginRoute: (state) => state.loginRoute,
    }),
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fredoka+One&display=swap");

/* Animations */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translate(-100%, 0);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Components */
#logo {
  font-family: "Fredoka One", "Open Sans";
  text-decoration: none;
  font-size: 1.5rem;
  height: 10vh;
  color: black;
  background: var(--aquamarine);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.1em;
  position: relative;
  z-index: 2;
}
.container {
  display: flex;
  flex-direction: column;
}
img {
  height: 0.8em;
  opacity: 0.7;
  margin: 0 0.5em 0 0;
}
ul {
  list-style: none;
  height: 90vh;
  align-self: flex-start;
  padding: 1em 0;
  position: absolute;
  top: 10vh;
  background: white;
  z-index: 3;
}
li {
  padding: 1em 2em;
}
ul li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(1, 1, 1, 0.5);
  z-index: 1;
}
#menu {
  position: absolute;
  right: 0.5em;
  top: calc((10vh - 1.5em) / 2);
  height: 1.5em;
  cursor: pointer;
  z-index: 2;
}

/* media queries */
@media screen and (min-width: 900px) {
  .container {
    flex-direction: row;
    min-height: 10vh;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    background: var(--aquamarine);
  }
  ul {
    position: unset;
    height: auto;
    align-self: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    background: var(--aquamarine);
  }
  li {
    padding: 0 1em;
  }
  li button {
    padding: 0.6em 1.8em;
    background: none;
    border-radius: 2em;
    border: solid 2px var(--teal);
    font-size: 1rem;
    color: #2c3e50;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  li button:hover {
    background: var(--teal);
    border-color: var(--teal);
    color: white;
  }
}
</style>
