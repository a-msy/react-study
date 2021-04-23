import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react'

// state mapping
function mappingState(state){
  return state;
}

// app component
class App extends Component{
  constructor(props){
    super(props); // 親からのpropsを受け取る
  }

  render(){
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    )
  }
}

// store connect
App = connect()(App);

class Message extends Component{
  style = {
    fontsize: "20px",
    padding: "20px 5px"
  }

  render(){
    return(
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    )
  }
}

// store connect
Message = connect(mappingState)(Message)

class Button extends Component{
  style = {
    fontsize: "16px",
    padding: "5px 10px",
  }

  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(event){
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement(event){
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render(){
    return (
      <div>
        <button style={this.style} onClick={this.increment}>
          +
        </button>
        <button style={this.style} onClick={this.decrement}>
          -
        </button>
      </div>
    )
  }
}

// store connect
Button = connect()(Button);

export default App;
