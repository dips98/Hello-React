import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor(){
        super()
        this.state= {
            message: "Click me"
        }
    }

    clickHandler(params) {
        console.log("Button class Clicked");    
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>{this.state.message}</button>
      </div>
    )
  }
}

export default ClassClick
