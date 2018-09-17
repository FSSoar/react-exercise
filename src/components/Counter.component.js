import React, { Component } from 'react'

class Counter extends Component {
  state = { count: 0 }

  constructor(props) {
    super(props)
    this.state = { count: props.initialValue }
  }

  handleDecrementClick = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleIncrementClick = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div className="counter">
        <center>
          <h1>{this.state.count} </h1>
          <button onClick={this.handleDecrementClick}> - </button>
          <button onClick={this.handleIncrementClick}> + </button>
        </center>
      </div>
    )
  }
}

export default Counter
