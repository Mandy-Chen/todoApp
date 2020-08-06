import axios from "axios";
const base = axios.create({
  baseURL: "https://5e9ec500fb467500166c4658.mockapi.io",
});
export const getTodos = () => {
  return base.get('/todos');
};
export const updateTodos = (id,status) => {
  return base.put(`/todos/${id}`,{status:status});
};
export const addTodos = (content) => {
  return base.post('/todos',{content:content});
};
export const deleteTodos = (id) => {
  return base.delete(`/todos/${id}`);
};
