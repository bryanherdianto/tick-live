import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import EventPage from "./components/EventPage.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
	},
	{
		path: "/event",
		name: "event",
		component: EventPage,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
