import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import shoeReducer from './shoeReducer';
import displayShoesReducer from './displayShoeReducer';
const rootreducer = combineReducers({    
    cart:cartReducer,
    shoes:shoeReducer,
    displayShoes:displayShoesReducer,
});

export default rootreducer;