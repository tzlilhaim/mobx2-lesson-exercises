import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../src/stores/groceryStore'

configure({ adapter: new Adapter() });

describe("exercise1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App store ={store} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
    it ('store should have a checkItem function that updates a given items completed property', () => {
        const checkItem = store.checkItem
        store.list.push({name: "test", completed: false})
        checkItem("test")
        const test = store.list.find(i => i.name === "test")
        expect(test.completed, 'checkItem should change the completed value of a specified item').toBeTruthy()
    })
    it ('checkItem function should be a MobX action', () => {
        const checkItem = store.checkItem
        expect(checkItem.isMobxAction).toBeTruthy()
    })
    it ('Your input should have an onClick which invokes the checkItem function', () => {
        const wrapper = mount(<App store ={store}/>)
        let selected = wrapper.find(".listItem").first().parent('div').hasClass("crossed")
        wrapper.find('.listItem').first().simulate('click')
        expect(wrapper.find(".listItem").first().parent('div').hasClass("crossed")).toBe(!selected)
    })

})