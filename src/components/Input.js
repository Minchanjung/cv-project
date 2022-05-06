import React, { Component } from 'react';

class Inputs extends Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input name={this.props.name} id={this.props.id} className={this.props.class} onChange={this.props.handleOnChange} value={this.props.val} type='text'></input>
            </div>
        )
    }
}

export default Inputs