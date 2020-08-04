import {connect} from 'react-redux';
import TodoList from '../components/TodoList'

const mapStateToProps=(state)=>{
    todos:state.todoList
}

const TodoListContainer = connect(
    mapStateToProps
)(TodoList)
export default TodoListContainer
