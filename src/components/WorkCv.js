import React, { Component } from 'react';
import '../styles/WorkCv.css'

class WorkRender extends Component {
    render() {
        return (
            <div id="workInfoContainer">
                <div id="workInfo">
                    <div id="positionRender">{this.props.rootState.experience.map((item) => (item.position))}</div>
                    <div id="right">
                        <div id="companyRender">{this.props.rootState.experience.map((item) => (item.company))} | </div>
                        <div id="educationTimeRender">
                            {this.props.rootState.experience.map((item) => (item.startDate))} - {this.props.rootState.experience.map((item) => (item.endDate))}
                        </div>
                    </div>
                </div>
                <div id="workBody">{this.props.rootState.experience.map((item) => (item.workDescription))}</div>
            </div>
        )
    }
}

export default WorkRender;