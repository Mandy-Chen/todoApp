export const addTodoAction = (content) => {
  console.log("增加");
  return {
    type: "ADD_TODO",
    content: content,
    status: false,
    id:0
  };
};
export const deleteTodoAction = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};
export const doMarkAction = (id) => {
  return {
    type: "DO_MARK",
    id: id,
  };
};
