const AddTodoReducer = (state = {todoList: []}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action.text)
            state.todoList.push(action.text)
            return state;
            // return {todoList: state.todoList};
        default:
            return state;
    }

}
export default AddTodoReducer;