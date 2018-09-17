import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const InitialCountForm = props => {
  return (
    <div id="countForm">
      <center>
        <input
          id="inputField"
          placeholder="Input a Number to Start Counter"
          type="text"
        />
        <button onClick={props.handleClick} type="button">
          Submit
        </button>
      </center>
    </div>
  )
}

export default InitialCountForm
