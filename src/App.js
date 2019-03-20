import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import Restaurant from './components/Restaurant';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools/>
        <h3>Reservations</h3>
        <Restaurant/>

      </div>
    );
  }
}

export default App;
