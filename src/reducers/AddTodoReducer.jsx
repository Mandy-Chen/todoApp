const addTodoReducer = (state = {todoList: []}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {todoList: state.todoList.push(action.text)};
        default:
            return state;
    }

}
export default addTodoReducer;