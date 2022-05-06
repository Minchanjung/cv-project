import React, { Component } from 'react';
import './App.css';
import Boilerplate from './components/Boilerplate';
import CvRender from './components/Cv';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalDetails: {name: 'Minchan Jung', 
      title: 'Software Engineer', 
      phone: '3018143358', 
      email: 'minchanjung1@gmail.com', 
      location: 'Bethesda, Maryland', 
      description: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'},
      experience: [{company: 'A Software Company', position: 'Software Engineer', startDate: '2020', endDate: 'Present', workDescription: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.'}],
      education: [{course: 'CS50 Intro to Computer Science', university: 'Harvard University', startDate: '2016', endDate: '2017', educationDescription: 'al;sjf;alsj  asljf;sdvdl;shf lhafslhkvshaehwi slhkhvhweihew'}]
    }

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleInputArrayChange = this.handleInputArrayChange.bind(this);
  }

  handleChangePersonal = (e) => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      ...prevState, 
      personalDetails: {
        ...prevState.personalDetails, 
        [name]: value
      }
    }))
  }

  handleInputArrayChange = (property, index) => {
    return (e) => {
      const { name, value } = e.target;

      this.setState((prevState) => ({
        ...prevState,
        [property]: [
          ...prevState[property].slice(0, index),
          {
            ...prevState[property][index],
            [name]: value
          },
          ...prevState[property].slice(index + 1)
        ]
      }));
    };
  };

  render() {
    return(
      <div id="container">
        <Boilerplate onInputChangePersonal={this.handleChangePersonal} onInputChange={this.handleInputArrayChange} rootState={this.state}/>

        <CvRender rootState={this.state}/>
      </div>
    )
  }
}

export default App;
