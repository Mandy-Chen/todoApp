import { connect } from 'react-redux';
import TodoList from '../components/TodoList'
import { deleteTodoAction } from '../actions'
import {doMarkAction} from '../actions'
const mapStateToProps = (state) => {
    return {
        todoList: state.AddTodoReducer.todoList
    }
}
const mapDispatchToProps = (dispatch) => 
    {
        return {deleteTodo: (index) =>  dispatch(deleteTodoAction(index)),
        doMark:(index)=>dispatch(doMarkAction(index))}
    }

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default TodoListContainer
