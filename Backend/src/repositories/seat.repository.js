const db = require('../database/pg.database');

exports.getAllSeats = async () => {
    try {
        const res = await db.query('SELECT * FROM seats');
        return res.rows;
    } catch (error) {
        console.error('Error fetching seats:', error);
        throw error;
    }
}

exports.getSeatById = async (seatId) => {
    try {
        const res = await db.query('SELECT * FROM seats WHERE id = $1', [seatId]);
        return res.rows[0];
    } catch (error) {
        console.error('Error fetching seat by ID:', error);
        throw error;
    }
}

exports.createSeat = async (seatData) => {
    try {
        const { event_id, position, hierarchy, price } = seatData;
        const res = await db.query('INSERT INTO seats (event_id, position, hierarchy, price) VALUES ($1, $2, $3, $4) RETURNING *', [event_id, position, hierarchy, price]);
        if (res.rows.length === 0) {
            throw new Error('Seat creation failed');
        }
        return res.rows[0];
    } catch (error) {
        console.error('Error creating seat:', error);
        throw error;
    }
}

exports.updateSeat = async (seatId, seatData) => {
    try {
        const { event_id, position, hierarchy, price } = seatData;
        const res = await db.query('UPDATE seats SET event_id = $1, position = $2, hierarchy = $3, price = $4 WHERE id = $5 RETURNING *', [event_id, position, hierarchy, price, seatId]);
        if (res.rows.length === 0) {
            throw new Error('Seat update failed');
        }
        return res.rows[0];
    } catch (error) {
        console.error('Error updating seat:', error);
        throw error;
    }
}

exports.deleteSeat = async (seatId) => {
    try {
        const res = await db.query('DELETE FROM seats WHERE id = $1 RETURNING *', [seatId]);
        if (res.rows.length === 0) {
            throw new Error('Seat deletion failed');
        }
        return res.rows[0];
    } catch (error) {
        console.error('Error deleting seat:', error);
        throw error;
    }
}

exports.sortAvailableSeatsByCheap = async (eventId) => {
    try {
        const res = await db.query('SELECT position, hierarchy, price FROM seats WHERE event_id = $1 AND status = "Available" ORDER BY price ASC', [eventId]);
        return res.rows;
    } catch (error) {
        console.error('Error sorting available seats by cheap:', error);
        throw error;
    }
}

exports.sortAvailableSeatsByExpensive = async (eventId) => {
    try {
        const res = await db.query('SELECT position, hierarchy, price FROM seats WHERE event_id = $1 AND status = "Available" ORDER BY price DESC', [eventId]);
        return res.rows;
    } catch (error) {
        console.error('Error sorting available seats by expensive:', error);
        throw error;
    }
}

exports.getAvailableSeatsByEventId = async (eventId) => {
    try {
        const res = await db.query('SELECT position, hierarchy, price, status FROM seats WHERE event_id = $1 AND status = "Available"', [eventId]);
        return res.rows;
    } catch (error) {
        console.error('Error fetching seats by event ID:', error);
        throw error;
    }
}

exports.getAvailableSeatsByEventIdAndHierarchy = async (eventId, hierarchy) => {
    try {
        const res = await db.query('SELECT position, hierarchy, price, status FROM seats WHERE event_id = $1 AND hierarchy = $2 AND status = "Available"', [eventId, hierarchy]);
        return res.rows;
    } catch (error) {
        console.error('Error fetching available seats by event ID and hierarchy:', error);
        throw error;
    }
}