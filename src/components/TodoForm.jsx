import React from "react";
import './todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChange = (event) => {
        let text = event.target.value;
        this.setState({
            text: text
        })
    }

    submit = (event) => {
        let text = this.state.text;
        this.props.addTodo(text);
    }

    render() {
        return (
            <div className="todoInput">
                <input type="text" onChange={this.handleChange} value={this.state.text} />
                <button onClick={this.submit}>add</button>
              
            </div>
        )
    }
}


export default TodoForm