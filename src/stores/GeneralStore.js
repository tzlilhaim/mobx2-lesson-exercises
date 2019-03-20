import { observable, action } from  'mobx'

class GeneralStore {
    @observable name
    @observable numPeople
    @action handleInput = (name, value) => {
        this[name] = value
    } 
}

export default new GeneralStore()