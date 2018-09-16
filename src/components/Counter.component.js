import React, { Component } from 'react'

class Counter extends Component {
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
    this.state = { count: 0 }
  }

  render() {
    return <h1>0</h1>
  }
}

export default Counter
