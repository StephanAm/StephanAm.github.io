import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import shoeReducer from './shoeReducer';
import displayShoesReducer from './displayShoeReducer';
import facetSelectedReducer from './facetSelectedReducer';
const rootreducer = combineReducers({    
    cart:cartReducer,
    shoes:shoeReducer,
    displayShoes:displayShoesReducer,
    facetSelected:facetSelectedReducer,
});

export default rootreducer;