import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm'
import { addTodoAction } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {addTodo: (content) => dispatch(addTodoAction(content)) }
}

const TodoFormContainer = connect(
    null,
    mapDispatchToProps
)(TodoForm)
export default TodoFormContainer
