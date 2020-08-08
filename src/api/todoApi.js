import axios from "axios";
const base = axios.create({
  baseURL: "http://localhost:8081",
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
