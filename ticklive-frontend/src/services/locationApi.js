import api from './api';

export const fetchLocations = async () => {
    const response = await api.get('/location');
    return response.data;
}

export const fetchLocationById = async (locationId) => {
    const response = await api.get(`/location/${locationId}`);
    return response.data;
}

export const createLocation = async (data) => {
    const response = await api.post('/location/create', data);
    return response.data;
}

export const updateLocation = async (Id, data) => {
    const response = await api.put(`/location/update/${Id}`, data);
    return response.data;
}

export const deleteLocation = async (Id) => {
    const response = await api.delete(`/location/delete/${Id}`);
    return response.data;
}