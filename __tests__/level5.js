import React from 'react';
import {shallow} from 'enzyme';
import rootReducer from '../src/reducers';
import cartReducer from '../src/reducers';
import {createStore} from 'redux';
//qimport {combineReducers} from 'redux';

describe('rootReducer', () => {
    it("should be a function",()=>{
        expect(rootReducer).toBeInstanceOf(Function);
    });
});
describe('cartReducer',()=>{
    it("should be a function",()=>{
        expect(cartReducer).toBeInstanceOf(Function);
    });
});

describe('Redux Store', ()=>{
    it("should create a redux store using the 'rootReducer'",()=>{
        var store = createStore(rootReducer);
        expect(store).isNotNull;
    });
});