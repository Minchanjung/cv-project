import React, { Component } from 'react';
import Inputs from './Input';
//import uniqid from 'uniqid';

class Form extends Component {

    render() {
        return (
            <form>
                <Inputs id="nameInput" name="name" class="nameInput" label="Full Name: " handleOnChange={this.props.onInputChange} val={this.props.rootState.personalDetails.name}/>
                <Inputs id="titleInput" name="title" class="titleInput" label="Title: " handleOnChange={this.props.onInputChange} val={this.props.rootState.personalDetails.title}/>
                <Inputs id="phoneInput" name="phone" class="phoneInput" label="Phone: " handleOnChange={this.props.onInputChange} val={this.props.rootState.personalDetails.phone}/>
                <Inputs id="emailInput" name="email" class="emailInput" label="Email: " handleOnChange={this.props.onInputChange} val={this.props.rootState.personalDetails.email}/>
                <Inputs id="locationInput" name="location" class="locationInput" label="Location: " handleOnChange={this.props.onInputChange} val={this.props.rootState.personalDetails.location}/>
                <label htmlFor="description">Description: </label>
                <textarea id="descriptionInput" name="description" className="descriptionInput" onChange={this.props.onInputChange} value={this.props.rootState.personalDetails.description}></textarea>
            </form>
        )
    }
}

export default Form;