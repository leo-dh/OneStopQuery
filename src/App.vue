<template>
	<div id="app">
		<NavBar />
		<div class="main">
			<transition name="fade">
				<div class="overlay" v-if="$store.state.menuOpen"></div>
			</transition>
			<div class="content">
				<router-view />
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar";
export default {
	components: {
		NavBar
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
	padding: 1em;
}

.content {
	z-index: -2;
	position: relative;
}

.overlay {
	position: fixed;
	background: rgba(0, 0, 0, 0.6);
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: -1;
}
</style>
