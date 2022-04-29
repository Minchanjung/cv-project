import React, { Component } from 'react';
import uniqid from 'uniqid';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {text: '', id: uniqid()},
            tasks: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id
            }
        });
    }

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task)
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitTask}>
                <Inputs taskInput="nameInput" label="Full Name" changeFunc={this.handleChange} value={this.task.text}/>
                <button className='submitBtn' type="submit">Add</button>
            </form>
        )
    }
}

class Inputs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.taskInput}>{this.props.label}</label>
                <input id={this.props.taskInput} onChange={this.props.changeFunc} value={this.props.value} type='text'></input>
            </div>
        )
    }
}

export default Form;