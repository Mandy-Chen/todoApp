const initState = {
    todoList: []
}
export default  (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
        // return [...state, state.concat({ text: action.text, mark: action.mark })]
        state = {todoList: [...state.todoList, { content: action.content, status: action.status }]}
        return state;
        case "DELETE_TODO":
            return {
                todoList: state.todoList.filter((item, index) => action.index !== index)
            }
        // return [...state, state.splice(action.index, 1)];
        // return state.filter((item, index) => action.index !== index)
        case "DO_MARK":
            return {
                todoList: state.todoList.map((item, index) => {
                    if (index === action.index) {
                        item.status = !item.status;
                    }
                    return item;
                })
            }
        // return [...state, state.map((item, index) => {
        //     if (index === action.index) {
        //         item.mark = !item.mark;
        //     }
        //     return item
        // })]
        default:
            return state;
    }
}
// export default AddTodoReducer;