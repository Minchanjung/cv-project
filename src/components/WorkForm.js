import React, { Component } from 'react';
import Inputs from './Input';

/*class WorkForm extends Component {

    render() {
        return (
            <form>
                <Inputs id="companyInput" name="company" class="companyInput" label="Company:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.experience.map((item) => (item.company))}/>
                <Inputs id="positonInput" name="position" class="positionInput" label="Position:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.experience.map((item) => (item.position))}/>
                <Inputs id="workStartDateInput" name="startDate" class="startDateInput" label="Start Date:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.experience.map((item) => (item.startDate))}/>
                <Inputs id="workEndDateInput" name="endDate" class="endDateInput" label="End Date:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.experience.map((item) => (item.endDate))}/>
                <Inputs id="workDescriptionInput" name="workDescription" class="workDescriptionInput" label="Description:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.experience.map((item) => (item.workDescription))}/>
            </form>
        )
    };
}*/

const WorkForm = (props) => {
    return (
        <form>
            <Inputs id="companyInput" name="company" class="companyInput" label="Company:  " handleOnChange={props.onInputChange} val={props.experienceState.company}/>
            <Inputs id="positonInput" name="position" class="positionInput" label="Position:  " handleOnChange={props.onInputChange} val={props.experienceState.position}/>
            <Inputs id="workStartDateInput" name="startDate" class="startDateInput" label="Start Date:  " handleOnChange={props.onInputChange} val={props.experienceState.startDate}/>
            <Inputs id="workEndDateInput" name="endDate" class="endDateInput" label="End Date:  " handleOnChange={props.onInputChange} val={props.experienceState.endDate}/>
            <Inputs id="workDescriptionInput" name="workDescription" class="workDescriptionInput" label="Description:  " handleOnChange={props.experienceState.workDescription}/>
        </form>
    )
}

export default WorkForm;