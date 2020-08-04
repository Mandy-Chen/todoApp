const DeleteTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "DELETE_TODO":
            return [...state, action.todos];
        default:
            return state;
    }
}
export default DeleteTodoReducer;