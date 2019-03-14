import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';

@observer
class App extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    let newLocation = prompt("Edit location")
    this.props.store.editItem(e.target.value, newLocation)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
  }
  render() {
    return (
      <div className="App">
        {this.props.store.list.map((i,ind) => {
          return <div className = {i.completed ? "crossed": null}
                      key={ind}>
                    <input type="checkbox"
                        className = "listItem"
                        onClick = {this.checkItem} 
                        value={i.name}/> 
                        {i.name} - 
                        <span className="location">{i.location}</span>
                        <button onClick = {this.editItem}
                                className = "editButton">Edit</button>
                        <button onClick = {this.deleteItem}
                                className = "deleteButton"
                                value = {i.name}>Delete</button>
                  </div>
                }
          )}
          <div id="home-background"></div>
      </div>
    );
  }
}

export default App;
