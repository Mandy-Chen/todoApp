
const AddTodoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.text];
        case "DELETE_TODO":
            // return [...state, state.splice(action.index, 1)];
            return state.filter((item, index) => action.index !== index)

        default:
            return state;
    }
}
export default AddTodoReducer;