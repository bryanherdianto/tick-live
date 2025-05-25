import api from './api';

export const fetchTickets = async () => {
    const response = await api.get('/ticket');
    return response.data;
}

export const fetchTicketById = async (ticketId) => {
    const response = await api.get(`/ticket/${ticketId}`);
    return response.data;
};

export const createTicket = async (data) => {
    const response = await api.post('/ticket/create', data);
    return response.data;
}

export const updateTicket = async (id, data) => {
    const response = await api.put(`/ticket/update/${id}`, data);
    return response.data;
}

export const deleteTicket = async (id) => {
    const response = await api.delete(`/ticket/delete/${id}`);
    return response.data;
};