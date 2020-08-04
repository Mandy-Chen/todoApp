export const addTodoAction = (text) => {
    return {
        type: "ADD_TODO",
        text: text,
        mark:false
    }
}
export const deleteTodoAction = (index) => {
    return {
        type: "DELETE_TODO",
        index: index,
    }
}
export const doMarkAction = (index) => {
    return {
        type: "DO_MARK",
        index: index,
    }
}