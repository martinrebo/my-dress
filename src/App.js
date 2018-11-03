import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Dress from './components/dress/Dress';
import Size from './components/size/Size'

class App extends Component {
  render() {
    return (
      <div className="App">
<Nav />
        <main>
<Dress></Dress>
<Size></Size>
        </main>

      </div>
    );
  }
}

export default App;
