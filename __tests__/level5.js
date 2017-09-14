import React from 'react';
import {shallow} from 'enzyme';
import {reducer} from '../src/reducers';
//qimport {combineReducers} from 'redux';

describe('reducer', () => {
    it("should be a a 'redux' reducer",()=>{
        var test = combineReducers({});
        expect(typeof combineReducers).toEqual(typeof test);
    });
});