import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
});

export const getClientes = async () => {
  const response = await api.get('/clientes');
  return response.data;
};

export const createCliente = async (cliente) => {
  const response = await api.post('/clientes', cliente);
  return response.data;
};

export const updateCliente = async (id, cliente) => {
  const response = await api.put(`/clientes/${id}`, cliente);
  return response.data;
};

export const deleteCliente = async (id) => {
  const response = await api.delete(`/clientes/${id}`);
  return response.data;
};
