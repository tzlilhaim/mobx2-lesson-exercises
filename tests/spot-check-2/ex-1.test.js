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
      
    it('App is reading the mobx store list property', () => {
        const wrapper = mount(<App store ={store}/>);
        console.log(wrapper.props)
        expect(wrapper.props().store.list).toBeDefined();
    });
})






