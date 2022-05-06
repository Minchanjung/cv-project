import React, { Component } from 'react';

class EducationRender extends Component {
    render() {
        return (
            <div id="workInfoContainer">
                <div id="workHeader">
                    <div id="position">{this.props.rootState.education.map((item) => (item.course))}</div>
                    <div id="right">
                        <div id="company">{this.props.rootState.education.map((item) => (item.university))} | </div>
                        <div id="time">
                            {this.props.rootState.education.map((item) => (item.startDate))} - {this.props.rootState.experience.map((item) => (item.endDate))}
                        </div>
                    </div>
                </div>
                <div id="mainBody">{this.props.rootState.education.map((item) => (item.educationDescription))}</div>
            </div>
        )
    }
}

export default EducationRender;