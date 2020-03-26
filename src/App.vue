<template>
	<div id="app">
		<navbar-item />
		<div class="main">
			<router-view />
		</div>
	</div>
</template>
<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar";
export default {
	components: {
		"navbar-item": NavBar
	},
	data() {
		return {};
	},
	methods: {
		...mapActions(["toggleMobile"]),
		getWindowWidth() {
			let mobile = window.innerWidth <= 900;
			this.toggleMobile(mobile);
		}
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
		}
	}
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap");
@import url("./assets/styles/variables.css");

/* Animations */

/* Components */
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
.menuOpen {
	height: 100%;
	overflow: hidden;
}
#app {
	font-family: "Raleway", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: grid;
	grid-template-areas:
		"header"
		"main"
		"footer";
}
#app > NavBar {
	grid-area: header;
}

#app > .main {
	grid-area: main;
}
</style>
