import React from 'react';
import ReactDOM from 'react-dom';
import assert, { notDeepEqual } from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import store from '../../src/stores/groceryStore'
import { isObservable, isObservableProp } from 'mobx'

configure({ adapter: new Adapter() });

describe("exercise 3", () => {
    it ('The store should have a deleteItem function that deletes an item from the list', () => {
        store.addItem("test")
        store.deleteItem("test")
        const test = store.list.find(i => i.name === "test")
        expect(test).toBeFalsy()
    })
    it ('deleteItem function should be a MobX action', () => {
        expect(store.deleteItem.isMobxAction).toBeTruthy()
    })
    it('delete button should be rendered per each list item and work on click', () => {
        const wrapper = mount(<App store = {store}/>)
        store.addItem("test") // does not save the item in the store? async?
        let selected = wrapper.find(".listItem").first().props().value
        expect(selected).toBe('Potatoes')
        // let location = wrapper.find('.location').first().html()
        wrapper.find('.deleteButton').first().simulate('click')
        expect(wrapper.find(".listItem").first().props().value).not.toBe(selected)
    })
})