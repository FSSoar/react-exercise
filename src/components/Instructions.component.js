import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  itemValues = [
    'data Item 1',
    'data Item 2',
    'data Item 3',
    'data Item 4',
    'de',
    'data Item 6'
  ]

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
        <RenderList item={this.itemValues} />
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

function RenderList(props) {
  var items = props.item

  return (
    <div className="listView">
      {items.map(function(item) {
        if (item.length > 2) {
          var strToRendeer = item.toUpperCase()
          return <div> - {strToRendeer} </div>
        }
      })}
    </div>
  )
}

export default Instructions
