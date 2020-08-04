import React from "react";
import Todo from "./Todo"
import './todo.css';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../actions'
import { doMarkAction } from '../actions'
import { addTodoAction } from '../actions'
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
  }
  }

  deleteText(index) {
    this.props.deleteTodo(index);
  }
  handlerMark = (index) => {
    this.props.doMark(index)
  }
  handleChange = (event) => {
    let text = event.target.value;
    this.setState({
      text: text
    })
  }

  submit = (event) => {
    let text = this.state.text;
    this.props.addTodo(text);
  }
  render() {
    console.log(this.props.todoList + "sssss")
    return (
      <div>
        <div className="todoInput">
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.submit}>add</button>

        </div>
        {this.props.todoList.map((todo, index) =>
          <div className="todoList"  >
            <Todo
              todo={todo}
              marks={this.handlerMark}
              text={todo.text}
              index={index}
              key={index}
              delete={this.deleteText}
              mark={todo.mark}></Todo>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}
const mapDispatchToProps = (dispatch) => (
  {
    deleteTodo: (index) => { dispatch(deleteTodoAction(index)) },
    doMark: (index) => { dispatch(doMarkAction(index)) },
    addTodo: (text) => { dispatch(addTodoAction(text)) },
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
// export default TodoList;
