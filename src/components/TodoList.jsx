import React from "react";
import Todo from "./Todo"
import './todo.css';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    
  }
  deleteText(index) {
    this.props.deleteTodo(index);
  }

  render() {
    return (
      <div>
      
        {this.props.todos.map((todo, index) => (
          <div className="todoList" key={index} >
              <Todo text={todo} ></Todo>
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
