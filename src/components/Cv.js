import React, { Component } from 'react';
import '../styles/Cv.css';

class CvRender extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="cvContainer">
                <div id="header">
                    <h1 id="name">{this.props.rootState.personalDetails.name}</h1>
                    <h2 id="jobTitle">{this.props.rootState.personalDetails.title}</h2>
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
            </div>
        )
    }
}

export default CvRender;