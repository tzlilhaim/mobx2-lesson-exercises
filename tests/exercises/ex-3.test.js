import React from 'react';
import App from '../../src/App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../src/stores/groceryStore'

configure({ adapter: new Adapter() });

describe("exercise 3", () => {
    it ('The store should have an editItem function that edits the location of a given item', () => {
        store.addItem("test")
        store.editItem("test", "wonderland")
        const test = store.list.find(i => i.name === "test")
        expect(test.location).toBe("wonderland")
    })
    it ('editItem function should be a MobX action', () => {
        expect(store.editItem.isMobxAction).toBeTruthy()
    })
    it('Edit button should be rendered per each list item and work on click', () => {
        const wrapper = mount(<App store = {store}/>)
        let onClick = wrapper.find('.editButton').first().prop('onClick')
        expect(onClick).toBeDefined()
    })
})