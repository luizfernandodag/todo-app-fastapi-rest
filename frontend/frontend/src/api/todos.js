import axios from 'axios'

const API = "http://localhost:8000"

export const getTodos = () => axios.get(`${API}/todos`);
export const createTodo = (todo) => axios.post(`${API}/todos`, todo);
export const updateTodo = (id, todo) => axios.put(`${API}/todos/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API}/todos/${id}`);