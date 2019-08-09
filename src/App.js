import React, { Component } from 'react';
import './App.css';

import Quote from "./component/Quote";
import GenerateQuote from "./component/GenerateQuote";

class App extends Component {
  constructor() {
    super();
    const baseQuote = {
      quote:
        "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
      character: "Homer Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
    };

    this.state = {
      simpsonQuote: baseQuote
    };

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => this.setState({
        simpsonQuote: data[0],
      }));
  }

  render() {
    return (
      <div className="App">
        <Quote {...this.state.simpsonQuote} />
        <GenerateQuote selectQuote={this.getQuote} />
      </div>
    );
  }

}

export default App;
