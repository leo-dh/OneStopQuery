<template>
  <footer>
    <div class="footer__trademark">
      <router-link :to="`/${routes[0].path}`" id="logo"
        >OneStopQuery</router-link
      >
      <p></p>
    </div>
    <div class="footer__links">
      <ul class="footer__links__primary">
        <li v-for="route in routes" :key="route.id">
          <router-link :to="`/${route.path}`"> {{ route.name }}</router-link>
        </li>
      </ul>
      <ul class="footer__links__secondary">
        <li v-for="link in links" :key="link.id">
          <router-link :to="`/${link.path}`"> {{ link.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="footer__contact">
      <router-link
        :to="`/${loginRoute.path}`"
        tag="button"
        class="footer__contact__button"
      >
        {{ loginRoute.name }}
      </router-link>
      <a href="mailto: support@onestopquery.com">support@onestopquery.com</a>
      <a href="tel: 65-6123-5467">(65) 6123 5467</a>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      routes: (state) => state.routes,
      loginRoute: (state) => state.loginRoute,
    }),
  },
  data() {
    return {
      links: [
        { id: 0, path: "contact", name: "Contact" },
        { id: 1, path: "privacypolicy", name: "Privacy Policy" },
        { id: 2, path: "terms", name: "Terms of Use" },
      ],
    };
  },
};
</script>

<style scoped>
#logo {
  font-family: "Fredoka One", "Open Sans";
  text-decoration: none;
  font-size: 1.5rem;
  height: 10vh;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.1em;
}

footer {
  display: grid;
  grid-template-areas:
    "trademark"
    "links"
    "contact";
  background-color: var(--lightgrey);
  padding-bottom: 5%;
}

footer ul {
  list-style: none;
}

.footer__trademark {
  grid-area: trademark;
}

.footer__links {
  display: grid;
  grid-area: links;
  align-items: start;
  justify-items: center;
  grid-template-areas: "primary secondary";
  grid-template-columns: 1fr 1fr;
  padding: 0 10%;
}

.footer__links__primary {
  grid-area: primary;
}
.footer__links__secondary {
  grid-area: secondary;
}

.footer__contact {
  display: grid;
  justify-items: center;
  grid-area: contact;
}
.footer__links__primary li,
.footer__links__secondary li {
  position: relative;
  z-index: 0;
  margin: 0.5em 0;
}
.footer__links__primary li a,
.footer__links__secondary li a {
  text-decoration: none;
  color: black;
}
.footer__links__primary li::after,
.footer__links__secondary li::after {
  content: "";
  width: 3px;
  height: 1em;
  background-color: var(--teal);
  position: absolute;
  left: -0.7em;
  bottom: 1.5px;
}

.footer__contact__button {
  padding: 0.8em 2em;
  background: none;
  border-radius: 2em;
  border: solid 2px var(--teal);

  font-weight: bold;
  color: #2c3e50;

  transition: all 0.3s ease;
  cursor: pointer;
  margin: 1em 0;
}

.footer__contact__button:hover {
  background: var(--teal);
  border-color: var(--teal);
  color: white;
}

.footer__contact a {
  text-decoration: none;
  color: black;
  margin: 0.2em 0;
}

@media screen and (min-width: 768px) {
  footer {
    grid-template-areas: "trademark links . . contact";
    padding: 2em 2.5%;
    align-items: center;
  }
  .footer__links {
    padding: initial;
  }
  .footer__contact__button {
    margin: 0.2em 0;
  }
}
</style>
