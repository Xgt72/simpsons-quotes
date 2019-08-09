import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./component/Quote-quest1";
import Lamp from "./Lamp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      working: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { working: !prevState.working };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={ this.state.working ? "App-logo-working" : "App-logo" } alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button className="work" onClick={this.handleClick}>{ this.state.working ? "Homer need a break" : "Homer must work" }</button>
        <Lamp on />
        <Lamp />
        <Quote />
      </div>
    );
  }
  
}

export default App;
