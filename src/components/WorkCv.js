import React, { Component } from 'react';

class WorkRender extends Component {
    render() {
        return (
            <div id="workInfoContainer">
                <div id="workHeader">
                    <div id="position">{this.props.rootState.experience.map((item) => (item.position))}</div>
                    <div id="right">
                        <div id="company">{this.props.rootState.experience.map((item) => (item.company))} | </div>
                        <div id="time">
                            {this.props.rootState.experience.map((item) => (item.startDate))} - {this.props.rootState.experience.map((item) => (item.endDate))}
                        </div>
                    </div>
                </div>
                <div id="mainBody">{this.props.rootState.experience.map((item) => (item.workDescription))}</div>
            </div>
        )
    }
}

export default WorkRender;