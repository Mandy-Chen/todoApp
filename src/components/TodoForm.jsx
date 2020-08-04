import React from "react";


class TodoForm extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChange =(event) =>{
        let text = event.target.value;
        this.setState ({
            text: text
        })
    }

    submit=(event)=> {
        // event.preventDefault()
        let text=this.state.text;
        this.props.addTodo(text);
    }

    render() {

        return (
            <div>
            {/* // <form> */}
                <input type="text" onChange={this.handleChange} value={this.state.text}/>
                <button onClick = {this.submit}>add</button>
            {/* // </form> */}
            </div>
        )
    }
}


export default TodoForm