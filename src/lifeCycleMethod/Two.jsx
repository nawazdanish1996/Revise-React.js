import React, { Component } from 'react';

export class Two extends Component {
    constructor(){
        super();
        // console.log("Constructor");
        this.state={
            data: false,
        }
    }

    componentDidMount(){
        // console.log("componentDidMount");
        this.setState({data: true})
    }

  render() {
    // console.log("render");
    return (
      <div>
        <h1>ComponentDidMount life cycle</h1>
      </div>
    )
  }
}

export default Two