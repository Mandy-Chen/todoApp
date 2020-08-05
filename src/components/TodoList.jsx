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

  deleteText =(id)=> {
    this.props.deleteTodo(id);
    // console.log("qqqqq"+this.props)
  }
  handlerMark = (id) => {
    this.props.doMark(id)
  }

  render() {
    return (
      <div>
        {this.props.todoList.map((todo, id) =>
          <div className="todoList"   key={id}>
            <Todo
              todo={todo}
              marks={this.handlerMark}
              content={todo.content}
              id={todo.id}
              key={id}
              delete={this.deleteText}
              status={todo.status}></Todo>
          </div>
        )}
      </div>
    )
  }
}

export default TodoList;
