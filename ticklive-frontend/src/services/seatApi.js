import api from './api'

export const fetchSeats = async () => {
    const response = await api.get('/seat');
    return response.data;
}

export const fetchSeatById = async (seatId) => {
    const response = await api.get(`/seat/${seatId}`);
    return response.data;
};

export const createSeat = async (data) => {
    const response = await api.post('/seat/create', data);
    return response.data;
}

export const updateSeat = async (id, data) => {
    const response = await api.put(`/seat/update/${id}`, data);
    return response.data;
}

export const deleteSeat = async (id) => {
    const response = await api.delete(`/seat/delete/${id}`);
    return response.data;
};