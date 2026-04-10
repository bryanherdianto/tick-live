const eventRepository = require("../repositories/event.repository");
const baseResponse = require("../utils/baseResponse.util");

exports.getAllEvents = async (req, res) => {
	try {
		const events = await eventRepository.getAllEvents();
		baseResponse(res, true, 200, "Events fetched successfully", events);
	} catch (error) {
		console.error("Error fetching events:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

exports.getEventById = async (req, res) => {
	const { id } = req.params;
	try {
		const event = await eventRepository.getEventById(id);
		if (!event) {
			return baseResponse(res, false, 404, "Event not found");
		}
		baseResponse(res, true, 200, "Event fetched successfully", event);
	} catch (error) {
		console.error("Error fetching event by ID:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

exports.createEvent = async (req, res) => {
	const { name, id_host, date, location_id } = req.body;
	try {
		const eventExists = await eventRepository.getEventByLocationAndDate(
			location_id,
			date,
		);
		if (eventExists) {
			return baseResponse(
				res,
				false,
				409,
				"Event already exists at this location and date",
			);
		}
		const newEvent = await eventRepository.createEvent({
			name,
			id_host,
			date,
			location_id,
		});
		baseResponse(res, true, 201, "Event created successfully", newEvent);
	} catch (error) {
		console.error("Error creating event:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

exports.updateEvent = async (req, res) => {
	const { id } = req.params;
	const { name, id_host, date, location_id } = req.body;
	try {
		const updatedEvent = await eventRepository.updateEvent(id, {
			name,
			id_host,
			date,
			location_id,
		});
		if (!updatedEvent) {
			return baseResponse(res, false, 404, "Event not found");
		}
		baseResponse(res, true, 200, "Event updated successfully", updatedEvent);
	} catch (error) {
		console.error("Error updating event:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

exports.deleteEvent = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedEvent = await eventRepository.deleteEvent(id);
		if (!deletedEvent) {
			return baseResponse(res, false, 404, "Event not found");
		}
		baseResponse(res, true, 200, "Event deleted successfully", deletedEvent);
	} catch (error) {
		console.error("Error deleting event:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

exports.getEventByDate = async (req, res) => {
	const { date } = req.params;
	try {
		if (!date || !isValidDate(date)) {
			return baseResponse(
				res,
				false,
				400,
				"Invalid date format. Use YYYY-MM-DD",
			);
		}
		const events = await eventRepository.getEventByDate(date);
		if (events.length === 0) {
			return baseResponse(res, false, 404, "No events found for this date");
		}
		baseResponse(res, true, 200, "Events fetched successfully", events);
	} catch (error) {
		console.error("Error fetching events by date:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

function isValidDate(dateStr) {
	// Format YYYY-MM-DD
	const regex = /^\d{4}-\d{2}-\d{2}$/;
	if (!regex.test(dateStr)) return false;

	// Check tanggal valid
	const date = new Date(dateStr);
	return date instanceof Date && !isNaN(date);
}

exports.getEventByName = async (req, res) => {
	const { name } = req.params;
	try {
		const events = await eventRepository.getEventByName(name);
		if (events.length === 0) {
			return baseResponse(res, false, 404, "No events found with this name");
		}
		baseResponse(res, true, 200, "Events fetched successfully", events);
	} catch (error) {
		console.error("Error fetching events by name:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

exports.getAllEventsWithLocation = async (req, res) => {
	try {
		const events = await eventRepository.getAllEventsWithLocation();
		baseResponse(
			res,
			true,
			200,
			"Events with locations fetched successfully",
			events,
		);
	} catch (error) {
		console.error("Error fetching events with locations:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};

exports.getEventByIdWithDetails = async (req, res) => {
	const { id } = req.params;
	try {
		const event = await eventRepository.getEventByIdWithDetails(id);
		if (!event) {
			return baseResponse(res, false, 404, "Event not found");
		}
		baseResponse(res, true, 200, "Event details fetched successfully", event);
	} catch (error) {
		console.error("Error fetching event by ID with details:", error);
		baseResponse(res, false, 500, "Internal server error");
	}
};
