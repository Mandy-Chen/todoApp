export const addTodoAction = (text) => {
    return {
        type: "ADD_TODO",
        text: text,
    }
}
export const deleteTodoAction = (index) => {
    return {
        type: "DELETE_TODO",
        index: index,
    }
}