import React, { Component } from 'react';
import '../styles/EducationCv.css'

class EducationRender extends Component {
    render() {
        return (
            <div id="educationInfoContainer">
                <div id="educationInfo">
                    <div id="courseRender">{this.props.rootState.education.map((item) => (item.course))}</div>
                    <div id="right">
                        <div id="universityRender">{this.props.rootState.education.map((item) => (item.university))} | </div>
                        <div id="educationTimeRender">
                            {this.props.rootState.education.map((item) => (item.startDate))} - {this.props.rootState.experience.map((item) => (item.endDate))}
                        </div>
                    </div>
                </div>
                <div id="educationBody">{this.props.rootState.education.map((item) => (item.educationDescription))}</div>
            </div>
        )
    }
}

export default EducationRender;