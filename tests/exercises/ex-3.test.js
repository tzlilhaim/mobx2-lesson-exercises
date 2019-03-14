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
    // beforeEach(() => {
    //     window.prompt = () => {
    //       return "party city";
    //     }
    // })
    it ('The store should have an editItem function that edits the location of a given item', async () => {
        await store.addItem("test")
        store.editItem("test", "wonderland")
        const test = store.list.find(i => i.name === "test")
        expect(test.location).toBe("wonderland")
    })
    it ('editItem function should be a MobX action', () => {
        expect(store.editItem.isMobxAction).toBeTruthy()
    })
         //MAKE PROMPT WORK DMANIT
    // it('Edit button should be rendered per each list item and work on click', () => {
    //     const wrapper = mount(<App store = {store}/>)
    //     wrapper.find('.editButton').first().simulate('click')
    //     let location = wrapper.find('.location').first().html()
    //     expect(location).toBe("party city")
    // })
})