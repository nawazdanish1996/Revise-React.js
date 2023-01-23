import React, { Component } from 'react'

class Three extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.state={
            show: false
        }
    }

  render() {
    // console.log("render");

    return (
      <div>
        <h1>ComponentWillUnmount life cycle</h1>
        {this.state.show?<Child />: null}
        <button onClick={()=> {this.setState({show: !this.state.show})}}>Toggle Child</button>
      </div>
    )
  }
}

export class Child extends Component{
    componentWillUnmount(){
        console.log("Child component is hidden now");
    }

    render() {
        // console.log("render Child Components");
    
        return (
          <div>
            <h2>Child Component</h2>
          </div>
        )
    }
}

export default Three;