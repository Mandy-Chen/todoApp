import axios from "axios";
const base = axios.create({
  baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
});
export const getTodos = () => {
  return base.get('/todos');
};
export const updateTodos = (id,status) => {
  return base.put(`/todos/${id}`);
};
export const addTodos = (content) => {
  return base.post('/todos',{content:content});
};
export const deleteTodos = () => {
  return base.delete(`/todos/${id}`);
};
