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
    it("should init with an empty array called 'cart'",()=>{
      var state = createStore(rootReducer).getState();
      expect(Object.keys(state)).toContain("cart");
      expect(state.cart).toBeInstanceOf(Array);
      expect(state.cart.length).toEqual(0);
    });
    it("should init with an empty array called 'shoes'",()=>{
      var state = createStore(rootReducer).getState();
      expect(Object.keys(state)).toContain("shoes");
      expect(state.shoes).toBeInstanceOf(Array);
      expect(state.shoes.length).toEqual(0);
    });
    
    it("should init with an empty array called 'displayShoes'",()=>{
        var state = createStore(rootReducer).getState();
        expect(Object.keys(state)).toContain("displayShoes");
        expect(state.displayShoes).toBeInstanceOf(Array);
        expect(state.displayShoes.length).toEqual(0);
      });
});