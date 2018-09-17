import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  //THIS FUNCTION HANDLES THE CLICK FROM THE BUTTON IN THE InitialCountForm
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

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>

        <Instructions />

        <div class="horizontalLine"> </div>
        <h1 id="CounterLabel"> Counter </h1>
        <div id="RowDiv">
          <InitialCountForm handleClick={this.handleClick} />
          <div id="counter"> </div>
        </div>
      </div>
    )
  }
}

export default App
