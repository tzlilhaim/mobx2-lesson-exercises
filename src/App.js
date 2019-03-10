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
          return <div class = {i.completed ? "crossed": null}
                      key={ind}>
                 <input type="checkbox"
                        class = "listItem"
                        onClick = {this.checkItem} 
                        value={i.name}/> 
                        {i.name}</div>
                }
          )}
          <div id="home-background"></div>
      </div>
    );
  }
}

export default App;
