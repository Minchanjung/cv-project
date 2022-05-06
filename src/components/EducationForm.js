import React, { Component } from 'react';
import Inputs from './Input';

class EducationForm extends Component {
    render() {
        return (
            <form>
                <Inputs id="course" class="courseInput" label="Course/Program:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.course))}/>
                <Inputs id="university" class="universityInput" label="University:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.university))}/>
                <Inputs id="startDate" class="startDateInput" label="Start Date:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.startDate))}/>
                <Inputs id="endDate" class="endDateInput" label="End Date:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.endDate))}/>
                <Inputs id="educationDescription" class="educationDescriptionInput" label="Description:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.educationDescription))}/>
            </form>
        )
    }
}

export default EducationForm