import React from 'react';
import { mount } from 'enzyme';
import App from './components/App';

describe('App', () => {
    test('Should be App', () => {
        const wrapper = mount(<App />);
        expect(wrapper.is('App')).toBeTruthy();
    })
    
    // Add more tests here
})
