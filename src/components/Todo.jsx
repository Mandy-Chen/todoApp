import React from "react";
import './todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="todo">{this.props.text}
                <div>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Todo