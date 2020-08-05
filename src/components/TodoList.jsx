import React from "react";
import Todo from "./Todo";
import "./todo.css";
import { getTodos } from "../api/todoApi.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  componentDidMount() {
      getTodos().then((response)=> {
        console.log("responseData",response.data)
        this.props.getApiTodos(response.data)
      })
  }

  deleteText = (id) => {
    this.props.deleteTodo(id);
    // console.log("qqqqq"+this.props)
  };
  handlerMark = (id) => {
    this.props.doMark(id);
  };

  render() {
    return (
      <div>
        {this.props.todoList.map((todo, id) => (
          <div className="todoList" key={id}>
            <Todo
              todo={todo}
              marks={this.handlerMark}
              content={todo.content}
              id={todo.id}
              key={id}
              delete={this.deleteText}
              status={todo.status}
            ></Todo>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
