// eventApi.js
import api from './api';

export const fetchEvents = async () => {
  const response = await api.get('/event');
  return response.data;
}

export const fetchEventById = async (eventId) => {
  const response = await api.get(`/event/${eventId}`);
  return response.data;
};

// You can add more related endpoints here later:
// export const createEvent = async (data) => api.post('/event', data);
export const createEvent = async (data) => {
  const response = await api.post('/event/create', data)
  return response.data;
}
// export const updateEvent = async (id, data) => api.put(`/event/${id}`, data);

export const updateEvent = async (id, data) => {
  const response = await api.put(`/event/update/${id}`, data)
  return response.data;
}

export const deleteEvent = async (id) => {
  const response = await api.delete(`/event/delete/${id}`);
  return response.data;
};

export const fetchEventsByDate = async (date) => {
  const response = await api.get(`/event/${date}`);
  return response.data;
}

export const fetchEventsByName = async (name) => {
  const response = await api.get(`/event/${name}`);
  return response.data;
}