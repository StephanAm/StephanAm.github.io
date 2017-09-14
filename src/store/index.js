import rootReducer from '../reducers';
import {createStore} from 'redux';
const initStore =() => {
    return createStore(rootReducer);
}
export default initStore