import { connect } from "react-redux";
import Marked from "../components/Marked";
import { deleteTodoAction } from "../actions";
import { doMarkAction } from "../actions";
import { getApiTodosAction } from "../actions";
const mapStateToProps = (state) => {
  return {
    todoList: state.AddTodoReducer.todoList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodoAction(id)),
    doMark: (id) => dispatch(doMarkAction(id)),
    getApiTodos: (todos) => dispatch(getApiTodosAction(todos)),
  };
};
const MarkedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Marked);
export default MarkedContainer;
