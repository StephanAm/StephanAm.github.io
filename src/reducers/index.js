import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import shoeReducer from './shoeReducer';
const rootreducer = combineReducers({    
    cart:cartReducer,
    shoes:shoeReducer,
});

export default rootreducer;