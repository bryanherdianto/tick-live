const seatRepository = require('../repositories/seat.repository');
const baseResponse = require('../utils/baseResponse.util');

exports.getAllSeats = async (req, res) => {
    try {
        const seats = await seatRepository.getAllSeats();
        baseResponse(res, true, 200, 'Seats fetched successfully', seats);
    } catch (error) {
        console.error('Error fetching seats:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}

exports.getSeatById = async (req, res) => {
    const seatId = req.params.id;
    try {
        const seat = await seatRepository.getSeatById(seatId);
        if (!seat) {
            return baseResponse(res, false, 404, 'Seat not found');
        }
        baseResponse(res, true, 200, 'Seat fetched successfully', seat);
    } catch (error) {
        console.error('Error fetching seat by ID:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}

exports.createSeat = async (req, res) => {
    const { event_id, position, hierarchy, price } = req.body;
    try {
        const newSeat = await seatRepository.createSeat({ event_id, position, hierarchy, price });
        baseResponse(res, true, 201, 'Seat created successfully', newSeat);
    } catch (error) {
        console.error('Error creating seat:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}

exports.updateSeat = async (req, res) => {
    const seatId = req.params.id;
    const { event_id, position, hierarchy, price } = req.body;
    try {
        const updatedSeat = await seatRepository.updateSeat(seatId, { event_id, position, hierarchy, price });
        if (!updatedSeat) {
            return baseResponse(res, false, 404, 'Seat not found');
        }
        baseResponse(res, true, 200, 'Seat updated successfully', updatedSeat);
    } catch (error) {
        console.error('Error updating seat:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}

exports.deleteSeat = async (req, res) => {
    const seatId = req.params.id;
    try {
        const deletedSeat = await seatRepository.deleteSeat(seatId);
        if (!deletedSeat) {
            return baseResponse(res, false, 404, 'Seat not found');
        }
        baseResponse(res, true, 200, 'Seat deleted successfully', deletedSeat);
    } catch (error) {
        console.error('Error deleting seat:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}


exports.sortAvailableSeatsByCheap() = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const sortedSeats = await seatRepository.sortAvailableSeatsByCheap(eventId);
        if (!sortedSeats || sortedSeats.length === 0) {
            return baseResponse(res, false, 404, 'No available seats found for this event');
        }
        baseResponse(res, true, 200, 'Seats sorted by price successfully', sortedSeats);
    } catch (error) {
        console.error('Error sorting seats by price:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}

exports.sortAvailableSeatsByExpensive = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const sortedSeats = await seatRepository.sortAvailableSeatsByExpensive(eventId);
        if (!sortedSeats || sortedSeats.length === 0) {
            return baseResponse(res, false, 404, 'No available seats found for this event');
        }
        baseResponse(res, true, 200, 'Seats sorted by price successfully', sortedSeats);
    } catch (error) {
        console.error('Error sorting seats by price:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}


exports.getAvailableSeatsByEventId = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const seats = await seatRepository.getAvailableSeatsByEventId(eventId);
        if (!seats || seats.length === 0) {
            return baseResponse(res, false, 404, 'No seats found for this event');
        }
        baseResponse(res, true, 200, 'Seats fetched successfully', seats);
    } catch (error) {
        console.error('Error fetching seats by event ID:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}

exports.getAvailableSeatsByEventIdAndHierarchy = async (req, res) => {
    const { eventId, hierarchy } = req.params;
    try {
        const seats = await seatRepository.getAvailableSeatsByEventIdAndHierarchy(eventId, hierarchy);
        if (!seats || seats.length === 0) {
            return baseResponse(res, false, 404, 'No seats found for this event and hierarchy');
        }
        baseResponse(res, true, 200, 'Seats fetched successfully', seats);
    } catch (error) {
        console.error('Error fetching available seats by event ID and hierarchy:', error);
        baseResponse(res, false, 500, 'Internal server error');
    }
}
