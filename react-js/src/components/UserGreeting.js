import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

  render() {

    return this.state.isLoggedIn && <div>Welcome Jayson</div>

    // return this.state.isLoggedIn ? (<div>Welcome Jayson</div>) : (<div>Welcome Guest</div>)
    

    //   let message;

    //   if(this.state.isLoggedIn) {
    //     message = <div>Welcome Jayson</div>
    //   } else {
    //     message =  <div>Welcome Guest</div>
    //   }

    //   return message
    // return (
    //     <>
    //         <div>Welcome Jayson</div>
    //         <div>Welcome Guest</div>
    //     </>
    // )
  }
}

export default UserGreeting