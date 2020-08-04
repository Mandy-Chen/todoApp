import React from "react";
import Todo from "./Todo"
import './todo.css';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: []
    }
  }
  deleteText(index) {
    let todoList = this.props.todos;
    // todoList.splice(index, 1);
    this.props.deleteTodo(index);
    let list=
    this.setState={
      index:this.state.index.push(index)
    }
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <div className="todoList" key={index} >
            <Todo text={todo}></Todo>
            <button onClick={this.deleteText.bind(this, index)} >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default TodoList;
