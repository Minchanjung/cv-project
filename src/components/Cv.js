import React, { Component } from 'react';
import '../styles/Cv.css';
import EducationRender from './EducationCv';
import WorkRender from './WorkCv';

class CvRender extends Component {

    render() {
        return (
            <div id="cvContainer">
                <div id="header">
                    <div>
                        <h1 id="name"><b>{this.props.rootState.personalDetails.name}</b></h1>
                        <h2 id="jobTitle">{this.props.rootState.personalDetails.title}</h2>
                    </div>
                    
                    <div id="contactsContainer">
                        <div>{this.props.rootState.personalDetails.phone}</div>
                        <div>{this.props.rootState.personalDetails.email}</div>
                        <div>{this.props.rootState.personalDetails.location}</div>
                    </div>
                </div>
                <div id="line1"></div>
                <div id="descriptionContainer">
                    <p id="description">{this.props.rootState.personalDetails.description}</p>
                </div>
                <h2 id="workHeader">Work Experience</h2>
                <div id="workContainer">
                    <WorkRender rootState={this.props.rootState}/>
                </div>
                <h2 id="educationHeader">Education</h2>
                <div id="educationContainer">
                    <EducationRender rootState={this.props.rootState}/>
                </div>
            </div>
        )
    }
}

export default CvRender;