import React from 'react';
import {shallow} from 'enzyme';
import rootReducer from '../src/reducers';
import cartReducer from '../src/reducers';
import {createStore} from 'redux';
import initStore from '../src/store';
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
    
    it("should init with an 'null' property called 'facetSelected'",()=>{
        var state = createStore(rootReducer).getState();
        expect(Object.keys(state)).toContain("facetSelected");
        expect(state.facetSelected).toBeNull();
      });
    it("should change the facetSelected when on the 'FACET_SELECT' action type",()=>{
        var store = createStore(rootReducer);
        var dummyFacet = {brand:"brandX"};
        expect(store.getState().facetSelected).toBeNull();
        
        store.dispatch({type:"FACET_SELECT",payload:dummyFacet});
        expect(store.getState().facetSelected).not.toBeNull();
        expect(store.getState().facetSelected.brand).toEqual(dummyFacet.brand);
        
        store.dispatch({type:"FACET_SELECT",payload:dummyFacet});
        expect(store.getState().facetSelected).toBeNull();
    });
    it("should update the content of the 'shoe' field on the 'SHOES_SET' action type",()=>{
        var store = createStore(rootReducer);
        var dummyArray = [1,2,3,4,5,6];
        expect(store.getState().shoes.length).toEqual(0);
        store.dispatch({type:'SHOES_SET',payload:dummyArray});
        expect(store.getState().shoes.length).toEqual(dummyArray.length);
        
    });
});