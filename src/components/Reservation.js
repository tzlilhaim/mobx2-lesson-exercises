import React, { Component } from "react"
import { observer, inject } from "mobx-react"

@inject("RestaurantStore")
class Reservation extends Component {
  completeReservation = () => {
    this.props.RestaurantStore.completeRes(this.props.reservation.id)
  }
  seatReservation = () => {
    this.props.RestaurantStore.seatRes(this.props.reservation.id)
  }
  render() {
    return (
      <div
        className={this.props.reservation.completed ? "conditional" : null}
        data-id={this.props.reservation.id}
      >
        <h4>{this.props.reservation.name}</h4>
        <span>{this.props.reservation.numPeople} people</span>
        <button onClick={this.completeReservation}>Complete</button>
        <button onClick={this.seatReservation}>Seat</button>
      </div>
    )
  }
}

export default Reservation
