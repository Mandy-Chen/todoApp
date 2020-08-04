import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>
      return (
      {this.props.todos.map((todo, index) => (
        <Todo key={index} text={todo}></Todo>
      ))}
      )
    </div>;
  }
}

export default TodoList;
