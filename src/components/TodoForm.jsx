import React from "react";


class TodoForm extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    handleChange(event) {
        let text = event.target.value;
        this.setState ({
            text: text
        })

    }

    submit() {
        let text=this.state.text;
        this.props.addTodo(text);
    }

    render() {

        return (
            <form onSubmit="submit">
                <input type="text" onChange={this.handleChange} value={this.state.text}/>
                <button type="submit">add</button>
            </form>
        )
    }
}


export default TodoForm