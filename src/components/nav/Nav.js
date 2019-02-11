import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Nav extends Component {
  render() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>REACT DRESS </div>
      </header>
    );
  }
}

export default Nav;