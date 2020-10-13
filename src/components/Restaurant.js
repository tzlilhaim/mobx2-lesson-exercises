import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import ResInput from "./ResInput"
import Reservation from "./Reservation"

@inject("GeneralStore", "RestaurantStore")
@observer
class Restaurant extends Component {
  addReservation = () => {
    this.props.RestaurantStore.addRes(
      this.props.GeneralStore.name,
      this.props.GeneralStore.numPeople
    )
  }
  render() {
    return (
      <div>
        <p>You have {this.props.RestaurantStore.openTables} open tables</p>
        <p>
          You have {this.props.RestaurantStore.restPopulation} people in the
          restaurant
        </p>
        <p>
          You have {this.props.RestaurantStore.completedTables} completed
          reservation
          {this.props.RestaurantStore.completedTables !== 1 ? "s" : null}
        </p>
        <ResInput />
        <button id="addRes" onClick={this.addReservation}>
          Add Reservation
        </button>
        <div className="reservations">
          {this.props.RestaurantStore.reservations.map((r) => {
            return <Reservation reservation={r} />
          })}
        </div>
      </div>
    )
  }
}

export default Restaurant
