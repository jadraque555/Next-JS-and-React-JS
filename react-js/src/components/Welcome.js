import React, { Component } from 'react'

class Welcome extends Component {
        
    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing!"
        })
    }

    render() {
        const {name, heroname} = this.props
        // const {state1, state2} = this.state
        // return <h1>Awh Okie {this.props.name}</h1>
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}


export default Welcome