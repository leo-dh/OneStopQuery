import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/getstarted",
		name: "Get Started",
		component: () =>
			import(/*webpackChunkName:"getstarted" */ "@/views/GetStarted.vue")
	},
	{
		path: "/aboutus",
		name: "About us",
		component: () => import(/*webpackChunkName:"aboutus" */ "@/views/About.vue")
	},
	{
		path: "/feedback",
		name: "Feedback",
		component: () =>
			import(/*webpackChunkName:"feedback" */ "@/views/Feedback.vue")
	},
	{
		path: "/chat",
		name: "Chat Now",
		component: () => import(/*webpackChunkName:"chat" */ "@/views/Chat.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
