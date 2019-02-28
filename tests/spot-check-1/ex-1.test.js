import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import Home from '../../src/components/Home';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import groceryList from '../../src/stores/groceryStore'
import { isObservable } from 'mobx' 
import { mount, render, shallow, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("exercise1", () => {
    it ('groceryList class store should have an observable property "list"', () => {
        const store = groceryList;
        expect(store, "You should have exported a class groceryList").toBeDefined()
        expect(isObservable(store.list), "the list property should be observable").toBeTruthy()
    })
    // it('Application should render without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
    //     ReactDOM.unmountComponentAtNode(div);
    //   });
      
    //   it('Wizards link should route to Wizard directory', () => {
    //       const wrapper = render(<MemoryRouter><Home /></MemoryRouter>);
    //       // TODO: add a smarter validation for other types of html hierarchy..
    //       let wizardsLink = wrapper.find('#wizards').find('span').closest("a");
    //       expect(wizardsLink.prop('href'), `the function should return ${value}, but it returned ${othervalue}`).toEqual('/directory/wizards');
    //   });
      
    //   it('Bestiary link should route to Bestiary directory', () => {
    //       const wrapper = render(<MemoryRouter><Home /></MemoryRouter>);
    //       let bestiaryLink = wrapper.find('#bestiary').find('span').closest("a");
    //       expect(bestiaryLink.prop('href')).toEqual('/directory/bestiary');
    //   });
})






