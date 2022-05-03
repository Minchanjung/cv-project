import React, { Component } from 'react';

class Inputs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} className={this.props.class} onChange={this.props.handleOnChange} value={this.props.val} type='text'></input>
            </div>
        )
    }
}

export default Inputs