import React from "react";
import "./todo.css";

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
        event.stopPropagation()
        let content = this.state.content;
        this.props.addTodo(content);
    };

    render() {
        return (
            <div className="todoInput">
                <input
                    type="text"
                    onChange={this.handleChange}
                   
                />
                <button onClick={this.submit}>add</button>
            </div>
        );
    }
}

export default TodoForm;
