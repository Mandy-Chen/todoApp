import React from "react";
import './todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
class Todo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div className={this.props.mark ? "todoMark" : "todoUnmark"}
                    onClick={this.props.marks(this.props.index, this.props.mark)}>{this.props.text}
                </div>
                <button onClick={this.props.delete(this.props.index)} >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default Todo