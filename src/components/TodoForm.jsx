import React from "react";
import "./todo.css";
import { addTodos } from "../api/todoApi.js";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleChange = (event) => {
    let content = event.target.value;
    this.setState({
      content: content,
    });
  };

  submit = (event) => {
    event.stopPropagation();
    let content = this.state.content;
    addTodos(content).then((response) => {
      this.props.addTodo(content);
    });
    this.setState({
      content:""
    })
  };

  render() {
    return (
      <div className="todoInput">
        <input type="text" onChange={this.handleChange} value={this.state.content}/>
        <button onClick={this.submit}>add</button>
      </div>
    );
  }
}

export default TodoForm;
