import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';

@observer
class App extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  render() {
    return (
      <div className="App">
        {this.props.store.list.map((i,ind) => {
          return <div className = {i.completed ? "crossed": null}
                      key={ind}>
                 <input type="checkbox"
                        onClick = {this.checkItem} 
                        value={i.iName}/> 
                        {i.iName}</div>
                }
          )}
          <div id="home-background"></div>
      </div>
    );
  }
}

export default App;
