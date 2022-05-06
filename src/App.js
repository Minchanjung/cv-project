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
      description: ''},
      experience: [{company: '', position: '', startDate: '', endDate: '', workDescription: ''}],
      education: [{course: '', university: '', startDate: '', endDate: '', educationDescription: ''}]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    console.log(e.target)
    this.setState({
        [e.target.id]: e.target.value,
    });
  }

  handleChangePersonal = (e) => {
    const {id, value} = e.target;

    this.setState((prevState) => ({
      ...prevState, 
      personalDetails: {
        ...prevState.personalDetails, 
        [id]: value
      }
    }))
  }

  handleInputArrayChange = (property, index) => {
    return (e) => {
      const { id, value } = e.target;

      this.setState((prevState) => ({
        ...prevState,
        [property]: [
          ...prevState[property].slice(0, index),
          {
            ...prevState[property][index],
            [id]: value
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
