import React, { Component } from 'react';
import './trainersSkills.css';
import Skills from './Skills';
import Middle from './Middle';
class App extends Component {
  render() {
    return (
        <div>
        <Skills/>
        <Middle/>
        </div>
    );
  }
}

export default App;
