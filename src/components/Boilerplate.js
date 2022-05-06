import React, { Component } from 'react';
import Form from './Forms';
import WorkForm from './WorkForm';
import '../styles/Boilerplate.css';

class Boilerplate extends Component {

    render() {
        return (
            <div id="formContainer">
                <h1 id="personalInfo">Personal Details</h1>
                <Form onInputChange={this.props.onInputChangePersonal} rootState={this.props.rootState}/>
                <h1 id="workInfo">Work Experience</h1>
                <div id="workFormContainer">
                    <WorkForm onInputChange={this.props.onInputChange} rootState={this.props.rootState}/>
                </div>
                
                <button id="newWorkTemplate">Add</button>
            </div>
        )
    }
}

export default Boilerplate;