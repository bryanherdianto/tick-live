const eventController = require("../controllers/event.controller");
const express = require("express");
const router = express.Router();

router.get("/", eventController.getAllEventsWithLocation);
router.get("/:id", eventController.getEventByIdWithDetails);
router.post("/create", eventController.createEvent);
router.put("/update/:id", eventController.updateEvent);
router.delete("/delete/:id", eventController.deleteEvent);
router.get("/:date", eventController.getEventByDate);
router.get("/:name", eventController.getEventByName);

module.exports = router;
