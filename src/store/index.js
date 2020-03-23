import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		mobile: null,
		menuOpen: false
	},
	mutations: {
		changeMobileState: (state, mobile) => {
			state.mobile = mobile;
		},
		changeMenuOpenState: state => {
			state.menuOpen = !state.menuOpen;
		}
	},
	actions: {
		toggleMobile: ({ commit }, mobile) => {
			commit("changeMobileState", mobile);
		},
		toggleMenuOpen: ({ commit }, payload) => {
			commit("changeMenuOpenState");
		}
	},
	getters: {
		isMobile: state => {
			return state.mobile;
		},
		isMenuOpen: state => {
			return state.menuOpen;
		}
	},
	modules: {}
});
