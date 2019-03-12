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

describe("exercise 2", () => {
    it('Each item should have a location property', () => {
        store.list.forEach(i => {
            expect(i.location).toBeTruthy()
            expect(isObservableProp(i, "location"), 'The location property should be observable').toBeTruthy()
        })
    })
    it('The location property should have a default value of "Super Sell"', () => {
        store.addItem("test")
        let test = store.list.find(i => i.name === "test")
        expect(test.location).toBe("Super Sell")
    })
    it('the location should be rendered next to each item', () => {
        const wrapper = render(<App store = {store}/>)
        let location = wrapper.find('.location').first().html()
        console.log(location)
        expect(location).toBeTruthy()
    })
})