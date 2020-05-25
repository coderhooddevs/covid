import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  state = {
    selected: 'home',
  };
  render() {
    return (
      <div className="App">
        <Header onSelect={(selected) => this.setState({ selected })} />
        <h1>Coderhood COVID project</h1>
        <h3>{this.state.selected}</h3>
      </div>
    );
  }
}

export default App;
