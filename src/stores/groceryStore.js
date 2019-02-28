import { observable } from 'mobx'

class Item {
    @observable iName
    @observable completed
    constructor(iName) {
        this.iName = iName
    }
}

let potatoes = new Item("Potatoes")

class ShoppingList {
    @observable list = []
}

let groceryList = new ShoppingList()
groceryList.list.push(potatoes)

export default groceryList