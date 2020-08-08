import React from "react";
import Todo from "./Todo";
import "./todo.css";
import { getTodos } from "../api/todoApi.js";
import { deleteTodos } from "../api/todoApi.js";
import { updateTodos } from "../api/todoApi.js";
class AllTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    getTodos().then((response) => {
      this.props.getApiTodos(response.data);
    });
  }

  deleteText = (id) => {
    deleteTodos(id).then((response) => {
    });
    this.props.deleteTodo(id);
  };
  handlerMark = (id, status) => {
    this.props.doMark(id);
    updateTodos(id, status).then((response) => {
    });
  };

  render() {
    return (
      <div className="main">
        {this.props.todoList.map((todo, id) => (
          <div className="todo_content" key={id}>
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
export default AllTodoList;
