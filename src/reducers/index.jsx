import { combineReducers } from 'redux';
import AddTodoReducer from './AddTodoReducer'
import DeleteTodoReducer from './DeleteTodoReducer'

export const reducer = combineReducers(
    {
        AddTodoReducer,
        DeleteTodoReducer
    }
)


