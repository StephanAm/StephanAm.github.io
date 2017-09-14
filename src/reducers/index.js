import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import shoeReducer from './shoeReducer';
import facetSelectedReducer from './facetSelectedReducer';
const rootreducer = combineReducers({    
    cart:cartReducer,
    shoes:shoeReducer,
    facetSelected:facetSelectedReducer,
});

export default rootreducer;