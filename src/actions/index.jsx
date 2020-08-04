export const addTodoAction = (text) => {
    return {
        type: "ADD_TODO",
        text: text,
    }
}