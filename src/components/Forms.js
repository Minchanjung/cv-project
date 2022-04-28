import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
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
                <input id={this.props.taskInput}></input>
            </div>
        )
    }
}

export default Form;