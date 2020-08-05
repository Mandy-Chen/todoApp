import React from "react";
import Todo from "./Todo"
import './todo.css';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
  }
  }

  deleteText =(index)=> {
    this.props.deleteTodo(index);
    // console.log("qqqqq"+this.props)
  }
  handlerMark = (index) => {
    this.props.doMark(index)
  }

  render() {
    return (
      <div>
        {this.props.todoList.map((todo, index) =>
          <div className="todoList"   key={index}>
            <Todo
              todo={todo}
              marks={this.handlerMark}
              content={todo.content}
              index={index}
              key={index}
              delete={this.deleteText}
              status={todo.status}></Todo>
          </div>
        )}
      </div>
    )
  }
}

export default TodoList;
