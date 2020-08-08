import React from "react";
import './todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
class Todo extends React.Component {
 
    render() {
        return (
            <div>
                <div className={this.props.status ? "todoMark" : "todoUnmark"}
                    onClick={()=> this.props.marks(this.props.id, !this.props.status)}>{this.props.content}
                </div>
                <button className="delete_btn" onClick={() => this.props.delete(this.props.id)} >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <div className="clear"></div>
            </div>
        )
    }
}

export default Todo