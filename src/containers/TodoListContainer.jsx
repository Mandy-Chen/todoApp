import { connect } from 'react-redux';
import TodoList from '../components/TodoList'
import { deleteTodoAction } from '../actions'
import {addTodoAction} from '../actions'
const mapStateToProps = (state) => {
    return {
        todos: state.AddTodoReducer
    }
}
const mapDispatchToProps = (dispatch) => (
    {
        deleteTodo: (index) => { dispatch(deleteTodoAction(index)) },
    })

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default TodoListContainer
