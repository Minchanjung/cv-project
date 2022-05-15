import React, { Component } from 'react';
import Inputs from './Input';

/*class EducationForm extends Component {
    render() {
        return (
            <form>
                <Inputs id="courseInput" name="course" class="courseInput" label="Course/Program:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.course))}/>
                <Inputs id="universityInput" name="university" class="universityInput" label="University:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.university))}/>
                <Inputs id="educationStartDateInput" name="startDate" class="startDateInput" label="Start Date:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.startDate))}/>
                <Inputs id="educationEndDateInput" name="endDate" class="endDateInput" label="End Date:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.endDate))}/>
                <Inputs id="educationDescriptionInput" name="educationDescription" class="educationDescriptionInput" label="Description:  " handleOnChange={this.props.onInputChange} val={this.props.rootState.education.map((item) => (item.educationDescription))}/>
            </form>
        )
    }
}*/

const EducationForm = (props) => {
    return (
        <form>
            <Inputs id="courseInput" name="course" class="courseInput" label="Course/Program:  " handleOnChange={props.onInputChange} val={props.educationState.course}/>
            <Inputs id="universityInput" name="university" class="universityInput" label="University:  " handleOnChange={props.onInputChange} val={props.educationState.university}/>
            <Inputs id="educationStartDateInput" name="startDate" class="startDateInput" label="Start Date:  " handleOnChange={props.onInputChange} val={props.educationState.startDate}/>
            <Inputs id="educationEndDateInput" name="endDate" class="endDateInput" label="End Date:  " handleOnChange={props.onInputChange} val={props.educationState.endDate}/>
            <Inputs id="educationDescriptionInput" name="educationDescription" class="educationDescriptionInput" label="Description:  " handleOnChange={props.onInputChange} val={props.educationState.educationDescription}/>
        </form>
    )
}

export default EducationForm