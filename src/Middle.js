import React, { Component } from 'react';
import Subjects from './Subjects';

class Middle  extends Component {
    constructor() {
      super();
      this.state = {
          showSubjects: ""
      }
    
    
    this.handleClick = () => this.setState({ 
        showSubjects: <Subjects/>
    }); 
    }
    
    
    render() {
    return (
      <div id="firstBox">
            <p>Available Trainers:</p>
        <div id="inner">
            <p id="listHead">ID | Trainer Name | Specialty</p>
            <ol>
            
                <li><input type="button" value="Joe bloggs"/></li>
                <li><input type="button" value="Ryan Giggs"/></li>
                <li><input type="button" value="Floyd Mayweather"/></li>
                <li><input type="button" value="Rocky Balboa"/></li>
                
            </ol>
            
            <button id="showAll" onClick={this.handleClick}>View All Skills</button>    
            <p>{this.state.showSubjects}</p>
        
        </div>
    </div>
   
    );
  }
}


export default Middle;