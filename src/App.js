import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';

@observer
class App extends Component {  
  render() {
    return (
      <div className="App">
          {this.props.store.list.map(i => <div>{i.iName}</div>)}
          <div id="home-background"></div>
      </div>
    );
  }
}

export default App;
