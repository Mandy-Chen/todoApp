export const addTodoAction = (text) => {
    return {
        type: "ADD_TODO",
        text: text,
    }
}
export const deleteTodoAction = (todos) => {
    return {
        type: "DELETE_TODO",
        todos: todos,
    }
}