import React, { Component } from 'react';

class Eventbind extends Component {
  constructor(props){
    super(props);
  

this.state = {
    message: "hello",
};
this.clickHandler = this.clickHandler.bind(this);
}
  
clickHandler() {
    this.setState({
        message: "Goodbye",
    });
    console.log(this);
}
    render() {
    return (
      <div>
      <h1>{this.state.message}</h1>
      <button onClick={this.clickHandler}>Bind Event</button>
      </div>
    );
  }
}

export default Eventbind;