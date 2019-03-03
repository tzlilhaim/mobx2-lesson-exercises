import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import store from '../../src/stores/groceryStore'

configure({ adapter: new Adapter() });

describe("exercise1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App store ={store} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
    it ('store should have a checkItem function that changes the price of a given item', () => {
        const changePrice = store.checkItem
        store.list.push({name: "test", completed: false})
        changePrice("test")
        const test = store.list.find(i => i.name === "test")
        expect(test.completed, 'checkItem should change the completed value of a specified item').toBeTruthy()
    })
    // it ('checkItem function should be an action')

    //check the function works
    //check that it's an @action
    //check function runs on click
    //check display changed (class change)
})