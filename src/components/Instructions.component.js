import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.state = { shouldDisplayImage: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(prevState => ({
      shouldDisplayImage: !prevState.shouldDisplayImage
    }))
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        <ShowImage show={this.state.shouldDisplayImage} />
        <button onClick={this.handleToggleClick}>
          {this.state.shouldDisplayImage ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

function ShowImage(props) {
  if (!props.show) {
    return null
  }

  return (
    <img
      className="instructions__logo"
      src="https://uiuc.hack4impact.org/img/colored-logo.png"
      alt="h4i logo"
    />
  )
}
export default Instructions
