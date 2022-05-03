import React, { Component } from 'react';
import Inputs from './Input';

class WorkForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <Inputs id="company" class="companyInput" label="Company:  " handleOnChange={this.props.onInputChange('experience', 0)} val={this.props.rootState.experience.map((item) => (item.company))}/>
                <Inputs id="position" class="positionInput" label="Position:  " handleOnChange={this.props.onInputChange('experience', 0)} val={this.props.rootState.experience.map((item) => (item.position))}/>
                <Inputs id="startDate" class="startDateInput" label="Start Date:  " handleOnChange={this.props.onInputChange('experience', 0)} val={this.props.rootState.experience.map((item) => (item.startDate))}/>
                <Inputs id="endDate" class="endDateInput" label="End Date:  " handleOnChange={this.props.onInputChange('experience', 0)} val={this.props.rootState.experience.map((item) => (item.endDate))}/>
                <Inputs id="workDescription" class="workDescriptionInput" label="Description:  " handleOnChange={this.props.onInputChange('experience', 0)} val={this.props.rootState.experience.map((item) => (item.workDescription))}/>
            </form>
        )
    };
}

export default WorkForm;