import {combineReducers} from 'redux';
import {cartReducer} from './cartReducer';
const rootreducer = combineReducers({    
    cart:cartReducer
});

export default rootreducer;