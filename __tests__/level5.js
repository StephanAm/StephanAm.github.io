import React from 'react';
import {shallow} from 'enzyme';
import rootReducer from '../src/reducers';
import cartReducer from '../src/reducers';
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