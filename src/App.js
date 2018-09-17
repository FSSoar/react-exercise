import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions />

        <h1> counter </h1>
        <div>
          <center>
            <input id="inputField" type="text" />
            <button onClick={this.handleClick} type="button">
              {' '}
              Submit{' '}
            </button>
          </center>
        </div>

        <div id="counter"> </div>
      </div>
    )
  }

  handleClick = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('counter'))

    var text = document.getElementById('inputField').value
    //DATA VALIDATION THEN OUTPUT
    if (isNaN(text) == false) {
      const element = <Counter initialValue={Number(text)} />
      ReactDOM.render(element, document.getElementById('counter'))
    } else {
      const element = <h1>Please input a Number </h1>
      ReactDOM.render(element, document.getElementById('counter'))
    }
  }
}

export default App
