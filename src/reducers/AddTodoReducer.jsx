const initState = {
  todoList: [],
};
export default (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = {
        todoList: [
          ...state.todoList,
          {
            content: action.content,
            status: action.status,
            id: state.todoList.length,
          },
        ],
      };
      return state;
    case "DELETE_TODO":
      return {
        todoList: state.todoList.filter((item) => action.id != item.id),
      };plice(action.index, 1)];
    case "DO_MARK":
      return {
        todoList: state.todoList.map((item) => {
          if (item.id === action.id) {
            item.status = !item.status;
          }
          return item;
        }),
      };
    case "GET_API_TODOS":
      return {
        todoList: action.todos,
      };
    default:
      return state;
  }
};
