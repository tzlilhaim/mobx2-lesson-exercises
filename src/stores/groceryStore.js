import { observable, action } from 'mobx'

class Item {
    @observable name
    @observable completed = false
    @observable location = 'Super Sell'
    constructor(name) {
        this.name = name
    }
}

let potatoes = new Item("Potatoes")

class ShoppingList {
    @observable list = []
    @observable length
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        const newItem = new Item(name)
        this.list.push(newItem)
    }
    @action editItem = (name, newLocation) => {
        this.list.forEach(i => console.log(i.name))
        let item = this.list.find(i => i.name === name)
        item.location = newLocation
    }
    @action deleteItem = (name) => {
        let itemIndex = this.list.findIndex(i => i.name === name)
        this.list.splice(itemIndex, 1)
    } 
}

let groceryList = new ShoppingList()
groceryList.list.push(potatoes)
groceryList.addItem("hunter")

export default groceryList