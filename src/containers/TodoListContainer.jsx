import { connect } from 'react-redux';
import TodoList from '../components/TodoList'
import { deleteTodoAction } from '../actions'
const mapStateToProps = (state) => {
    return {
        todos: state.AddTodoReducer
    }
}
const mapDispatchToProps = (dispatch) => (
    {
        deleteTodo: (todos) => { dispatch(deleteTodoAction(todos)) },
    })

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default TodoListContainer
