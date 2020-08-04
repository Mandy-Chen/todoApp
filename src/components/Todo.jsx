import React from "react";
import './todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mark: false,
          }
    }
    doMark(index) {
        //拿到某个数据 this.props.todos[index]
    //    console.log(this.props.todos[index])
       console.log("this"+index)
        this.setState({
          mark: !this.state.mark
      })
      }
    render() {
        return (
            <div className={this.state.mark ? "todoMark" : "todoUnmark"} 
            onClick={this.doMark.bind(this)}>{this.props.text}
            </div>
        )
    }
}

export default Todo