import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Translate from './i18n/Translate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <p>{Translate.translate("hello_world")}</p>
          <p>{Translate.translate("subkey1.subkey2.subkey3.subkey4")}</p>
          <p>{Translate.translate("with_extras",["15"])}</p>
        </p>
      </div>
    );
  }
}

export default App;
