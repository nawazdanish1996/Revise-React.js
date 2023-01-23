import React, { Component } from "react";
import Nav from "./Nav";

class One extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
        // console.log("Constructor");
    }

    componentDidMount(){
        // console.log("componentDidMount");
    }

    render(){
        // console.log("render");

        return(
            <div>
                <h1>LSM</h1>
                {
                    this.state.show ? 
                    <Nav /> : null
                }
                <button 
                    onClick={()=> {this.setState({show: !this.state.show})}}
                >Toggle Navbar</button>
            </div>
        )
    }
}

export default One;