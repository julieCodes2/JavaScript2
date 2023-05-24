import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler(){
    alert("Class button was clicked");
    console.log("Class button clicked has been logged");
  }
  
    render() {
    return (
      <>
      <button onClick={this.clickHandler}>ClassClick</button>
      </>
    );
  }
}

export default ClassClick;