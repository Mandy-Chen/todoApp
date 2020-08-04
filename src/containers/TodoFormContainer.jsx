import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm'
import { addTodoAction } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => { dispatch(addTodoAction(text)) },
})

const TodoFormContainer = connect(
    null,
    mapDispatchToProps
)(TodoForm)
export default TodoFormContainer
