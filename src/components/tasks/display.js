import React, { Component } from 'react'


export default class Display extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    )
  }
}
