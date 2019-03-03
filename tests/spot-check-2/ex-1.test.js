import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import Home from '../../src/components/Home';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
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
      
//       it('Bestiary link should route to Bestiary directory', () => {
//           const wrapper = render(<MemoryRouter><Home /></MemoryRouter>);
//           let bestiaryLink = wrapper.find('#bestiary').find('span').closest("a");
//           expect(bestiaryLink.prop('href')).toEqual('/directory/bestiary');
//       });
})






