import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.state.username = ""
    this.state.password = ""
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleLogIn(){
    console.log(this.state.username + this.state.password)
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <input name="username" value={this.state.username} onChange={this.handleInputChange} />
        <input password="password" value={this.state.password} onChange={this.handleInputChange} type="password" />
        <button onClick={this.handleLogIn} />
      </div>
    );
  }
}

export default App;
