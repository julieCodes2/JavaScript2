import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:true,
        };
    }
  render() {
    // 4 approaches to conditionally render UI in react, ef else; element variables; conditional ternary operator; and the short circuit operator; conditonal and short circuit operator most recommended
    // if(this.state.isLoggedIn){
    //     return <h1>Welcome Julie! Logged in.</h1>;
    // } else {
    //     return <h1>Welcome Guest. Logged out.</h1>;

    //start commenting out the second approach
    // let message;
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Julie</div>
        
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    //end of commenting out the second approach

    //now this one is the ternary operator approach. This is a simpler method
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Julie</div> :
    //     <div> Welcome Guest</div>
    // )
    //the fourth approach called the circuit operator approach. When you want to render either something or nothing. 
    return this.state.isLoggedIn && <div>Welcome Julie</div>
    }
    }


export default UserGreeting;