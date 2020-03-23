import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GetStarted from "@/views/GetStarted.vue";
import About from "@/views/About.vue";
import Feedback from "@/views/Feedback.vue";
import Chat from "@/views/Chat.vue";
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
		component: GetStarted
	},
	{
		path: "/aboutus",
		name: "About us",
		component: About
	},
	{
		path: "/feedback",
		name: "Feedback",
		component: Feedback
	},
	{
		path: "/chat",
		name: "Chat Now",
		component: Chat
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
