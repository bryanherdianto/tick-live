import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import EventPage from "./components/EventPage.vue";
import CheckoutPage from "./components/CheckoutPage.vue";
import VenuePage from "./components/VenuePage.vue";
import SeatSelectionPage from "./components/SeatSelectionPage.vue";
import EventDetailsPage from "./components/EventDetailsPage.vue";
import VenueDetailsPage from "./components/VenueDetailsPage.vue";
import TicketsPage from "./components/TicketsPage.vue";

const routes = [
	{ path: "/", name: "home", component: HomePage },
	{ path: "/events", name: "events", component: EventPage },
	{ path: "/event/:id", name: "event-details", component: EventDetailsPage },
	{ path: "/venues", name: "venues", component: VenuePage },
	{ path: "/venue/:id", name: "venue-details", component: VenueDetailsPage },
	{
		path: "/seat-selection/:eventId",
		name: "seat-selection",
		component: SeatSelectionPage,
	},
	{ path: "/checkout", name: "checkout", component: CheckoutPage },
	{ path: "/tickets", name: "my-tickets", component: TicketsPage },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
