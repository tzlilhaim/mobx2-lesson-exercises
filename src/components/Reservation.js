import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

//inject your store here
class Reservation extends Component{
    render () {
        return (
            <div></div>
        //render the reservation data here
        //make sure you store the ID somewhere so you can find the reservation
        //use the class "conditional" to conditionally render completed reservations
        //You should hav ea complete reservation button to complete the reservation
        )
    }
}

export default Reservation