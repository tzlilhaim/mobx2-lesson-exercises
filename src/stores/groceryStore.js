import { observable, action } from 'mobx'

class Item {
    @observable name
    @observable completed = false
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
}

let groceryList = new ShoppingList()
groceryList.list.push(potatoes)

export default groceryList