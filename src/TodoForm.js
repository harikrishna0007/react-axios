import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            element: ""
        };
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value,
            element: event.target
        });
    }

    render() {
        return (
            <div className="form-group">
                <input type="text" className="form-control" onChange={this.handleChange} ></input>
                <button className="btn btn-primary btn-block" onClick={this.props.addTodo.bind(this, this.state.input, this.state.element)}>ADD TODO</button>
            </div>
        )
    }
};


export default TodoForm;