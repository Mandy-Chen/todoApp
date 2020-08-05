const initState = {
    todoList: []
}
export default  (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
        // return [...state, state.concat({ text: action.text, mark: action.mark })]
        state = {todoList: [...state.todoList, { content: action.content, status: action.status ,id:state.todoList.length}]}
        return state;
        case "DELETE_TODO":
            return {
                todoList: state.todoList.filter((item, id) => action.id !== id)
            }
        // return [...state, state.splice(action.index, 1)];
        // return state.filter((item, index) => action.index !== index)
        case "DO_MARK":
            return {
                todoList: state.todoList.map((item, id) => {
                    if (id === action.id) {
                        item.status = !item.status;
                    }
                    return item;
                })
            }
            case "GET_API_TODOS":
                return{
                    todoList:action.todos
                }
        default:
            return state;
    }
}
// export default AddTodoReducer;