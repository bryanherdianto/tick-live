import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import EventPage from "./components/EventPage.vue";
import CheckoutPage from "./components/CheckoutPage.vue";
import VenuePage from "./components/VenuePage.vue";
import SeatSelectionPage from "./components/SeatSelectionPage.vue";
import EventDetailsPage from "./components/EventDetailsPage.vue";

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
	{
		path: "/checkout",
		name: "checkout",
		component: CheckoutPage,
	},
	{
		path: "/venue",
		name: "venue",
		component: VenuePage,
	},
	{
		path: "/seat-selection",
		name: "seat-selection",
		component: SeatSelectionPage,
	},
	{
		path: "/event-details",
		name: "event-details",
		component: EventDetailsPage,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
