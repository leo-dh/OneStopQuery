import Vue from "vue";
import Vuex from "vuex";
import { routes, loginRoute } from "./RoutesDetails.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		mobile: null,
		menuOpen: false,
		routes: routes,
		loginRoute: loginRoute,
	},
	mutations: {
		changeMobileState: (state, mobile) => {
			state.mobile = mobile;
		},
		changeMenuOpenState: (state) => {
			state.menuOpen = !state.menuOpen;
		},
	},
	actions: {
		toggleMobile: ({ commit }, mobile) => {
			commit("changeMobileState", mobile);
		},
		toggleMenuOpen: ({ commit }, payload) => {
			commit("changeMenuOpenState");
		},
	},
	getters: {
		isMobile: (state) => {
			return state.mobile;
		},
		isMenuOpen: (state) => {
			return state.menuOpen;
		},
		routes: (state) => {
			return state.routes;
		},
		loginRoute: (state) => {
			return state.loginRoute;
		},
	},
	modules: {},
});
