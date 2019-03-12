import React from 'react';
import ReactDOM from 'react-dom';
import assert, { notDeepEqual } from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import store from '../../src/stores/groceryStore'

configure({ adapter: new Adapter() });

describe("exercise1", () => {
    it ('store should have an addItem function that adds a new Item to the stores list property', () => {
        const addItem = store.addItem
        addItem("test")
        const test = store.list.find(i => i.name === "test")
        expect(test).toBeTruthy()
    })
    it ('addItem function should be a MobX action', () => {
        const addItem = store.addItem
        expect(addItem.isMobxAction).toBeTruthy()
    })
})