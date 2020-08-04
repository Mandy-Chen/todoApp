import React from "react";
import Todo from "./Todo"

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return(
    <div>
    {/* {this.props.todos.map((todo, index) => (
    <Todo key={index} text={todo}></Todo>
  ))} */}
</div>
   )
  }
}

export default TodoList;
