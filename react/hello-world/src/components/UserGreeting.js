import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
        };
    }
  render() {
    // if(this.state.isLoggedIn){
    //     return <h1>Welcome Julie! Logged in.</h1>;
    // } else {
    //     return <h1>Welcome Guest. Logged out.</h1>;
    let message;
    if(this.state.isLoggedIn){
        message = <div>your message here</div>
        return <div>{message}</div>;
    
    }
    }
}

export default UserGreeting;