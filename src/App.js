import React, { Component } from 'react';
import './App.css';
import Boilerplate from './components/Boilerplate';
import CvRender from './components/Cv';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Boilerplate/>

        <CvRender/>
      </div>
    )
  }
}

export default App;
