import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-138276193-1");
  ReactGA.pageview("/home");
}

class App extends Component {
  constructor(props) {
    super(props);
    initializeReactGA();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>this is Wasim Hamid's React WebPage</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
