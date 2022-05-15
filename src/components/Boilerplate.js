import React, { Component } from 'react';
import Form from './Forms';
import WorkForm from './WorkForm';
import '../styles/Boilerplate.css';
import EducationForm from './EducationForm';

/*class Boilerplate extends Component {

    render() {
        return (
            <div id="formContainer">
                <h1 id="personalInfo">Personal Details</h1>
                <Form onInputChange={this.props.onInputChangePersonal} rootState={this.props.rootState}/>
                <h1 id="workInfo">Work Experience</h1>
                <div id="workFormContainer">
                    <WorkForm onInputChange={this.props.onInputChange('experience', 0)} rootState={this.props.rootState}/>
                </div>
                <h1 id="educationInfo">Education</h1>
                <div id="educationFormContainer">
                    <EducationForm onInputChange={this.props.onInputChange('education', 0)} rootState={this.props.rootState}/>
                </div>
            </div>
        )
    }
}*/

const Boilerplate = (props) => {
    return (
        <div id="formContainer">
            <h1 id="personalInfo">Personal Details</h1>
            <Form onInputChange={props.onInputChange(props.personalState, props.setPersonal)} personalState={props.personalState} setPersonal={props.setPersonal}/>
            <h1 id="workInfo">Work Experience</h1>
            <div id="workFormContainer">
                <WorkForm onInputChange={props.onInputChange(props.experienceState, props.setExperience)} experienceState={props.experienceState} setExperience={props.setExperience}/>
            </div>
            <h1 id="educationInfo">Education</h1>
            <div id="educationFormContainer">
                <EducationForm onInputChange={props.onInputChange(props.educationState, props.setEducation)} educationState={props.educationState} setEducation={props.setEducation}/>
            </div>
        </div>
    )
}

export default Boilerplate;