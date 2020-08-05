export const addTodoAction = (content) => {
  console.log("增加");
  return {
    type: "ADD_TODO",
    content: content,
    status: false,
  };
};
export const deleteTodoAction = (index) => {
  return {
    type: "DELETE_TODO",
    index: index,
  };
};
export const doMarkAction = (index) => {
  return {
    type: "DO_MARK",
    index: index,
  };
};
