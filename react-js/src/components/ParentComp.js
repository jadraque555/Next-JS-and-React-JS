import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import PromiseTimers from 'promise-timers' 

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Jayson Jadraque"
        }
    }

    componentDidMount() {
        PromiseTimers.setInterval(2000).then(function (args) {
            this.setState({
                name: 'Jayson Jadraque'
            })
        });
    }
  render() {
    return (
      <div>
          Parent Component
          <RegComp name={this.state.name} />
          <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp